# kesh-site — Teaser KESH (keshentreprise.com)

> ## ✅ DIRECTION CARTE VALIDÉE par Cobra (23/07/2026) — **on se base dessus.**

## Ce qui est LIVE
- **Teaser** : `index.html` → https://keshentreprise.com   (⛔ **compteur intouché**)
- **Présentation « Carte Fondateur » = LA RÉFÉRENCE** : `carte.html` → **https://keshentreprise.com/carte.html**
  - pack → **walk-out cinématique** (vidéo **Veo** : le joueur sort dans le **San Siro** + **fumigènes rouges**) → **carte FUT** (art joueur KESH/ALGERIA dans le San Siro) + **note 65 bronze + stats VERROUILLÉES 🔒** (« ça se gagne sur le terrain », LOI 2)
  - **fond de page = le San Siro généré**, qui se **teinte par app** ; **choisis ton terrain** change le **DESIGN** de la carte : **rouge = Match · bleu = Play · ambre = Course · acier = Gym**
  - **tuto note animée** (« plus tu joues, plus ta note monte ») · **assistant « KESH que tu veux ? »** · **mécanique Fondateur** (parraine 10 → +10 & carte dorée) · **selfie** côté client · vraies polices Anton/Barlow

## Sur quoi se baser (sources de vérité)
1. **`docs/TEASER-SPEC.md`** — le brief complet : verdicts du gate, doctrine, assets, décisions, mécanique Fondateur, assistant, principe « réutilisable par défaut ».
2. **Charte carte** — `kesh/docs/DESIGN.md §4` + maquette `kesh/docs/design-reference/keshmatch/keshmatch-v3-stade.html` (RÉUTILISÉE, pas réinventée).
3. **Générer images/vidéos** (avatars façon FIFA, walk-outs) — via **VERTEX** (crédit 262 €), **PAS** nano-banana / AI Studio (bloqué 429). Recette exacte : mémoire `kesh-vertex-image-gen`.

## Reste à faire
- Générer les **7 autres avatars** (H/F × gaming/course/muscu) + leurs **walk-outs** (Veo).
- **Intégrer** la présentation au teaser principal (aujourd'hui page séparée `carte.html`).
- Manche 3 : self-host polices · alléger/optimiser la vidéo · **Cloudflare** (en-têtes sécurité) · **Plausible** (analytics).
- **RGPD** : remplir les `[À COMPLÉTER]` des pages légales dès l'immatriculation de la société UK.

## Règles
- Repo **statique**, **ship direct sur `main`** → GitHub Pages (~1 min). Pas de gate.
- **Compteur** (`BASE_COUNT`/`wlcount`) : **NE PAS TOUCHER** (décision Cobra).
