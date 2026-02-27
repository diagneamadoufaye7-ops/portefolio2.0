# Portfolio — Amadou Faye Diagne

Site statique dynamique construit avec Next.js App Router, TypeScript, Tailwind CSS et Framer Motion.

## Objectif

Ce dépôt sert de portfolio professionnel multi-pages (Home, About, Projects, Project Details, Skills, Architecture, Blog, Contact) prêt pour un déploiement sur Vercel ou en conteneur.

## Installation

Prérequis : Node 18+ ou 20+, npm ou pnpm/yarn.

```bash
# depuis le dossier `portfolio`
npm install
# ou
pnpm install
# ou
yarn install
```

## Lancer en local

```bash
npm run dev
# ou
pnpm dev
# puis ouvrir http://localhost:3000
```

## Configuration du formulaire de contact

Le formulaire envoie un POST vers `/api/contact`.

- En local, si aucune variable SMTP n'est définie, les messages sont "console.log" côté serveur (visible dans les logs de développement).
- Pour envoyer de vrais e-mails, configurez les variables d'environnement :

```
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=username
SMTP_PASS=password
SMTP_FROM="Portfolio <no-reply@example.com>"
CONTACT_RECEIVER=ton-email@exemple.com
```

Installez `nodemailer` si vous souhaitez utiliser l'envoi SMTP :

```bash
npm install nodemailer
```

## Mettre à jour le contenu (CV / projets / blog)

- `data/cv.ts` : informations personnelles, expériences, formation, certifications, langues.
- `data/projects.ts` : chaque projet suit l'interface `Project` (slug, title, context, problem, solution, results, architecture, etc.).
- `data/blog.ts` : articles techniques (exemples fournis). 

Conseil : extrait le texte de ton `AMD_CV.pdf` et coller les sections pertinentes dans `data/cv.ts` (personalInfo, experiences, education, certifications, languages). Si tu veux, je peux automatiser la conversion en extrayant le PDF.

## SEO et Open Graph

- Le meta global est défini dans `app/head.tsx`. Complète `og:image` si tu ajoutes une image de couverture dans `public/`.
- Pour sitemap/robots, ajoute un endpoint `app/sitemap.xml` ou utilise `next-sitemap`.

## Docker

Exemple minimal `Dockerfile` pour production (construire puis lancer) :

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY package*.json ./
RUN npm ci --production
EXPOSE 3000
CMD ["npm","start"]
```

## CI / CD (GitHub Actions)

Crée `.github/workflows/ci.yml` avec un job build + lint + test, puis déploie sur Vercel ou construis une image Docker et pousse‑la vers un registre.

## Déploiement sur Vercel

1. Pousse le repo sur GitHub.
2. Connecte le repo à Vercel.
3. Définis les variables d'environnement si nécessaire (SMTP, etc.).
4. Vercel détecte Next.js et déploie automatiquement.

## Prochaines étapes recommandées (je peux les faire pour toi)

- Extraire automatiquement le contenu de `AMD_CV.pdf` dans `data/cv.ts`.
- Ajouter `sitemap.xml` dynamique et `robots.txt`.
- Configurer l'envoi d'e-mails (nodemailer) et sécurité (reCAPTCHA) pour le formulaire.
- Ajouter des tests E2E pour vérifier les pages critiques.

Si tu veux, dis‑moi quelle action tu veux que j'exécute en premier (ex : importer le CV depuis ton PDF vers `data/cv.ts`, configurer SMTP, générer sitemap, etc.).
