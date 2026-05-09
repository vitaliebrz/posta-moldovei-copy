# Poșta Moldovei — Website

Site web al Î.S. Poșta Moldovei, construit cu React. Suportă trei limbi (RO / EN / RU) și este complet responsive.

---

## Tehnologii

| Tehnologie | Rol |
|---|---|
| [React 19](https://react.dev/) | Librărie UI |
| [Vite 8](https://vitejs.dev/) | Build tool / server de dezvoltare |
| [Tailwind CSS 4](https://tailwindcss.com/) | Stilizare |
| [React Router 7](https://reactrouter.com/) | Navigare între pagini |
| [react-i18next](https://react.i18next.com/) | Traduceri (RO / EN / RU) |
| [Motion](https://motion.dev/) | Animații (navbar, lang switcher) |
| [React Icons](https://react-icons.github.io/react-icons/) | Iconițe |

---

## Structura proiectului

```
src/
├── assets/
│   └── images/          # Logo, banner, imagini grid
├── components/
│   ├── Header.jsx       # Navbar cu animație + switcher limbă
│   └── Footer.jsx       # Footer cu navigare și contact
├── layouts/
│   └── MainLayout.jsx   # Layout principal (Header + Outlet + Footer)
├── locales/
│   ├── ro.json          # Traduceri română
│   ├── en.json          # Traduceri engleză
│   └── ru.json          # Traduceri rusă
├── pages/
│   ├── Home.jsx         # Pagina principală (banner, grid servicii, noutăți)
│   ├── Courier.jsx      # Pagina Curier Rapid
│   └── QA.jsx           # Pagina Întrebări frecvente (accordion)
├── i18n.js              # Configurare i18next
├── router.jsx           # Configurare React Router
└── main.jsx             # Punct de intrare
```

---

## Funcționalități

- **Multilingv** — comutare instantă între RO / EN / RU, limba aleasă se păstrează după refresh (localStorage)
- **Navigare animată** — pill-ul activ din navbar se mișcă fluid între pagini (Framer Motion `layoutId`)
- **Responsive** — meniu hamburger pe mobil, grid adaptiv pe toate ecranele
- **Pagina Home** — banner, grid de 6 servicii cu hover, secțiune noutăți cu paginare (6 știri / pagină)
- **Pagina Courier** — hero section, carduri features, pași de utilizare, CTA
- **Pagina FAQ** — accordion (click pe întrebare pentru a afișa/ascunde răspunsul)
- **Footer** — linkuri de contact funcționale (Google Maps, tel:, mailto:)

---

## Instalare și rulare

```bash
# Instalează dependențele
npm install

# Pornește serverul de dezvoltare
npm run dev

# Build pentru producție
npm run build

# Previzualizare build
npm run preview
```

---

## Adăugare traduceri

Toate textele se află în `src/locales/`. Pentru a adăuga o cheie nouă:

1. Adaugă cheia în `ro.json`, `en.json` și `ru.json`
2. În componentă folosește `const { t } = useTranslation()` și `t('cheia-mea')`
3. Pentru array-uri (ex. FAQ, știri): `t('cheia-mea', { returnObjects: true })`
