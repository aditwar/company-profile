import { Metadata } from "next";
import Image from 'next/image';

export const metadata: Metadata = {
    title: "Aditya | Service",
    description: "Service Page"
}

export default function ServicePage() {
    return (
        <>
            <section className="w-full  lg:bg-[#0C0C0C] lg:pt-16 ">
                <div className="max-w-screen-2xl mx-auto bg-[#0C0C0C] lg:-z-0 -z-10">
                    <div>
                        <Image src="/server.jpg" alt="me" width="1400" height="933" decoding="async" data-nimg="1" className='w-screen  object-cover h-[590px] opacity-40' />

                    </div>
                    <div className="absolute top-44 px-6 lg:top-40 lg:px-14">
                        <h2 className="text-2xl lg:text-4xl lg:text-left text-gray-200 font-semibold text-center drop-shadow-[1px_1px_1px_blue]">Voltrive one</h2>
                        <h1 className="text-5xl lg:text-7xl lg:w-[605px] lg:text-left font-bold text-white text-center drop-shadow-[1px_1px_1px_blue]">The Alpha for the AI Robots era</h1>
                        <a className="flex justify-center z-50 mt-11 lg:justify-start  cursor-pointer" href="#produk2">
                            <button type="button" className="flex items-center bg-transparent  backdrop-blur-lg border gap-1 border-blue-600 px-3 py-2 text-[12px] text-white lg:text-sm  rounded-full font-bold hover:shadow-[0_1px_10px_blue] hover:opacity-80 transition-all duration-200">See Products
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                                </span>
                            </button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="w-full lg:pt-16">
                <div className="flex flex-wrap lg:items-center">
                    <div className="w-[390px] mx-auto lg:w-[630px]">
                        <h1 className="text-black font-semibold text-center text-2xl pb-4 lg:text-5xl lg:text-left">NanoMind: Mini AI Robot with Maximum Capabilities</h1>
                        <p className="text-sm text-center text-black pb-6 lg:pb-14 lg:text-base lg:text-left">NanoMind is an AI robot that is small in size but has extraordinary abilities. Despite being compact, NanoMind is equipped with advanced features that make it capable of handling various tasks with high efficiency.</p>
                            <div className="lg:flex hidden gap-3">
                                <button type="button" className=" text-black font-bold border border-blue-600 px-3 py-2 text-[12px]  lg:text-sm  rounded-full hover:shadow-[0_1px_10px_blue] hover:opacity-80 transition-all duration-200">Pre Order</button><button type="button" className=" text-black font-bold border border-blue-600 px-3 py-2 text-[12px]  lg:text-sm  rounded-full">$214.000</button>
                            </div>
                    </div>
                    <div className="mx-auto pb-[28px]">
                        <Image src="/office.jpg" alt="me" width="500" height="500" decoding="async" data-nimg="1" className='object-cover object-bottom w-[360px] lg:w-[350px] h-[470px] rounded-2xl' />
                    </div>
                </div>
            </section>
        </>
    )
}