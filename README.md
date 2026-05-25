# 🥗 CraveBetter — Cozy, Shame-Free Indian Craving Swaps

Welcome to **CraveBetter**, a mindful, shame-free craving companion designed to offer warm comfort, decode what your body seeks, and suggest pocket-friendly, culturally relevant Indian food alternatives.

This is a premium, polished React + TypeScript + Vite single-page application built with **Vanilla CSS** and rich, responsive aesthetics. It is lightweight, 100% type-safe, and fully optimized for development and production.

---

## ✨ Features

- **Onboarding Journey**: A cozy 3-step setup to establish your name, craving goals, budget limit (e.g. Under ₹20 / Under ₹50 / Premium), and dietary preferences (e.g. Vegetarian).
- **Time-Aware Personalized Swaps**: Dynamically suggests comforting, pocket-friendly snack swaps based on the time of day (e.g. monsoon tea-time vibes, gym mode, or study late-night munches).
- **Interactive Swap Feed**: A card-deck layout allowing you to swipe through curated Indian food alternatives, matching sensory dopamine triggers (crunchy, salty, creamy, sweet) without restrictions or clinical shaming.
- **Warm Craving Coach (AI Chat)**: A responsive chat assistant that helps decode your specific cravings (like "PMS chocolate craving", "late night Maggi", "stress eating samosas") and offers cozy comfort.
- **Craving Wrapped & Insights**: In-depth analysis of your dominant texture preferences and saved swaps, giving you a custom recap.

---

## 🛠️ Project Structure

```text
├── .github/workflows/   # Automated GitHub Pages deployment pipeline
├── public/              # Static favicon and assets
├── src/
│   ├── assets/          # Custom clean assets
│   ├── components/      # UI Components (Home, SwapFeed, AIChat, Onboarding, Profile)
│   ├── data/            # Craving database and predefined AI scenarios
│   ├── utils/           # Helper scripts (Tone validator)
│   ├── App.tsx          # Application router and layout scaffold
│   ├── index.css        # Cozy global styling system & typography tokens
│   └── main.tsx         # Application entry point
├── DEPLOY.md            # Step-by-step free publishing guide
├── vite.config.ts       # Path-agnostic build configuration
└── package.json         # Dependencies and scripts
```

---

## 🚀 Running Locally

To run the application on your computer:

1. **Install Dependencies** (downloads the `node_modules` development folder):
   ```bash
   npm install
   ```
2. **Start the Development Server**:
   ```bash
   npm run dev
   ```
3. **Open the browser**:
   Click on the local address (typically `http://localhost:5173`) displayed in your terminal.

4. **Verify Quality**:
   - Run `npm run lint` to check for code compliance.
   - Run `npm run build` to generate the production bundle.

---

## 🌐 Free Publishing

This project is pre-configured for **1-click free publishing**! All asset paths are relative, meaning it compiles flawlessly everywhere.
- **GitHub Pages**: Pushing to the `main` branch automatically triggers our GitHub Action workflow to build and deploy your app for free!
- **Vercel / Netlify**: Connect your GitHub repository to Vercel or Netlify for instant, automated hosting.

For full step-by-step instructions, see **[DEPLOY.md](./DEPLOY.md)**.
