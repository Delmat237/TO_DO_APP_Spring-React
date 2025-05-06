text
# Frontend TO_DO_APP - React + Vite

## Description

Interface utilisateur développée avec React et Vite.

---

## Prérequis

- Node.js 18+
- npm ou yarn

---

## Lancement local

Installer les dépendances :

npm install

text

Lancer le serveur de développement :

npm run dev

text

L’application sera accessible sur :  
`http://localhost:5173`

---

## Build production

Pour générer une version optimisée :

npm run build

text

---

## Configuration Docker

Le Dockerfile dans ce dossier construit l’image frontend.  
Le port 5173 est exposé.

---

## Proxy API

Le frontend est configuré pour proxyfier les requêtes API vers le backend sur `http://localhost:9000`.

---

## Contribution

Merci de suivre les conventions React et d’utiliser ESLint.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
