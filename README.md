# kesh-site — Teaser KESH (keshentreprise.com)

> ## ✅ DIRECTION CARTE VALIDÉE par Cobra (23/07/2026) — **on se base dessus.**

## Ce qui est LIVE (public, `keshentreprise.com`)
- **Teaser** : `index.html` → https://keshentreprise.com   (⛔ **compteur intouché**)
- **`carte.html` n'est PAS lié depuis le teaser public** (retiré le 24/07 — Cobra : « pas encore prêt à déployer, il y a encore beaucoup de boulot »). Accessible en direct (`noindex`), sert de chantier continu.

## `carte.html` — LA RÉFÉRENCE du système de carte (en chantier, non publique)
- pack → **walk-out cinématique** (vidéo **Veo** : le joueur sort dans le **San Siro** + **fumigènes rouges**) → **carte FUT** + **note 65 bronze + stats VERROUILLÉES 🔒** (« ça se gagne sur le terrain », LOI 2)
- **fond de page = le San Siro généré**, teinté par app ; **choisis ton terrain** change le **DESIGN** de la carte : rouge = Match · bleu = Play · ambre = Course · acier = Gym
- **tuto note animée** · **assistant « KESH que tu veux ? »** · **mécanique Fondateur** (parraine 10 → +10 & carte dorée) · vraies polices Anton/Barlow
- **Avatar généré par IA depuis la vraie photo** (H/F × 4 sports) — **code prêt, backend pas encore déployé** (voir « Reste à faire »)

## Sur quoi se baser (sources de vérité)
1. **`docs/TEASER-SPEC.md`** — le brief complet : verdicts des gates, doctrine, assets, décisions, mécanique Fondateur, assistant, principe « réutilisable par défaut ».
2. **Charte carte** — `kesh/docs/DESIGN.md §4` + maquette `kesh/docs/design-reference/keshmatch/keshmatch-v3-stade.html` (RÉUTILISÉE, pas réinventée).
3. **Générer images/vidéos** (avatars façon FIFA, walk-outs) — via **VERTEX** (crédit 262 €), **PAS** nano-banana / AI Studio (bloqué 429). Recette exacte : mémoire `kesh-vertex-image-gen`.

## Fait
- **23/07 (nuit)** : RGPD form (consentement + minimisation) · vidéo hero 2,29 Mo → 337 Ko · polices auto-hébergées (0 Google Fonts, D4) · bouton hero → `/carte.html` (D1, **retiré depuis**, voir ci-dessus)
- **24/07** : bouton carte retiré du hero (Cobra) · gate « Avatar de la carte » → vraie génération IA depuis la photo, 8 styles (4 sports × H/F) d'un coup · Worker Cloudflare + JWT service-account écrit et testé (`workers/generate-avatar/`) · flux upload/genre/consentement dédié/génération dans `carte.html`, testé de bout en bout · `confidentialite.html` réécrit sur le nouveau flux photo · guide `docs/OPS-VERTEX-BACKEND.md`

## Reste à faire
- **Toi (comptes)** — deux guides clics-only t'attendent :
  - `docs/OPS-COMPTES.md` : Cloudflare (en-têtes sécu) + Plausible/analytics
  - `docs/OPS-VERTEX-BACKEND.md` : service account GCP + Worker Cloudflare (backend de l'avatar IA) — **réutilise le même compte Cloudflare**
  - Dis « prêt » sur l'un ou l'autre → je câble/teste en suivant.
- Générer les **7 autres avatars de référence** (H/F × gaming/course/muscu) + leurs **walk-outs** (Veo) pour compléter l'ambiance visuelle des 3 autres apps — **quand tu valides** (coûte du crédit Vertex, indépendant du Worker qui génère à la volée).
- **Relier `carte.html` au teaser public** — seulement quand tu donnes le feu vert (D1 du 23/07 avait été fait puis retiré le 24/07 sur ta demande).
- **RGPD** : remplir les `[À COMPLÉTER]` des pages légales dès l'immatriculation de la société UK.

## Règles
- Repo **statique**, **ship direct sur `main`** → GitHub Pages (~1 min). Pas de gate.
- **Compteur** (`BASE_COUNT`/`wlcount`) : **NE PAS TOUCHER** (décision Cobra).
- `workers/generate-avatar/` n'est **pas** déployé par GitHub Pages (site statique) — c'est un Worker Cloudflare séparé, posé à la main via `docs/OPS-VERTEX-BACKEND.md`.
