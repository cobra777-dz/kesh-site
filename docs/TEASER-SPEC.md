# KESH — Teaser & Système de Carte · BRIEF / SPEC

> **Statut :** ✅ **DIRECTION CARTE VALIDÉE par Cobra (23/07)** — `carte.html` existe et est à jour dans le repo, mais **DÉLIÉ du teaser public** depuis le 24/07 (Cobra : « je déploierai tout ça une fois que ce sera prêt, il y a encore beaucoup de boulot »). Accessible en direct (`noindex`, non lié depuis `index.html`) pour continuer à builder. **TOUTE session / tout dev se base dessus**, mais **ne pas relier au hero sans instruction explicite de Cobra**. · **Dernière MàJ :** 2026‑07‑24 · **Auteur :** Cobra + Claude
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

**⚠️ Décision de Cobra : CHAQUE app a SA carte (design distinct).** Le teaser mène avec la carte **KeshMatch** (phare) ; les 4 designs distincts sont un **système KeshSport** à spécifier (voir §9).

**Mécanique validée (proto M2, 23/07 — artifact `claude.ai/code/artifact/1cc47a86`) :**
- Défaut = état **KeshSport** : fond « arène » rouge+or + dans la zone stats un prompt **« ⚽🎮🏃💪 choisis ton terrain »**.
- Cliquer un terrain (Foot/Gaming/Course/Muscu) **switche carte + fond + stats** avec un flash de reveal. C'est le « mode où on sélectionne toutes les cartes » demandé par Cobra.
- **Stats LOGIQUES par app** (plus de stats de foot en gaming) : Match `VIT TIR PAS DRI DÉF PHY` · Play `VIS RÉF STR VIT MEN CLU` · Footing `END VIT ALL DÉN RÉC MEN` · Gym `FRC EXP VOL END TEC MEN`.
- **KeshMatch = San Siro DANS la carte** (comme la vraie carte FUT / le `.cp-stade` de l'app) → asset `kesh-site/assets/stade-sansiro.jpg` (v1 optimisée 36 Ko depuis `Kesh-Archive/00_Holding/stade-san-siro/`). Les 3 autres apps ont des fonds placeholder (vraies ambiances = polish après design des apps).
- Selfie = FileReader **côté client**, posé sur l'avatar de la carte, jamais envoyé.
- **Base faite. Polish après** (vraies ambiances Play/Footing/Gym + designs propres + avatars illustrés nano‑banana + walkout du reveal).

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
- ⚠️ **Selfie (teaser v1) = traité côté client uniquement** — **SUPERSEDÉ le 24/07** par la gate « Avatar de la carte » : voir §14, on part sur la vraie génération IA depuis la photo.

**Reste ouvert (plus tard) :** désigns des 3 autres cartes (Play/Footing/Gym) — teasers d'identité seulement pour l'instant (D3 du 23/07).

---

## 10. Journal

- **2026‑07‑23** — Audit complet du teaser (rapport : compteur ~99 % fabriqué, 0 RGPD/headers/analytics…). Direction actée : preview « Réserve ta carte » rouge KeshMatch + 4 apps. Corrections Cobra : KeshSalla→KeshGym, pas de slogan « Strava algérien », avatar stylé+photo. Brief gravé (ce fichier). Build à démarrer par Manche 1.
- **2026‑07‑24 (matin)** — Cobra : retire le bouton carte du hero, pas encore prêt à déployer publiquement (`022a302` revert). `carte.html` reste accessible en direct pour continuer à builder.
- **2026‑07‑24** — Cobra teste l'avatar avec 2 potes : constate qu'il ne vient pas de sa photo. Gate « Avatar de la carte » → D1 vraie génération IA depuis la photo, D2 les 8 styles d'un coup. Worker Cloudflare + JWT service-account + 8 prompts + flux carte.html + RGPD réécrit, tout construit et testé (voir §14). Bloqué sur la création du service account GCP par Cobra (`docs/OPS-VERTEX-BACKEND.md`).


---

## 11. ⭐ L'ASSISTANT « KESH que tu veux ? » + tutoriel note dynamique animé (Cobra 23/07 — GRAVÉ, NE PAS PERDRE)

- **Assistant site-wide « KESH que tu veux ? » (#KESHQUETUVEUX)** : sur tout le site / l'app, un assistant-guide qui accompagne et explique. Signature = le jeu de mots **« KESH que tu veux ? »** (= « qu'est-ce que tu veux ? »). Catchphrase + hashtag de marque. Ton fun, complice. C'est le fil d'aide (onboarding/tuto/guidage) ET une signature verbale de la marque.
- **Tutoriel note dynamique EN ANIMATION** : « **plus tu joues, plus ta note monte** » — et on le **MONTRE en animation** (la note qui grimpe depuis 65, la carte bronze qui s'illumine, les stats qui montent). Pédagogie par le mouvement. Ancré sur **LOI 2** (les stats se gagnent). À intégrer dans le tuto de la carte KeshMatch du teaser, puis partout dans le produit.


---

## 12. 🔁 RÉUTILISABLE PAR DÉFAUT (règle Cobra 23/07 — s'applique à TOUT)

Tout ce qu'on build = **composant réutilisable / partagé par défaut**, jamais un one-shot jetable. La **carte** = UNE source (idéalement un **web component `<kesh-card>`** qui marche en HTML statique ET en React → teaser + app `apps/sport/app/CartePack.tsx` + cartes marketing). Idem **assistant**, **gate** (gabarit), **avatars**, **tokens** (`packages/foundation`). Avant de coder : « d'où je le réutilise, qui d'autre le réutilisera ? ». Candidat règle DOCTRINE (repo kesh). Voir mémoire `kesh-reutilisable-par-defaut`.


---

## 13. ✅ VERDICTS DU GROS GATE (Cobra, 23/07 — DIRECTION FIGÉE)

- **D1 Périmètre** = Base solide d'abord (KeshMatch complète + 3 apps en teasers d'identité).
- **D2 Carte** = la **VRAIE carte de l'app** (`apps/sport/app/CartePack.tsx` + San Siro `.cp-stade`) — réutilisée, pas réinventée.
- **D3 Note** = **Bronze ~65 qui grimpe** (LOI 2).
- **D4 San Siro** = **les deux** (dans la carte + ambiance de scène).
- **D5 Switcher** = KeshMatch complet + 3 teasers (pas de fausses stats).
- **D6 Tuto** = bouton **« comment ça marche ? »** sur la carte → animation.
- **D7 L'anim montre** : note qui grimpe · Bronze→Argent→Or · stats qui montent · vote des adversaires · décroissance si inactif (PAS le défi filmé >85 pour le teaser).
- **D8 Assistant** = guide flottant discret « KESH que tu veux ? ».
- **D9 Forme assistant** = bulle texte fun ⚡ **+ petite mascotte** (Cobra aime 1 ET 2 → combiner).
- **D10 Avatars** = **8** (H/F × 4 sports), nano-banana.
- **D11 Flux** = la **carte DEVIENT l'inscription** (pseudo → terrain → selfie → carte → email).
- **D12 Build** = solo + council review, direct main.
- **D13 Réutilisation** (ajouté après, non tranché) → reco **web component `<kesh-card>`** (marche HTML + React), à confirmer.

### ⭐ MÉCANIQUE FONDATEUR / PARRAINAGE (D3 note — GRAVÉ, applicable aux 4 MVP)
Si un joueur **parraine > 10 personnes** (ou déclencheur type « un match » — seuil/trigger à préciser) → sa **carte passe en design « Fondateur »** (visuel premium distinct) **+ +10 de note d'un coup**, livré avec une **grosse animation** (« putain d'animation »). L'**assistant « KESH que tu veux ? »** ou une **notification push** le lui annonce. **Applicable aux 4 MVP** (Match/Play/Footing/Gym). Levier viral (parrainage) + statut/gamification.

---

## 14. ✅ M4 — Avatar généré par IA depuis la vraie photo (Cobra 24/07 — gate « Avatar de la carte »)

**Constat qui a déclenché la gate** : le visuel de la carte (joueur au San Siro) était une image générique, générée une seule fois, identique pour tout le monde — la photo uploadée ne servait qu'à un petit badge rond, jamais à générer quoi que ce soit. Testé par Cobra + 2 potes, remonté comme incompréhensible sans explication.

**Verdicts (24/07) :**
- **D1** = **Vraie génération IA à partir de la photo** (pas le set générique stylé qui était recommandé — Cobra a tranché plus ambitieux).
- **D2** = **Les 8 d'un coup** (4 sports × H/F, styles tous prêts dès le départ, pas de rollout séquentiel).

**Construit dans la foulée (24/07, code prêt, pas encore déployé) :**
- `workers/generate-avatar/` — **Worker Cloudflare** autonome (1 fichier collable dans le dashboard) : reçoit photo+app+genre, s'authentifie auprès de Vertex AI via un **service account GCP** (JWT RS256 signé en Web Crypto — logique testée et vérifiée en local), appelle Gemini 3.1 Flash Image avec la photo en référence + prompt de style, renvoie l'avatar généré. Rate-limit KV (6/h/IP, 150/jour global) pour protéger le crédit Vertex. **La photo n'est jamais stockée**, seulement des compteurs anonymes.
- **8 prompts de style** (un par app × genre) inline dans le Worker, même charte que l'avatar KeshMatch Homme déjà généré.
- `carte.html` : sélecteur Homme/Femme, case de consentement **dédiée** à l'usage de la photo (séparée du consentement e‑mail), bouton « ✨ Générer mon avatar », état de chargement sur la carte, et **repli propre** sur l'avatar générique si la génération échoue (rien ne casse). Testé de bout en bout (navigateur mobile + réseau simulé).
- `confidentialite.html` réécrit : la promesse « jamais envoyée » ne s'applique plus qu'en l'absence de génération ; section dédiée qui explique le sous-traitant (Google Cloud/Vertex AI), l'absence de stockage, la base légale (consentement dédié).
- `docs/OPS-VERTEX-BACKEND.md` — guide clics-only pour Cobra : créer le service account GCP + sa clé, poser le Worker + ses secrets/bindings dans Cloudflare (réutilise le même compte Cloudflare que `OPS-COMPTES.md`).

**Bloqué sur** : la session `gcloud` locale a expiré (réauth interactive requise, impossible en non-interactif) — impossible de provisionner le service account à la place de Cobra. **Attend Cobra** : suivre `docs/OPS-VERTEX-BACKEND.md` (service account + Worker + secret + route + KV), puis dire « c'est prêt ».
