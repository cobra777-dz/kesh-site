# Guide compte — backend avatar IA (service account GCP + Worker Cloudflare)

> Décidé le 24/07 (gate « Avatar de la carte ») : génération d'avatar **à partir de la vraie photo**, 8 styles (4 sports × H/F). Ça a besoin de **TON compte** à deux endroits. Pas-à-pas + code prêt à coller. Quand c'est fait, dis-le-moi : je teste et je branche.

**Ça réutilise le compte Cloudflare de [OPS-COMPTES.md](OPS-COMPTES.md) §1** (le même qui pose les en-têtes de sécurité) — si tu l'as déjà créé, tu sautes direct à l'étape 2.

## 1. Service account Google Cloud (5 min, clics uniquement)

Le Worker ne peut pas utiliser ta session Google personnelle (elle expire, demande une reconnexion) — il lui faut une identité technique dédiée, avec le droit strict minimum.

1. Va sur **console.cloud.google.com** → connecte-toi avec `mohamed.izri@keshentreprise.com` → vérifie que le projet en haut est bien **`stellar-access-502813-m9`**.
2. Menu ☰ → **IAM et administration** → **Comptes de service** → **Créer un compte de service**.
3. Nom : `kesh-avatar-worker`. Description : « Génération avatar carte teaser ». **Suivant**.
4. Rôle : cherche et sélectionne **`Vertex AI User`** (rien d'autre — pas Owner, pas Editor). **Continuer** → **OK**.
5. Clique sur le compte de service créé → onglet **Clés** → **Ajouter une clé** → **Créer une clé** → format **JSON** → **Créer**. Un fichier `.json` se télécharge.
   ⚠️ **Ce fichier est un secret** (comme un mot de passe) — ne le partage jamais par email/Slack en clair, ne le colle jamais dans ce chat. Il ne sert qu'à l'étape 3 ci-dessous, une seule fois.
6. Vérifie que l'API est active : ☰ → **API et services** → cherche **Vertex AI API** → si tu vois « Gérer », c'est déjà activé (normalement oui, on l'a déjà utilisé).

## 2. Le Worker Cloudflare (10 min)

1. Cloudflare → menu **Workers & Pages** → **Create** → **Workers** → **Create Worker**.
2. Nom : `kesh-avatar-worker` → **Deploy** (version vide, on la remplace ensuite).
3. **Edit code** (éditeur en ligne) → sélectionne tout, remplace par le contenu de
   [`workers/generate-avatar/src/index.js`](../workers/generate-avatar/src/index.js) (copie-colle le fichier entier, il est autonome — pas d'autre fichier à ajouter) → **Deploy**.
4. **Settings** → **Variables and Secrets** :
   - Ajoute 3 variables texte (non secrètes) : `GCP_PROJECT_ID` = `stellar-access-502813-m9` · `GCP_LOCATION` = `global` · `VERTEX_MODEL` = `gemini-3.1-flash-image`
   - Ajoute 1 **Secret** : `GCP_SA_KEY` → colle **tout le contenu** du fichier `.json` téléchargé à l'étape 1.5 (ouvre-le avec TextEdit/Bloc-notes, copie tout, colle ici). Une fois posé, **supprime le fichier .json de ton ordinateur/Téléchargements** (Corbeille) — il n'a plus besoin d'exister ailleurs que dans Cloudflare.
5. **Settings → Domains & Routes** → **Add** → route `keshentreprise.com/api/generate-avatar` (zone `keshentreprise.com`) — nécessite que le proxy Cloudflare de [OPS-COMPTES.md](OPS-COMPTES.md) §1 soit actif (nameservers basculés).
6. **Settings → Bindings** → **Add binding** → **KV Namespace** → crée un namespace `RATE_LIMIT` (bouton « Create new ») → binding name : `RATE_LIMIT`. Ça sert à limiter les abus (6 générations/heure/visiteur, 150/jour au total) sans jamais stocker de photo.

## 3. Test

Une fois posé, dis-moi « c'est prêt » — je teste depuis `carte.html` (upload d'une vraie photo, choix du genre/terrain, clic « Générer mon avatar ») et je te confirme que ça tourne.

## Budget

Chaque génération coûte environ 0,05–0,15 $ sur le crédit Vertex déjà actif (262 €, expire le 17/10/2026) — le garde-fou `GLOBAL_DAILY_LIMIT` dans le Worker (150/jour) protège contre un pic viral qui viderait le crédit d'un coup.
