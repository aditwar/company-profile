import React from 'react';
import Image from 'next/image';

import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Aditya | About Us",
    description: "About Us Page"
}

export default function AboutUsPage() {
    return (
        <>
            <section className='w-full pt-[180px] py-40'>
                <div className='max-w-7xl mx-auto px-10 flex flex-col items-center'>
                    <h1 className='tracking-[2px] text-black font-bold w-[400px] lg:w-[700px] text-2xl lg:text-4xl text-center mb-28'>
                    Over the past decade we have transformed into a focused leader in health technology
                    </h1>
                    <div className='flex flex-wrap bg-slate-900 items-center gap-6'>

                        <Image src="/vila.png" alt="me" width="900" height="626" decoding="async" data-nimg="1" className='w-[400px] h-[385px] lg:w-[450px] object-cover color: transparent' />
                        <div className="text-gray-200 p-4 w-[400px] lg:w-[500px] mx-auto ">
                            <p className="pb-5 font-semibold">Driven by purpose</p>
                            <p className="pb-5 text-sm w-[300px]">At Alpha, our purpose is to improve people health and well-being through meaningful innovation. We aim to improve 2.5 billion lives per year by 2030, including 400 million in underserved communities.</p>

                            <p className="text-sm w-[300px] pb-16 lg:pb-0">As a technology company, we – and our brand licensees – innovate for people with one consistent belief: there’s always a way to make life better.</p>                            
                        </div>
                    </div>
                </div>
             </section>

             <section className="w-full py-20 bg-stone-950">
                <div className="max-w-7xl mx-auto flex flex-col">
                    <h1 className="text-white text-3xl mx-auto text-center w-[350px] font-semibold pb-5 lg:text-5xl lg:w-[700px]">Innovating to Address global health challenges
                    </h1>
                    <p className="text-gray-200 text-center mx-auto w-[350px] pb-16 lg:w-[800px] lg:pb-24">
                        We have a proud heritage of ground-breaking innovation that stretches back over 130 years. Meaningful innovation – focused on our customers’ needs – remains at the heart of everything we do.
                    </p>
                    <div className="flex flex-wrap justify-center mx-auto gap-3.5 lg:gap-5 pb-20">
                        <div className=" w-[180px] h-[200px] lg:w-[360px] lg:h-[250px] lg:p-8 flex flex-col justify-center bg-slate-700 bg-opacity-25 p-2  rounded-lg text-white">
                            <h1 className="text-4xl pb-2 font-bold">~9%of sales</h1>
                            <p className="text-xl font-semibold">invested in R&amp;D in 2023</p>
                        </div>
                        <div className=" w-[180px] h-[200px] lg:w-[360px] lg:h-[250px] lg:p-8 flex flex-col justify-center bg-slate-700 bg-opacity-25 p-2 rounded-lg text-white">
                            <h1 className="text-4xl pb-2 font-bold">~50% </h1>
                            <p className="text-xl font-semibold">software/data science focus in R&amp;D</p>
                        </div>
                        <div className=" w-[180px] h-[200px] lg:w-[360px] lg:h-[250px] lg:p-8 flex flex-col justify-center bg-slate-700 bg-opacity-25 p-2 rounded-lg text-white">
                            <h1 className="text-4xl pb-2 font-bold ">53,000 </h1>
                            <p className="text-xl lg:text-2xl font-semibold">patent rights</p>
                        </div>
                        <div className=" w-[180px] h-[200px] lg:w-[360px] lg:h-[250px] lg:p-8 flex flex-col justify-center bg-slate-700 bg-opacity-25 p-2 rounded-lg text-white">
                            <h1 className="text-4xl lg:text-5xl pb-2 font-bold">#1
                                <span className="text-2xl lg:text-3xl">company</span>
                            </h1>
                            <p className="lg:text-xl text-base font-semibold">for MedTech patent filings with European Patent Office in 2023</p>
                        </div>
                        <div className=" w-[180px] h-[200px] lg:w-[360px] lg:h-[250px] lg:p-8 flex flex-col justify-center bg-slate-700 bg-opacity-25 p-2 rounded-lg text-white">
                            <h1 className="lg:text-3xl text-lg pb-2 font-bold">Clarivate Top 100 Global Innovator  </h1>
                            <p className="lg:text-xl text-base font-semibold">11th year in a row</p>
                        </div>
                    </div>
                    <p className="text-gray-200 text-center mx-auto w-[350px] pb-16 lg:w-[800px] lg:pb-24">But in a fast-paced industry like ours, we can rarely innovate alone. This means partnering with healthcare providers, start-ups, universities (especially university hospitals) and other companies.</p>
                </div>
            </section>

            
        </>
    )
}