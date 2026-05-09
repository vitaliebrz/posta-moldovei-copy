# Poșta Moldovei — Website

Website for Î.S. Poșta Moldovei, built with React. Supports three languages (RO / EN / RU) and is fully responsive.

🔗 **Live demo:** [posta-moldovei-copy.netlify.app](https://posta-moldovei-copy.netlify.app/)

---

## Technologies

| Technology | Role |
|---|---|
| [React 19](https://react.dev/) | UI Library |
| [Vite 8](https://vitejs.dev/) | Build tool / development server |
| [Tailwind CSS 4](https://tailwindcss.com/) | Styling |
| [React Router 7](https://reactrouter.com/) | Page navigation |
| [react-i18next](https://react.i18next.com/) | Translations (RO / EN / RU) |
| [Motion](https://motion.dev/) | Animations (navbar, lang switcher) |
| [React Icons](https://react-icons.github.io/react-icons/) | Icons |

---

## Project Structure

```
src/
├── assets/
│   └── images/          # Logo, banner, grid images
├── components/
│   ├── Header.jsx       # Navbar with animation + language switcher
│   └── Footer.jsx       # Footer with navigation and contact
├── layouts/
│   └── MainLayout.jsx   # Main layout (Header + Outlet + Footer)
├── locales/
│   ├── ro.json          # Romanian translations
│   ├── en.json          # English translations
│   └── ru.json          # Russian translations
├── pages/
│   ├── Home.jsx         # Home page (banner, services grid, news)
│   ├── Courier.jsx      # Courier service page
│   └── QA.jsx           # FAQ page (accordion)
├── i18n.js              # i18next configuration
├── router.jsx           # React Router configuration
└── main.jsx             # Entry point
```

---

## Features

- **Multilingual** — instant switching between RO / EN / RU, chosen language is saved after refresh (localStorage)
- **Animated navigation** — active pill in navbar moves fluidly between pages (Framer Motion `layoutId`)
- **Responsive** — hamburger menu on mobile, adaptive grid on all screen sizes
- **Home page** — banner, grid of 6 services with hover, news section with pagination (6 news / page)
- **Courier page** — hero section, feature cards, steps, CTA
- **FAQ page** — accordion (click on a question to show/hide the answer)
- **Footer** — functional contact links (Google Maps, tel:, mailto:)

---

## Installation & Running

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Production build
npm run build

# Preview build
npm run preview
```

---

## Adding Translations

All texts are located in `src/locales/`. To add a new key:

1. Add the key to `ro.json`, `en.json` and `ru.json`
2. In the component use `const { t } = useTranslation()` and `t('my-key')`
3. For arrays (e.g. FAQ, news): `t('my-key', { returnObjects: true })`
