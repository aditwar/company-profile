
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Aditya | About Us",
    description: "About Us Page"
}

export default function AboutUsPage() {
    return (
        <>
            <div className='max-w-7xl mx-auto pt-[180px]'>
                <ul className='absolute lg:-z-0'>
                    <li>                        
                        <div className='absolute mb-10 md:text-end'>
                            <div className='text-black'>1996</div>
                            <div className='text-lg text-black font-bold'>Company Establishment</div>
                            <p className='lg:w-[500px] w-[350px] text-black'>The company was founded by a group of robotics engineers and AI experts with a vision to revolutionize the robotics industry. Initial team formation, including hardware engineers, software, and AI experts. Intensive research and development (R&D) for the first robotic prototype. Launch of the first prototype, Household Assistant Robot.</p>
                        </div>                        
                    </li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className="tracking-[2px] text-white font-bold w-[400px] lg:w-[700px] text-2xl lg:text-4xl text-center mb-28">
                <h1 className="tracking-[2px] text-white font-bold w-[400px] lg:w-[700px] text-2xl lg:text-4xl text-center mb-28">
                    HEADER
                </h1>
                <div className="flex flex-wrap  bg-slate-900 items-center gap-6">
                    
                </div>
            </div>
            
                    
        </>
    )
}