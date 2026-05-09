import React from 'react'
import logo from "../assets/images/logo.svg"
import { NavLink } from 'react-router'
import { useTranslation } from 'react-i18next'
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md"

const Footer = () => {
    const { t } = useTranslation()

    const navLinks = [
        { path: "/", label: t('nav-home') },
        { path: "/courier", label: t('nav-courier') },
        { path: "/qa", label: t('nav-qa') },
    ]

    return (
        <footer className='bg-[#030712] border-t border-neutral-800'>
            <div className='container mx-auto xl:max-w-screen-xl px-6 sm:px-12 lg:px-24 py-12'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>

                    <div className='flex flex-col gap-4'>
                        <img src={logo} alt="Logo" className='h-10 w-fit' />
                        <p className='text-neutral-400 text-sm leading-relaxed'>{t('footer-desc')}</p>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <h3 className='text-white font-semibold text-sm uppercase tracking-wider'>{t('footer-nav-title')}</h3>
                        <nav className='flex flex-col gap-2'>
                            {navLinks.map(({ path, label }) => (
                                <NavLink key={path} to={path} end={path === "/"}
                                    className={({ isActive }) =>
                                        `text-sm transition-colors duration-200 ${isActive ? 'text-blue-400' : 'text-neutral-400 hover:text-white'}`
                                    }>
                                    {label}
                                </NavLink>
                            ))}
                        </nav>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <h3 className='text-white font-semibold text-sm uppercase tracking-wider'>{t('footer-contact-title')}</h3>
                        <ul className='flex flex-col gap-3'>
                            <li className='flex items-start gap-2 text-sm'>
                                <MdLocationOn className='shrink-0 mt-0.5 text-blue-400' />
                                <a href={`https://maps.google.com/?q=${encodeURIComponent(t('footer-address'))}`} target='_blank' rel='noreferrer'
                                    className='text-neutral-400 hover:text-white transition-colors duration-200'>
                                    {t('footer-address')}
                                </a>
                            </li>
                            <li className='flex items-center gap-2 text-sm'>
                                <MdPhone className='shrink-0 text-blue-400' />
                                <a href={`tel:${t('footer-phone')}`} className='text-neutral-400 hover:text-white transition-colors duration-200'>
                                    {t('footer-phone')}
                                </a>
                            </li>
                            <li className='flex items-center gap-2 text-sm'>
                                <MdEmail className='shrink-0 text-blue-400' />
                                <a href={`mailto:${t('footer-email')}`} className='text-neutral-400 hover:text-white transition-colors duration-200'>
                                    {t('footer-email')}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='mt-10 pt-6 border-t border-neutral-800 text-center text-neutral-500 text-xs'>
                    {t('footer-rights')}
                </div>
            </div>
        </footer>
    )
}

export default Footer
