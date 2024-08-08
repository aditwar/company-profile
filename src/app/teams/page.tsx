import { Metadata } from "next";
import Image from 'next/image';

  

export const metadata: Metadata = {
    title: "Aditya | Teams",
    description: "Teams Page"
}

export default function TeamsPage() {
    return (
        <>
            <section className="w-full bg-[#0C0C0C] py-28">
                <div className="max-w-7xl mx-auto lg:px-10">
                    <h1 className="text-center text-6xl text-white font-light pb-10">Meet the
                        <span className="font-bold text-blue-600">team</span>
                    </h1>
                    <p className="text-center text-4xl font-bold pb-6 text-slate-200">Leadership</p>
                    <div className="flex flex-wrap justify-center gap-3 lg:gap-5">
                        <div className="bg-slate-900 rounded-md w-48">

                            <Image src="https://randomuser.me/api/portraits/women/3.jpg" alt="me" width="150" height="150" decoding="async" data-nimg="1" className='mx-auto p-2' />
                            <p className="text-lg w-40 text-center mx-auto h-14 font-semibold text-white"> Käte Köhn</p>
                            <p className="text-center text-slate-200">Germany</p>
                        </div>
                        <div className="bg-slate-900 rounded-md w-48">

                            <Image src="https://randomuser.me/api/portraits/women/3.jpg" alt="me" width="150" height="150" decoding="async" data-nimg="1" className='mx-auto p-2' />
                            <p className="text-lg w-40 text-center mx-auto h-14 font-semibold text-white"> Käte Köhn</p>
                            <p className="text-center text-slate-200">Germany</p>
                        </div>
                    </div>
                    <p className="text-center text-4xl font-bold pb-6 text-slate-200 pt-20">Creative</p>
                    <div className="flex flex-wrap justify-center gap-3 lg:gap-5">
                    <div className="bg-slate-900 rounded-md w-48">
                        <Image src="https://randomuser.me/api/portraits/women/3.jpg" alt="me" width="150" height="150" decoding="async" data-nimg="1" className='mx-auto p-2' />
                        <p className="text-lg w-40 text-center mx-auto h-14 font-semibold text-white"> Käte Köhn</p>
                        <p className="text-center text-slate-200">Germany</p>
                    </div>
                        <div className="bg-slate-900 rounded-md w-48">

                            <Image src="https://randomuser.me/api/portraits/women/3.jpg" alt="me" width="150" height="150" decoding="async" data-nimg="1" className='mx-auto p-2' />
                            <p className="text-lg w-40 text-center mx-auto h-14 font-semibold text-white"> Käte Köhn</p>
                            <p className="text-center text-slate-200">Germany</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}