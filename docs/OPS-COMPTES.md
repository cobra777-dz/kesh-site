# Guides comptes — Cloudflare (sécurité) + Plausible (analytics)

> Ces 2 items ont besoin de **TON compte**. Voici le pas-à-pas + la config exacte, prête à coller. Quand un compte est prêt, dis-le-moi : je câble le code en 5 min.

## 1. Cloudflare — en-têtes de sécurité (gratuit, ~20 min de manip + propagation DNS)
GitHub Pages ne permet aucun en-tête custom → on met **Cloudflare en proxy DEVANT** keshentreprise.com.
1. Compte gratuit sur **cloudflare.com** → **Add a site** → `keshentreprise.com` → plan **Free**.
2. Cloudflare scanne tes DNS : **vérifie que tes enregistrements existants (surtout email/SPF) sont bien recopiés** — ⚠️ n'en supprime aucun.
3. Cloudflare te donne **2 nameservers** → va chez ton registrar (où tu as acheté le domaine) et **remplace les nameservers** par ceux de Cloudflare. (propagation : quelques heures)
4. Cloudflare → **SSL/TLS** → mode **Full**.
5. Cloudflare → **Rules → Transform Rules → Modify Response Header → Create** · filtre `(http.host eq "keshentreprise.com")` · **Set static** pour chacun :
   - `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`
   - `X-Frame-Options: DENY`
   - `X-Content-Type-Options: nosniff`
   - `Referrer-Policy: strict-origin-when-cross-origin`
   - `Permissions-Policy: camera=(), microphone=(), geolocation=(), browsing-topics=()`
   - `Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; img-src 'self' data:; media-src 'self'; connect-src 'self' https://npjwpvszpxgwhpcfxefd.supabase.co; frame-ancestors 'none'; base-uri 'self'`
6. GitHub → **Settings → Pages → cocher « Enforce HTTPS »**.
7. Bonus perf : Cloudflare → **Speed** → activer **Brotli** + **HTTP/3**.

## 2. Analytics sans cookie (pas de bandeau = RGPD-friendly)
**Option A — Plausible** (~9 €/mois, hébergé UE) : compte sur **plausible.io** → add site `keshentreprise.com`. Puis je colle dans `<head>` :
`<script defer data-domain="keshentreprise.com" src="https://plausible.io/js/script.tagged-events.js"></script>`
**Option B — Cloudflare Web Analytics** (GRATUIT, si tu fais l'étape 1) : Cloudflare → **Analytics → Web Analytics** → add site → je colle le beacon.

Événements que je câblerai : `wl_submit` · `wl_success` · `wl_duplicate` · `share_click` · `carte_terrain` (l'app choisie) · `carte_reserve`.
