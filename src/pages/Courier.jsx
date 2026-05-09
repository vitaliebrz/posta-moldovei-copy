import React from 'react'
import { useTranslation } from 'react-i18next'
import { MdRocketLaunch, MdGpsFixed, MdSecurity } from "react-icons/md"

const icons = [
    <MdRocketLaunch className='h-7 w-7 text-blue-400' />,
    <MdGpsFixed className='h-7 w-7 text-blue-400' />,
    <MdSecurity className='h-7 w-7 text-blue-400' />,
]

const Courier = () => {
    const { t } = useTranslation()
    const features = t('courier-features', { returnObjects: true })
    const steps = t('courier-steps', { returnObjects: true })

    return (
        <main className='flex flex-col'>

            <section className='relative flex items-center justify-center min-h-80 px-6 sm:px-12 lg:px-24 py-20 overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-to-br from-blue-950 via-[#030712] to-[#030712]' />
                <div className='absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none' />
                <div className='relative z-10 flex flex-col items-center text-center gap-6 max-w-2xl mx-auto'>
                    <h1 className='text-3xl sm:text-5xl font-bold text-white leading-tight'>
                        {t('courier-hero-title')}
                    </h1>
                    <p className='text-neutral-400 text-base sm:text-lg leading-relaxed'>
                        {t('courier-hero-subtitle')}
                    </p>
                    <button className='bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 hover:scale-105 active:scale-100'>
                        {t('courier-hero-cta')}
                    </button>
                </div>
            </section>

            <section className='px-6 sm:px-12 lg:px-24 py-16 container mx-auto xl:max-w-screen-xl'>
                <h2 className='text-2xl sm:text-3xl font-bold text-white text-center mb-10'>
                    {t('courier-features-title')}
                </h2>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
                    {features.map((f, i) => (
                        <div key={i} className='flex flex-col gap-4 bg-gray-800/50 border border-neutral-700 rounded-2xl p-6'>
                            <div className='bg-blue-950/60 w-12 h-12 rounded-xl flex items-center justify-center'>
                                {icons[i]}
                            </div>
                            <h3 className='text-white font-semibold text-lg'>{f.title}</h3>
                            <p className='text-neutral-400 text-sm leading-relaxed'>{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className='px-6 sm:px-12 lg:px-24 py-16 bg-neutral-900/30'>
                <div className='container mx-auto xl:max-w-screen-xl'>
                    <h2 className='text-2xl sm:text-3xl font-bold text-white text-center mb-12'>
                        {t('courier-steps-title')}
                    </h2>
                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8'>
                        {steps.map((s, i) => (
                            <div key={i} className='flex flex-col gap-3'>
                                <span className='text-5xl font-bold text-blue-600/30'>{s.step}</span>
                                <h3 className='text-white font-semibold text-lg'>{s.title}</h3>
                                <p className='text-neutral-400 text-sm leading-relaxed'>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className='px-6 sm:px-12 lg:px-24 py-20 container mx-auto xl:max-w-screen-xl'>
                <div className='flex flex-col items-center text-center gap-6 bg-gradient-to-r from-blue-950/60 to-neutral-900/60 border border-neutral-700 rounded-3xl p-10'>
                    <h2 className='text-2xl sm:text-4xl font-bold text-white'>{t('courier-cta-title')}</h2>
                    <p className='text-neutral-400 text-base max-w-lg'>{t('courier-cta-subtitle')}</p>
                    <button className='bg-blue-600 hover:bg-blue-500 text-white font-semibold px-10 py-3 rounded-full transition-all duration-200 hover:scale-105 active:scale-100'>
                        {t('courier-cta-btn')}
                    </button>
                </div>
            </section>

        </main>
    )
}

export default Courier
