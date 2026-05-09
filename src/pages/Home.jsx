import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { useState } from 'react'

import banner from "../assets/images/banner.webp"
import gridItem1 from "../assets/images/grid-item-1.webp"
import gridItem2 from "../assets/images/grid-item-2.webp"
import gridItem3 from "../assets/images/grid-item-3.webp"
import gridItem4 from "../assets/images/grid-item-4.webp"
import gridItem5 from "../assets/images/grid-item-5.webp"
import gridItem6 from "../assets/images/grid-item-6.webp"
const Home = () => {
    const { t } = useTranslation()
    const noutati = t('stiri', { returnObjects: true })
    const [page, setPage] = useState(0)

    const stiriFiltrate = noutati.slice(page * 6, page * 6 + 6)

    return (
        <main>
            <div className='justify-center items-center flex flex-col gap-10 md:gap-20 py-12 px-6 sm:px-12 lg:px-24 container mx-auto xl:max-w-screen-xl'>
                <div className='relative group/item w-full'>
                    <img src={banner} alt="Banner" className='brightness-75 rounded-xl w-full' />
                    <div className='absolute top-4 left-4 sm:top-8 sm:left-8 md:top-15 md:left-15'>
                        <h2 className='text-xl sm:text-2xl md:text-4xl uppercase font-bold text-white group-hover/item:underline underline-offset-4 cursor-pointer'>{t('baner-title')}</h2>
                        <span className='hidden sm:block text-sm md:text-lg text-white cursor-default'>{t('baner-content')}</span>
                    </div>
                </div>
                <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full'>
                    <Link to="/tracking" className='relative rounded-xl hover:scale-105 transition-all duration-300'>
                        <img src={gridItem1} alt={t('grid-item-1')} className='brightness-75 rounded-xl w-full' />
                        <h2 className='absolute bottom-4 left-4 md:bottom-10 md:left-5 text-base md:text-xl font-medium text-white'>{t('grid-item-1')}</h2>
                    </Link>
                    <Link to="/find-office" className='relative rounded-xl hover:scale-105 transition-all duration-300'>
                        <img src={gridItem2} alt={t('grid-item-2')} className='brightness-75 rounded-xl w-full' />
                        <h2 className='absolute bottom-4 left-4 md:bottom-10 md:left-5 text-base md:text-xl font-medium text-white'>{t('grid-item-2')}</h2>
                    </Link>
                    <Link to="/calculator-postal" className='relative rounded-xl hover:scale-105 transition-all duration-300'>
                        <img src={gridItem3} alt={t('grid-item-3')} className='brightness-75 rounded-xl w-full' />
                        <h2 className='absolute bottom-4 left-4 md:bottom-10 md:left-5 text-base md:text-xl font-medium text-white'>{t('grid-item-3')}</h2>
                    </Link>
                    <Link to="/calculator-courier" className='relative rounded-xl hover:scale-105 transition-all duration-300'>
                        <img src={gridItem4} alt={t('grid-item-4')} className='brightness-75 rounded-xl w-full' />
                        <h2 className='absolute bottom-4 left-4 md:bottom-10 md:left-5 text-base md:text-xl font-medium text-white'>{t('grid-item-4')}</h2>
                    </Link>
                    <Link to="/calculator-transfer" className='relative rounded-xl hover:scale-105 transition-all duration-300'>
                        <img src={gridItem5} alt={t('grid-item-5')} className='brightness-75 rounded-xl w-full' />
                        <h2 className='absolute bottom-4 left-4 md:bottom-10 md:left-5 text-base md:text-xl font-medium text-white'>{t('grid-item-5')}</h2>
                    </Link>
                    <Link to="/post-terminal" className='relative rounded-xl hover:scale-105 transition-all duration-300'>
                        <img src={gridItem6} alt={t('grid-item-6')} className='brightness-75 rounded-xl w-full' />
                        <h2 className='absolute bottom-4 left-4 md:bottom-10 md:left-5 text-base md:text-xl font-medium text-white'>{t('grid-item-6')}</h2>
                    </Link>
                </section>
                <section className='flex flex-col gap-8 w-full'>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-2xl sm:text-4xl font-medium text-white'>{t('noutati-title')}</h2>
                        <div className='flex gap-2'>
                            <button onClick={() => setPage(page - 1)} disabled={page === 0} className='bg-white h-10 w-10 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 active:scale-100 disabled:opacity-40 disabled:cursor-not-allowed'><GrFormPrevious className='h-5 w-5' /></button>
                            <button onClick={() => setPage(page + 1)} disabled={(page + 1) * 6 >= noutati.length} className='bg-white h-10 w-10 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 active:scale-100 disabled:opacity-40 disabled:cursor-not-allowed'><GrFormNext className='h-5 w-5' /></button>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 '>
                        {stiriFiltrate.map((stire, index) => {
                            return (

                                <Link key={index} to="#" className='flex flex-col gap-4 bg-gray-800/50 border border-neutral-700 rounded-2xl p-6 w-full hover:scale-105 transition-all duration-300'>
                                    <div className='flex items-center justify-between gap-2'>
                                        <span className='py-0.5 px-4 bg-blue-950/60 border border-blue-800/50 text-blue-400 text-xs font-medium rounded-full'>{t('stire')}</span>
                                        <span className='text-neutral-500 text-xs'>{stire.data}</span>
                                    </div>
                                    <h3 className='text-white font-semibold text-lg'>{stire.stireTitle}</h3>
                                    <p className='text-neutral-400 text-sm leading-relaxed'>{stire.stireContent}</p>
                                </Link>
                            )
                        })}
                    </div>



                </section>
            </div>


        </main>
    )
}

export default Home