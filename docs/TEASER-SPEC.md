# KESH — Teaser & Système de Carte · BRIEF / SPEC

> **Statut :** design validé dans les grandes lignes, build pas encore commencé · **Date :** 2026‑07‑23 · **Auteur :** Cobra + Claude
> **Ce fichier existe pour qu'une autre session reprenne le sujet sans rien perdre.** On grave (doctrine « livrables durables »).

---

## 0. REPRISE RAPIDE (à lire en premier par toute nouvelle session)

- **Le teaser LIVE** = `keshentreprise.com`, servi par **GitHub Pages** depuis le repo **`cobra777-dz/kesh-site`** (dossier local `~/Desktop/kesh-workspace/kesh-site`). **Ship = commit + push sur `main`** → Pages redéploie (~1 min). **Pas de gate, pas de CI, pas de branch protection.**
- **Un seul fichier** : `index.html` (auto‑suffisant, style + script inline). Assets dans `assets/`.
- **⛔ NE PAS TOUCHER AU COMPTEUR** (`BASE_COUNT`/`GROW_*`/`wlcount`). Décision ferme de Cobra. Tout le reste est ouvert.
- **Sources de vérité à lire** (dans l'ordre) : ce fichier → `kesh/docs/DESIGN.md` (bible design, la LOI) → `kesh-workspace/kesh-videos/CATALOG.md` (banque vidéo) → `Kesh-Archive/01_KeshSport/*_fiche.md` (fiches apps) → `Kesh-Archive/00_Holding/` (créa/marque).
- **Anti‑fuel** : on **réutilise** les assets existants (vidéos déjà générées, copy validée), on ne régénère pas.
- **État d'avancement** : plan en 3 manches (voir §8), suivi dans les tâches de session.

---

## 1. Contexte & intention

- Ce teaser est la phase **juste avant l'ouverture publique** (les gens commencent à tester).
- À l'ouverture, Cobra aura livré **les 4 apps de KeshSport** → le preview doit présenter **cet univers à 4 apps**, pas une seule.
- **Marché : Algérie + France.** Donc **RGPD (FR/UE) ET loi 18‑07 (DZ) s'appliquent pleinement** — conformité faite proprement, pas d'ambiguïté.
- Exigence transverse de Cobra : **« faut qu'on soit au top »**. Niveau premium partout, zéro détail bâclé.

---

## 2. Les 4 apps KeshSport

> ⚠️ **RENOMMAGE (Cobra, 23/07/2026) : `KeshSalla` → `KeshGym`.** Les dossiers d'archive (`KeshSalla_build`, `KeshSalla_fiche.md`) sont **périmés** sur le nom — utiliser **KeshGym**.
>
> ❌ **RÈGLE SLOGAN : interdit « le Strava algérien », « le TikTok du sport », « le X de l'Algérie ».** Positionnement **original**, à la hauteur. Les slogans ci‑dessous sont des **candidats à valider par Cobra** (source de voix validée : `Kesh-Archive/01_KeshSport/KeshMatch_build/KeshMatch_copy_pack.html`).

| App | Icône | Essence (fiche produit) | Slogan candidat (à valider) |
|-----|-------|--------------------------|------------------------------|
| **KeshMatch** ⚽ | foot | Le foot amateur algérien enfin digital : five de quartier → tournoi. Passeport sportif, stats vérifiées, tournois. **App phare.** | « Si tu joues, tu existes. » (déjà validée, evergreen) |
| **KeshPlay** 🎮 | gaming | Esport & gaming (FIFA, Free Fire, PUBG) : profil gamer universel, tournois cash‑prize, clans. | « Ton skill mérite un palmarès. » |
| **KeshFooting** 🏃 | course | Course/running : tracking, segments algériens (KOM), défis de communautés, événements. | « Chaque foulée laisse une trace. » |
| **KeshGym** 💪 | force | Muscu / street workout : défis filmés + votés, records, classements. Fun, viral, addictif. | « La barre ne ment jamais. » |

**ADN visuel commun** : format **short** vertical (buts, records, clips), stats en **mono**, énergie terrain.

---

## 3. Loi de marque (source : `kesh/docs/DESIGN.md`)

- **KeshSport = ROUGE & NOIR (style FIFA Ultimate Team)** — rouge `#E11D2E` / vif `#FF2E3F` sur noirs chauds `#0C0C0F / #050506`.
  > ⚠️ Les tokens `brand_tokens_KeshSport.md` (archive) sont écrits en **VERT `#22C55E` — OBSOLÈTES** (correction Cobra 18/07). Ne pas utiliser le vert. À mettre à jour un jour.
- **Or KESH invariant** (trans‑domaine) : dégradé `#FFF6CC → #E8C15A → #C6871A` — logo, grosse stat, MRZ.
- **Holding (le teaser lui‑même)** : navy `#070B14` / or. Le rouge est l'univers **KeshSport** posé dans la maison navy.
- **Logo** : wordmark **KE⚡H**, le **S = éclair d'or** (crépite ~toutes les 3 s). Déposé INAPI.
- **Typographies** : **Anton** (noms/notes/gros chiffres) · **Barlow Condensed** (labels/boutons) · **Inter** (corps) · **JetBrains Mono** (KESH ID + bande MRZ).
- **Grammaire passeport** (invariants) : header KE⚡H · hero nom en Anton dégradé blanc→couleur · meta `ville · KSH·DZ·[wilaya]·[xxxxx]` en mono doré · **photo détourée** + tampon **VÉRIFIÉ** qui se claque à −12° · **une** grosse stat héroïque en or · **bande MRZ** `P<DZA<KESH<<NOM<PRENOM…`.
- **Carte FUT KeshMatch** (`DESIGN.md §4`) : forme FUT (clip‑path), liseré or, note+position+🇩🇿 en haut‑gauche, nom Anton blanc→rouge, **6 stats VIT TIR PAS DRI DÉF PHY**, sheen, **tilt 3D**, **rituel de reveal** (pack rouge/noir qui respire → clic → flare + **walkout** → carte, **le stade s'allume** : projecteurs, tribunes, flashs, brume rouge).

---

## 4. Le preview « Réserve ta carte » (design validé — option « 4 tuiles + carte »)

Flux de la page (haut → bas) :
1. **Hero KESH Entreprise** (navy/or) — wordmark, tagline, **countdown**, **compteur (INTOUCHÉ)**. La maison‑mère.
2. **Section « KeshSport arrive »** (rouge/noir) — les **4 apps** en tuiles élégantes : icône + nom + 1 ligne + « bientôt en test ». L'univers est clair.
3. **Le hook — « Réserve ta carte »** : le visiteur entre son **pseudo** (+ **choisit son terrain** : Match/Play/Footing/Gym → segmente les futurs testeurs) → **sa carte se génère** avec un mini‑**walkout** sur fond **fumigène rouge** (asset vidéo existant) → **email = réserver la carte** → écran **« partage TA carte »** (boucle virale : chaque carte partagée = une pub).

**⚠️ Décision de Cobra : CHAQUE app a SA carte (design distinct).** Le teaser mène avec la carte **KeshMatch** (phare) ; les 4 designs distincts sont un **système KeshSport** à spécifier (voir §9, décision ouverte : 1 carte au départ vs 4 dès le teaser).

---

## 5. Avatar (exigence explicite de Cobra — NE PAS bâcler)

- **Par défaut : un avatar générique STYLÉ** — illustré, premium, **« qui ressemble vraiment à quelque chose »**. **PAS** une lettre / un monogramme (« pas un truc de merde »).
- **Puis l'utilisateur met sa photo → il se voit VRAIMENT lui** dans la carte / l'app. C'est le moment d'appropriation.
- **Teaser (v1)** : photo traitée **côté client uniquement** (jamais envoyée/stockée) = zéro souci RGPD, et le « je me vois » fonctionne quand même. Le vrai upload+détourage IA = **feature in‑app** plus tard.
- **Production des avatars génériques** : outil de Cobra = **nano‑banana** (`Kesh-Archive/00_Holding/brand/NANO_BANANA_sur_ton_Mac.md`). Prévoir un petit set (styles/genres) stylés, détourés, cohérents charte rouge/noir.

---

## 6. Assets à réutiliser (anti‑fuel — `kesh-videos/CATALOG.md`)

- 🎥 **`Generated Video July 04, 2026 - 11_07PM.mp4`** — drone city‑stade, foule, **fumigène ROUGE**, minaret (5/5, vertical) → **fond du reveal de carte / hero KeshSport**.
- 🎥 **2 spots DaVinci 15 s (5/5 ⭐)** — montrent déjà l'appli + le rêve pro.
- 🎥 `baie-alger--teaser.mp4` (éclair doré) — intro/holding.
- ✍️ **`KeshMatch_copy_pack.html`** — copy validée Marketing (voix de marque).
- 📐 **`kesh/docs/DESIGN.md §4`** — spec complète de la carte + du reveal.

---

## 7. Conformité (Royaume‑Uni + France/UE + Algérie)

> **Entité = société UK en cours de constitution à Londres (~fin juillet 2026, Cobra 23/07).** → **UK GDPR (régulateur ICO)** + **RGPD (CNIL) pour les visiteurs FR/UE** + **loi 18‑07 (ANPDP) pour l'Algérie**. Un **représentant UE (RGPD art. 27)** est peut‑être requis (société hors UE ciblant l'UE) → à confirmer avec l'avocat.
- Pages **Mentions légales** + **Politique de confidentialité** = LIVRÉES (placeholders identité tant que la société n'existe pas) · **mini‑mention + case de consentement** sous le champ email · **minimisation** (email + source ; on arrête `user_agent`/`referrer`). Preuve de consentement horodatée. Selfie = **client‑side only**.
- **Compteur INTOUCHÉ** (rappel) — le risque « pratique trompeuse » sur le compteur reste porté par Cobra en connaissance de cause.

---

## 8. Plan de build — 3 manches (ship direct sur `main`, pas à pas)

- **Manche 1 — durcissement** (sans risque, en premier) : favicon (S‑éclair) + canonical + JSON‑LD + robots/sitemap · accessibilité (reduced‑motion coupe vraiment le fond, focus visible, `<label>`, `lang="en"` sur la signature, contraste) · microcopie · RGPD (§7).
- **Manche 2 — le preview** : section 4 tuiles apps + carte KeshMatch rouge (charte) générée depuis le pseudo + « choisis ton terrain » + walkout sur fumigène rouge + email=claim + partage‑ta‑carte + **système d'avatar (§5)**.
- **Manche 3 — perf + comptes** : self‑host polices (Anton/Barlow/Inter/JetBrains Mono) + alléger/optimiser la vidéo · guides pas‑à‑pas **Cloudflare** (headers sécu) + **Plausible** (analytics) — nécessitent le compte de Cobra.

---

## 9. Décisions & questions ouvertes (LOG)

**Tranché :**
- ✅ Compteur intouché · ✅ Carte **rouge KeshMatch** · ✅ Preview « 4 tuiles + carte » · ✅ Ship direct sur `main` · ✅ Cible DZ+FR (RGPD s'applique) · ✅ `KeshSalla → KeshGym` · ✅ Interdit « le Strava algérien » (slogans originaux) · ✅ Avatar générique stylé puis photo.

**Tranché par carte de gate (Cobra, 23/07) :**
- ✅ **Slogans** : KeshMatch « **Si tu joues, tu existes.** » · KeshPlay « **La manette devient une carrière.** » · KeshFooting « **Chaque foulée laisse une trace.** » · KeshGym « **La barre ne ment jamais.** »
- ✅ **Teaser = 1 carte KeshMatch d'abord** (les 3 autres cartes distinctes suivent après).
- ✅ **« Choisis ton terrain » = OUI** (segmente les testeurs) **+ étape « upload ton selfie pour ton avatar »** dans le flux.
- ✅ **Avatars = illustré premium, par genre + sport** (set à générer nano‑banana : homme/femme × foot/gym/gaming/course).
- ✅ **Selfie (teaser v1) = traité CÔTÉ CLIENT uniquement** (jamais envoyé/stocké → RGPD‑safe) ; le pipeline IA selfie→avatar = feature in‑app plus tard.

**Reste ouvert (plus tard) :** nombre exact d'avatars du set · désigns des 3 autres cartes (Play/Footing/Gym).

---

## 10. Journal

- **2026‑07‑23** — Audit complet du teaser (rapport : compteur ~99 % fabriqué, 0 RGPD/headers/analytics…). Direction actée : preview « Réserve ta carte » rouge KeshMatch + 4 apps. Corrections Cobra : KeshSalla→KeshGym, pas de slogan « Strava algérien », avatar stylé+photo. Brief gravé (ce fichier). Build à démarrer par Manche 1.
