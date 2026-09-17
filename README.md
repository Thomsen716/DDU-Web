<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
Ogga
Hej -->

# 🌐 DDU-Web

Et webprojekt bygget med **Vite**, **React**, **Tailwind** og **Supabase** som database backend.

## 📋 Forudsætninger 

Før du går i gang, skal du have følgende installeret/oprettet:

- **[Node.js](https://nodejs.org/)** (v18 eller nyere anbefales) inkl. **npm** (eller pnpm/yarn)
- **[Git](https://git-scm.com/)**
- En **[Supabase](https://supabase.com/)**-konto samt et oprettet projekt

---

## 🚀 Hurtig igangsætning

Følg disse få trin for at køre projektet lokalt.

### 1. Klon repositoryet

```bash
git clone https://github.com/Thomsen716/DDU-Web.git
cd DDU-Web
```

### 2. Installer afhængigheder

```bash
npm install
```

### 3. Opsæt miljøvariabler (`.env`)

Opret en `.env` fil i roden af projektet, og tilføj dine Supabase-nøgler:

```env
VITE_SUPABASE_URL=din_supabase_project_url
VITE_SUPABASE_PUBLISHABLE_KEY=din_supabase_publishable_key
```

_(Du finder disse nøgler i dit Supabase Dashboard under **Project Settings** -> **API**)._

### 4. Start udviklingsserveren

```bash
npm run dev
```

Åbn derefter den anviste URL (typisk `http://localhost:5173`) i din browser.

---

## 🛠 Tech Stack

- **Frontend:** React + Vite + Tailwind
- **Database & Auth:** Supabase
