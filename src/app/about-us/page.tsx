import Image from 'next/image';

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Aditya | About Us",
    description: "About Us Page"
}

export default function AboutUsPage() {
    return (
        <div className="tracking-[2px] text-white font-bold w-[400px] lg:w-[700px] text-2xl lg:text-4xl text-center mb-28">
            <h1 className="tracking-[2px] text-white font-bold w-[400px] lg:w-[700px] text-2xl lg:text-4xl text-center mb-28">
                HEADER
            </h1>
            <div className="flex flex-wrap  bg-slate-900 items-center gap-6">
                <Image src={Google} alt="" />
            </div>
        </div>
    )
}