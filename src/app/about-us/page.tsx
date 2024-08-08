

import React from 'react';


import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Aditya | About Us",
    description: "About Us Page"
}

export default function AboutUsPage() {
    return (
        <>
             <section className='w-full bg-[#0C0C0C] py-40'>
                <div className='max-w-7xl mx-auto px-10 flex flex-col items-center'>
                    <h1 className='tracking-[2px] text-white font-bold w-[400px] lg:w-[700px] text-2xl lg:text-4xl text-center mb-28'>
                    Over the past decade we have transformed into a focused leader in health technology
                    </h1>
                    <div className='flex flex-wrap  bg-slate-900 items-center gap-6'>
                        
                        <div className="text-gray-200 p-4 w-[400px] lg:w-[450px] mx-auto ">
                            <p className="pb-5 font-semibold">Driven by purpose</p>
                            <p className="pb-5 text-sm w-[300px]">At Alpha, our purpose is to improve people’s health and well-being through meaningful innovation. We aim to improve 2.5 billion lives per year by 2030, including 400 million in underserved communities. </p>
                            <p className="text-sm w-[300px] pb-16 lg:pb-0">As a technology company, we – and our brand licensees – innovate for people with one consistent belief: there’s always a way to make life better.</p>
                        </div>
                    </div>
                </div>
             </section>
        </>
    )
}