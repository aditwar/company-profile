import React from 'react';
import Image from 'next/image';
import vila from "../../public/png/vila.png";


import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Aditya | About Us",
    description: "About Us Page"
}

export default function AboutUsPage() {
    return (
        <>
            <section className='w-full pt-[180px]'>
                <div className='max-w-7xl flex flex-col items-center'>
                    <h1 className='class="tracking-[2px] text-black font-bold w-[400px] lg:w-[700px] text-2xl lg:text-4xl text-center mb-10'>
                    Over the past decade we have transformed into a focused leader in health technology
                    </h1>
                    <div className='class="flex flex-wrap  bg-slate-900 items-center gap-6'>

                        <Image src={vila} alt="vila"></Image>
                    
                    
                        <div className="text-gray-200 p-4 w-[400px] lg:w-[500px] mx-auto ">
                            <p className="pb-5 font-semibold text-center">Driven by purpose</p>
                            <p className="pb-5 text-sm w-[300px] text-center">At Alpha, our purpose is to improve people health and well-being through meaningful innovation. We aim to improve 2.5 billion lives per year by 2030, including 400 million in underserved communities. </p>
                            <p className="text-sm w-[300px] pb-16 lg:pb-0 text-center">As a technology company, we and our brand licensees innovate for people with one consistent belief: there is always a way to make life better.</p>
                        </div>
                    </div>
                </div>
             </section>
        </>
    )
}