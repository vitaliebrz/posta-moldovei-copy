import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { useState } from 'react';

const QA = () => {
    const { t } = useTranslation()
    const faqs = t('faq', { returnObjects: true })
    const [openIndex, setOpenIndex] = useState(false)
    return (
        <main className='flex justify-center py-12 px-6 sm:px-12 lg:px-24'>
            <div className='flex flex-col gap-6 w-full max-w-screen-xl'>
                <h1 className='text-2xl font-bold text-white'>{t('faq-title')}</h1>
                <div>
                    {faqs.map((faq, index) => (
                        <div key={index} className="flex flex-col mb-4 w-full bg-gray-800/50 border border-neutral-700 rounded-2xl overflow-hidden">
                            <div className={`flex items-center justify-between gap-2 p-5 cursor-pointer ${openIndex === index ? 'border-b border-neutral-700' : ''}`} onClick={() => setOpenIndex(openIndex === index ? false : index)}>
                                <h2 className='text-base sm:text-[1.1rem] font-semibold text-white'>{faq.title}</h2>
                                {openIndex === index
                                    ? <FaChevronUp className='shrink-0 border border-blue-800/50 bg-blue-950/60 rounded-full h-6 w-6 p-1.5 text-blue-400' />
                                    : <FaChevronDown className='shrink-0 border border-neutral-700 rounded-full h-6 w-6 p-1.5 text-neutral-400' />}
                            </div>
                            {openIndex === index && (
                                <p className='p-5 sm:pr-11 w-full text-neutral-400 text-sm sm:text-base leading-relaxed whitespace-pre-wrap'>
                                    {faq.content}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default QA