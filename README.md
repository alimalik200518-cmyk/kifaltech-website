# KifalTech — Digital Software & Web Agency

> Modern, human-designed digital software and web agency platform.

Built with **React 18**, **Vite**, and **Vanilla CSS**. Features a tailored dark aesthetic (`#171313`) with electric mint teal accents (`#29D9C5`), responsive layouts, interactive service dossiers, and authentic portfolio case studies.

---

## ⚡ Tech Stack

* **Frontend:** React 18 (`react`, `react-dom`)
* **Build System:** Vite 5 (`vite`, `@vitejs/plugin-react`)
* **Styling:** Custom CSS design system with CSS custom properties (`src/index.css`)
* **Typography:** Space Grotesk, Plus Jakarta Sans, Inter, JetBrains Mono
* **Routing:** Custom client-side router (`src/components/Router.jsx`)
* **Internationalization:** Live multi-currency converter (`USD`, `EUR`, `GBP`, `AED`, `CAD`, `AUD`)
* **Zero-Install Standalone:** Includes self-contained build (`index.html` + `app.standalone.jsx`) powered by Babel Standalone for instant browser preview

---

## 🚀 Getting Started

### Option 1: Development Server (Vite)

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Option 2: Standalone Local Server (Zero-install)

Run with PowerShell:
```powershell
powershell -ExecutionPolicy Bypass -File .\serve.ps1
```
Then visit `http://localhost:3000/`.

---

## 📁 Project Architecture

```
├── src/
│   ├── components/       # Modular React UI components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ServicesList.jsx
│   │   ├── PortfolioGrid.jsx
│   │   ├── ProcessSection.jsx
│   │   ├── PricingTabs.jsx
│   │   ├── WhyKifalTech.jsx
│   │   ├── TestimonialCarousel.jsx
│   │   ├── ContactForm.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── agencyData.js # Central business data store & SEO metadata
│   ├── App.jsx           # Root application & routing
│   ├── main.jsx          # Vite React DOM entry
│   └── index.css         # Complete agency design tokens & CSS system
├── app.standalone.jsx    # Standalone browser bundle
├── index.html            # Primary HTML entry & standalone runner
├── package.json
├── vite.config.js
├── sitemap.xml
└── robots.txt
```

---

## 📄 License

© 2026 KifalTech. All Rights Reserved.
