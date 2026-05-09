// ============================================================
// IMPORTURI — aducem în fișier tot ce avem nevoie
// ============================================================

import React, { useState } from 'react'
// useState — hook-ul React pentru a stoca date care se schimbă

import logo from '../assets/images/logo.svg'
// importăm imaginea logo-ului. Vite (build tool-ul) o va procesa automat

import { NavLink } from 'react-router'
// NavLink — ca <a href>, dar știe dacă e activ (pagina curentă)

import { useTranslation } from 'react-i18next'
// useTranslation — hook pentru traduceri (ro/en/ru)

import { motion } from "motion/react"
// motion — componente animate (motion.div = div cu animații)

import { FaBars, FaTimes } from "react-icons/fa"
// FaBars  = iconița ☰ (hamburger menu)
// FaTimes = iconița ✕ (închide meniu)


const Header = () => {

    // ============================================================
    // HOOKS — date și funcții speciale React
    // ============================================================

    const { i18n, t } = useTranslation()
    // t    — funcția de traducere: t('nav-home') → "Acasă" / "Home" / "Главная"
    // i18n — obiectul limbii: i18n.language = limba activă, i18n.changeLanguage() = schimbă limba

    const [menuOpen, setMenuOpen] = useState(false)
    // menuOpen  — starea meniului mobil: false = închis, true = deschis
    // setMenuOpen — singura funcție prin care poți schimba menuOpen
    // useState(false) — valoarea inițială este false (meniu închis)


    // ============================================================
    // FUNCȚII
    // ============================================================

    const changeLang = (lang) => {
        i18n.changeLanguage(lang)           // 1. schimbă limba în toată aplicația instant
        localStorage.setItem("lang", lang)  // 2. o salvează în browser (persistă după refresh)
        setMenuOpen(false)                  // 3. închide meniul mobil dacă era deschis
    }


    // ============================================================
    // DATE — lista link-urilor de navigare
    // ============================================================

    const navLinks = [
        { path: "/", label: t('nav-home') },        // t() traduce eticheta în limba activă
        { path: "/courier", label: t('nav-courier') },
        { path: "/qa", label: t('nav-qa') },
    ]
    // Exemplu în română: [{ path: "/", label: "Acasă" }, ...]
    // Exemplu în engleză: [{ path: "/", label: "Home" }, ...]


    // ============================================================
    // JSX — ce se afișează pe ecran
    // ============================================================

    return (
        <header className='bg-[#030712] py-4 px-8'>
        {/* bg-[#030712] = fundal negru-albăstrui custom | py-4 = padding vertical | px-8 = padding orizontal */}

            {/* ---- BARA PRINCIPALĂ (logo + nav desktop + lang desktop + buton hamburger) ---- */}
            <div className='flex justify-between items-center md:justify-around'>
            {/* flex = afișează copiii pe orizontală
                justify-between = spațiu maxim între ei (pe mobil)
                md:justify-around = spațiu egal în jur (pe desktop, de la 768px) */}

                {/* LOGO */}
                <img src={logo} className='h-10' alt="Logo" />
                {/* h-10 = înălțime 40px. Lățimea se ajustează automat (aspect ratio păstrat) */}


                {/* ---- NAVIGARE DESKTOP ---- */}
                {/* hidden md:flex = ascuns pe mobil, vizibil de la 768px */}
                <nav className="hidden md:flex bg-neutral-900 rounded-full p-1 border-t border-l border-t-blue-400/20 border-l-blue-400/20">
                {/* rounded-full = colțuri complet rotunjite (pill shape)
                    border-t-blue-400/20 = bordură sus, culoare albastră la 20% opacitate
                    border-l-blue-400/20 = bordură stânga, la fel → efect de "sticlă" subtil */}

                    {navLinks.map(({ path, label }, i) => (
                    // .map() parcurge array-ul navLinks și creează câte un NavLink pentru fiecare
                    // { path, label } = destructuring — extragem direct câmpurile din obiect
                    // i = indexul (0, 1, 2) — nu e folosit aici dar e disponibil

                        <NavLink
                            key={path}
                            // key = identificator unic cerut de React pentru elemente din .map()
                            // folosim path ("/", "/courier", "/qa") care sunt unici

                            to={path}
                            // to = destinația link-ului (echivalent href)

                            end={path === "/"}
                            // end = potrivire exactă DOAR pentru "/"
                            // fără "end", "/" ar fi activ pe ORICE pagină (toate conțin "/")

                            className="relative px-4 py-1 text-sm font-medium"
                            // relative = necesar pentru că pilula albastră e "absolute" înăuntru
                        >

                            {({ isActive }) => (
                            // NavLink poate primi o FUNCȚIE ca children
                            // React Router apelează această funcție și îi pasează { isActive }
                            // isActive = true dacă suntem pe acea pagină, false altfel

                                <>
                                {/* <> </> = Fragment — container invizibil, nu adaugă tag în HTML
                                    Necesar când vrei să returnezi 2 elemente alăturate */}

                                    {isActive && (
                                    // Dacă link-ul e activ → afișează pilula albastră animată
                                    // "isActive && <ceva>" = afișează <ceva> DOAR dacă isActive e true

                                        <motion.div
                                            layoutId="active-pill"
                                            // layoutId = ID unic Framer Motion
                                            // Toate elementele cu același layoutId sunt animate ca unul singur
                                            // Când "sare" de la Home la Courier, pilula se mișcă animat

                                            className="absolute inset-0 bg-blue-600 rounded-full"
                                            // absolute = poziționat față de părintele cu "relative"
                                            // inset-0 = top/right/bottom/left = 0 → acoperă tot părintele
                                            // Rezultat: pilula acoperă exact NavLink-ul activ

                                            transition={{ type: "spring", duration: 0.8 }}
                                            // animație de tip "spring" (elastic, ca un resort)
                                        />
                                    )}

                                    <span className={`relative z-10 ${isActive ? "text-white hover:cursor-default" : "text-neutral-400 hover:text-white cursor-pointer"}`}>
                                    {/* relative z-10 = textul apare DEASUPRA pilulei albastre (z-index)
                                        fără z-10, pilula ar acoperi textul
                                        isActive ? "text-white" : "text-neutral-400" = operator ternar:
                                        dacă activ → text alb | dacă nu → text gri (alb la hover) */}
                                        {label}
                                    </span>
                                </>
                            )}
                        </NavLink>
                    ))}
                </nav>


                {/* ---- SELECTOR LIMBĂ DESKTOP ---- */}
                <div className='hidden md:flex bg-neutral-900 rounded-full p-1 border-t border-l border-t-blue-400/20 border-l-blue-400/20'>

                    {['ro', 'en', 'ru'].map(lang => (
                    // array simplu de string-uri → 3 butoane

                        <button
                            key={lang}
                            onClick={() => changeLang(lang)}
                            // la click apelăm changeLang cu limba acestui buton
                            className='relative px-3 py-1 text-sm font-medium'
                            // relative = necesar pentru pilula "absolute" din interior
                        >
                            {i18n.language === lang && (
                            // Dacă limba acestui buton e cea activă → afișează pilula

                                <motion.div
                                    layoutId="lang-pill"
                                    // layoutId diferit de "active-pill" — sunt animații separate
                                    className="absolute inset-0 bg-blue-600 rounded-full"
                                    transition={{ type: "spring", duration: 0.8 }}
                                />
                            )}

                            <span className={`relative z-10 uppercase ${i18n.language === lang ? 'text-white' : 'text-neutral-400 hover:text-white cursor-pointer'}`}>
                            {/* uppercase = text cu litere mari (ro → RO, en → EN)
                                z-10 = text deasupra pilulei */}
                                {lang}
                            </span>
                        </button>
                    ))}
                </div>


                {/* ---- BUTON HAMBURGER (doar mobil) ---- */}
                <button
                    className='md:hidden text-white p-2'
                    // md:hidden = vizibil pe mobil, dispare de la 768px
                    onClick={() => setMenuOpen(!menuOpen)}
                    // !menuOpen = inversează: false→true, true→false
                    // click 1: menuOpen devine true  (deschide)
                    // click 2: menuOpen devine false (închide)
                >
                    {menuOpen ? <FaTimes className='h-5 w-5' /> : <FaBars className='h-5 w-5' />}
                    {/* operator ternar: dacă deschis → ✕ | dacă închis → ☰ */}
                </button>

            </div>


            {/* ---- MENIU MOBIL (apare/dispare în funcție de menuOpen) ---- */}
            {menuOpen && (
            // randare condiționată: meniul există în DOM DOAR când menuOpen este true
            // false && orice = nimic | true && <div> = afișează div-ul

                <div className='md:hidden flex flex-col gap-4 mt-4 pb-2'>
                {/* flex-col = copiii pe verticală | gap-4 = spațiu între ei
                    md:hidden = dispare pe desktop (are nav propriu) */}

                    {/* NAVIGARE MOBIL */}
                    <nav className="flex flex-col bg-neutral-900 rounded-2xl p-1 border-t border-l border-t-blue-400/20 border-l-blue-400/20">
                    {/* rounded-2xl în loc de rounded-full = colțuri mai puțin rotunde (design diferit față de desktop) */}

                        {navLinks.map(({ path, label }) => (
                            <NavLink
                                key={path}
                                to={path}
                                end={path === "/"}
                                onClick={() => setMenuOpen(false)}
                                // la click pe un link → închide meniul automat

                                className={({ isActive }) =>
                                    `px-4 py-2 text-sm font-medium rounded-xl ${isActive ? "bg-blue-600 text-white" : "text-neutral-400"}`
                                }
                                // pe mobil NU folosim animație Framer Motion
                                // link-ul activ primește direct bg-blue-600 (fundal albastru)
                                // className primește o funcție (ca mai sus) care returnează string cu clase
                            >
                                {label}
                            </NavLink>
                        ))}
                    </nav>

                    {/* SELECTOR LIMBĂ MOBIL */}
                    <div className='flex bg-neutral-900 rounded-full p-1 w-fit border-t border-l border-t-blue-400/20 border-l-blue-400/20'>
                    {/* w-fit = lățimea se adaptează la conținut (nu ocupă tot rândul) */}

                        {['ro', 'en', 'ru'].map(lang => (
                            <button
                                key={lang}
                                onClick={() => changeLang(lang)}
                                className='relative px-4 py-1.5 text-sm font-medium'
                            >
                                {i18n.language === lang && (
                                    <motion.div
                                        layoutId="lang-pill-mobile"
                                        // "lang-pill-mobile" ≠ "lang-pill" (desktop)
                                        // Cele două selectoare de limbă sunt SEPARATE vizual
                                        // Dacă aveau același layoutId, Framer Motion ar fi animat
                                        // pilula între desktop și mobil → comportament greșit
                                        className="absolute inset-0 bg-blue-600 rounded-full"
                                        transition={{ type: "spring", duration: 0.3 }}
                                    />
                                )}
                                <span className={`relative z-10 uppercase ${i18n.language === lang ? 'text-white' : 'text-neutral-400'}`}>
                                    {lang}
                                </span>
                            </button>
                        ))}
                    </div>

                </div>
            )}

        </header>
    )
}

export default Header
// export default = permite importul acestei componente în alte fișiere
// import Header from './components/Header'
