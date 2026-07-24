// Cloudflare Worker — /api/generate-avatar
//
// Reçoit une photo (base64) + app + genre depuis carte.html, génère un avatar
// stylé via Vertex AI (Gemini 3.1 Flash Image) en utilisant un service account
// GCP (jamais la session personnelle Google de Cobra), et renvoie l'image générée.
//
// La photo n'est JAMAIS écrite en KV/stockage : elle transite en mémoire le
// temps de la requête puis disparaît. Seuls des compteurs (IP + date) sont
// conservés côté KV, pour le rate-limit.
//
// Secrets attendus (Worker → Settings → Variables) :
//   GCP_SA_KEY   = contenu JSON complet de la clé du service account (secret)
// Variables (non-secrètes) :
//   GCP_PROJECT_ID = stellar-access-502813-m9
//   GCP_LOCATION   = global
//   VERTEX_MODEL   = gemini-3.1-flash-image
// Binding KV :
//   RATE_LIMIT   = namespace KV dédié au rate-limit

// Prompts de style — un par (app, genre). La photo envoyée par le visiteur sert
// d'UNIQUE référence de visage ; chaque prompt produit un avatar illustré (pas un
// montage photo), même charte que l'avatar KeshMatch Homme déjà généré (San Siro).
const BASE_PROMPT =
  "Using the uploaded photo strictly as a likeness reference for the face, " +
  "generate a single stylized athletic portrait — illustrated sports-card art, not a photo edit. " +
  "Keep the person's real facial features, skin tone and hair recognizable. " +
  "Vertical framing, half-body, dramatic stadium/arena lighting, cinematic depth of field. " +
  "No text, no logos, no watermark, no visible brand names.";

const STYLE_PROMPTS = {
  "KeshMatch|H": BASE_PROMPT + " Scene: San Siro stadium at night, red smoke flares in the background, " +
    "the man wearing a black-and-red KESH football jersey, confident pre-match stance, pitch lights bokeh behind him.",
  "KeshMatch|F": BASE_PROMPT + " Scene: San Siro stadium at night, red smoke flares in the background, " +
    "the woman wearing a black-and-red KESH football jersey, confident pre-match stance, pitch lights bokeh behind her.",
  "KeshPlay|H": BASE_PROMPT + " Scene: dark esports arena, cool blue and violet neon rim light, multiple monitor glow reflections, " +
    "the man wearing a black KESH gaming jersey with blue accents, headset around the neck, focused competitive expression.",
  "KeshPlay|F": BASE_PROMPT + " Scene: dark esports arena, cool blue and violet neon rim light, multiple monitor glow reflections, " +
    "the woman wearing a black KESH gaming jersey with blue accents, headset around the neck, focused competitive expression.",
  "KeshFooting|H": BASE_PROMPT + " Scene: urban street at dusk, warm amber street lights, light mist, motion-blurred city backdrop, " +
    "the man wearing a black KESH running jersey with amber accents, mid-stride running form, determined expression.",
  "KeshFooting|F": BASE_PROMPT + " Scene: urban street at dusk, warm amber street lights, light mist, motion-blurred city backdrop, " +
    "the woman wearing a black KESH running jersey with amber accents, mid-stride running form, determined expression.",
  "KeshGym|H": BASE_PROMPT + " Scene: industrial gym at night, hard steel-blue rim light, chalk dust in the air, iron plates in the background, " +
    "the man wearing a black KESH tank top with steel-grey accents, powerful stance, intense expression.",
  "KeshGym|F": BASE_PROMPT + " Scene: industrial gym at night, hard steel-blue rim light, chalk dust in the air, iron plates in the background, " +
    "the woman wearing a black KESH tank top with steel-grey accents, powerful stance, intense expression.",
};
function stylePromptFor(app, gender) {
  return STYLE_PROMPTS[app + "|" + gender] || null;
}

const ALLOWED_ORIGIN = "https://keshentreprise.com";
const MAX_IMAGE_BYTES = 6 * 1024 * 1024; // 6 Mo (avant encodage base64)
const PER_IP_HOURLY_LIMIT = 6;
const GLOBAL_DAILY_LIMIT = 150; // garde-fou budget crédit Vertex

export default {
  async fetch(request, env, ctx) {
    if (request.method === "OPTIONS") return corsPreflight();
    if (request.method !== "POST") {
      return json({ error: "method_not_allowed" }, 405);
    }

    let body;
    try {
      body = await request.json();
    } catch (e) {
      return json({ error: "invalid_json" }, 400);
    }

    const { imageBase64, mimeType, app, gender } = body || {};
    if (!imageBase64 || !mimeType || !app || !gender) {
      return json({ error: "missing_fields" }, 400);
    }
    if (!/^image\/(jpeg|png|webp)$/.test(mimeType)) {
      return json({ error: "unsupported_mime_type" }, 400);
    }
    const raw = imageBase64.includes(",") ? imageBase64.split(",")[1] : imageBase64;
    const approxBytes = Math.floor((raw.length * 3) / 4);
    if (approxBytes > MAX_IMAGE_BYTES) {
      return json({ error: "image_too_large" }, 413);
    }
    const prompt = stylePromptFor(app, gender);
    if (!prompt) {
      return json({ error: "unknown_app_or_gender" }, 400);
    }

    const ip = request.headers.get("CF-Connecting-IP") || "unknown";
    const rl = await checkRateLimit(env, ip);
    if (!rl.ok) {
      return json({ error: rl.reason }, 429);
    }

    let accessToken;
    try {
      accessToken = await getAccessToken(env);
    } catch (e) {
      return json({ error: "auth_failed", detail: String(e.message || e) }, 502);
    }

    try {
      const result = await callVertex(env, accessToken, prompt, raw, mimeType);
      if (!result) {
        return json({ error: "generation_empty" }, 502);
      }
      return json({ imageBase64: result.data, mimeType: result.mimeType }, 200);
    } catch (e) {
      return json({ error: "generation_failed", detail: String(e.message || e) }, 502);
    }
  },
};

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}
function corsPreflight() {
  return new Response(null, { status: 204, headers: corsHeaders() });
}
function json(obj, status) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders() },
  });
}

// --- Rate limit (KV, best-effort — pas atomique, mais suffisant contre l'abus casual) ---
async function checkRateLimit(env, ip) {
  const hourBucket = Math.floor(Date.now() / 3_600_000);
  const dayBucket = Math.floor(Date.now() / 86_400_000);
  const ipKey = `rl:ip:${ip}:${hourBucket}`;
  const globalKey = `rl:global:${dayBucket}`;

  const [ipCount, globalCount] = await Promise.all([
    env.RATE_LIMIT.get(ipKey),
    env.RATE_LIMIT.get(globalKey),
  ]);

  if (Number(globalCount || 0) >= GLOBAL_DAILY_LIMIT) {
    return { ok: false, reason: "daily_budget_reached" };
  }
  if (Number(ipCount || 0) >= PER_IP_HOURLY_LIMIT) {
    return { ok: false, reason: "rate_limited" };
  }

  await Promise.all([
    env.RATE_LIMIT.put(ipKey, String(Number(ipCount || 0) + 1), { expirationTtl: 3700 }),
    env.RATE_LIMIT.put(globalKey, String(Number(globalCount || 0) + 1), { expirationTtl: 90_000 }),
  ]);
  return { ok: true };
}

// --- OAuth2 JWT-bearer flow (service account → access token Vertex) ---
let cachedToken = null; // { token, expiresAt } — best-effort, réutilisé si le Worker reste chaud
async function getAccessToken(env) {
  if (cachedToken && cachedToken.expiresAt - 60 > Date.now() / 1000) {
    return cachedToken.token;
  }
  const sa = JSON.parse(env.GCP_SA_KEY);
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const claims = {
    iss: sa.client_email,
    scope: "https://www.googleapis.com/auth/cloud-platform",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  };
  const signingInput = `${b64url(JSON.stringify(header))}.${b64url(JSON.stringify(claims))}`;
  const key = await importPrivateKey(sa.private_key);
  const sigBuf = await crypto.subtle.sign(
    { name: "RSASSA-PKCS1-v1_5" },
    key,
    new TextEncoder().encode(signingInput)
  );
  const jwt = `${signingInput}.${b64url(new Uint8Array(sigBuf))}`;

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });
  if (!res.ok) {
    throw new Error(`token_exchange_${res.status}: ${await res.text()}`);
  }
  const data = await res.json();
  cachedToken = { token: data.access_token, expiresAt: now + (data.expires_in || 3600) };
  return cachedToken.token;
}

async function importPrivateKey(pem) {
  const clean = pem
    .replace(/-----BEGIN PRIVATE KEY-----/, "")
    .replace(/-----END PRIVATE KEY-----/, "")
    .replace(/\s/g, "");
  const der = base64ToBytes(clean);
  return crypto.subtle.importKey(
    "pkcs8",
    der,
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"]
  );
}

function base64ToBytes(b64) {
  const bin = atob(b64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return bytes;
}
function b64url(input) {
  const bytes = typeof input === "string" ? new TextEncoder().encode(input) : input;
  let bin = "";
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

// --- Vertex AI call ---
async function callVertex(env, accessToken, prompt, imageBase64, mimeType) {
  const url = `https://aiplatform.googleapis.com/v1/projects/${env.GCP_PROJECT_ID}/locations/${env.GCP_LOCATION}/publishers/google/models/${env.VERTEX_MODEL}:generateContent`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }, { inlineData: { mimeType, data: imageBase64 } }],
        },
      ],
      generationConfig: { responseModalities: ["TEXT", "IMAGE"] },
    }),
  });
  if (!res.ok) {
    throw new Error(`vertex_${res.status}: ${await res.text()}`);
  }
  const data = await res.json();
  const parts = data?.candidates?.[0]?.content?.parts || [];
  const imgPart = parts.find((p) => p.inlineData);
  if (!imgPart) return null;
  return { data: imgPart.inlineData.data, mimeType: imgPart.inlineData.mimeType };
}
