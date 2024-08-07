"use client";

import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import Logo from "../../public/svg/Logo.svg";
import hamburger from "../../public/svg/hamburger.svg";
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from "react"; // untuk menggunakan HOOK



const navLinks = [
  { name: "Home" },
  { name: "About Us" },
  { name: "Service" },
  { name: "Teams" },
];

export function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)
  const handleNav = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <nav className="fixed flex w-full shadow-xl backdrop-blur-md z-10">
        <div className="flex px-[50px] items-center">

          {/* Logo NavBar */}
          <Link href={'/'}>
            <Image src={Logo} alt="Logo" width={50} className="m-8 hover:drop-shadow-[0_0_0.3rem_#ffffff70]" />
          </Link>

          {/* Navbar Inline */}
          <div className=''>
            <ul className='hidden justify-self-auto md:flex gap-x-[100px] p-[50px]'>
              <li 
                className="text-black hover:text-purple-600 hover:drop-shadow-[0_0_0.3rem_#ffffff70] font-extrabold size-fit cursor-pointer"><Link href="/"/>Home</li>
              <li
                className="text-black hover:text-purple-600 hover:drop-shadow-[0_0_0.3rem_#ffffff70] font-extrabold size-fit cursor-pointer"><Link href="/about-us"/>About Us</li>
              <li
              className="text-black hover:text-purple-600 hover:drop-shadow-[0_0_0.3rem_#ffffff70] font-extrabold size-fit cursor-pointer"><Link href="/service"/>Service</li>
              <li
              className="text-black hover:text-purple-600 hover:drop-shadow-[0_0_0.3rem_#ffffff70] font-extrabold size-fit cursor-pointer"><Link href="/teams"/>Teams</li>
            </ul>            
          </div>          
        </div>               
      </nav>

      {/* Hamburger Menu */}
      <div onClick={handleNav} className="fixed items-center md:hidden right-[10%] cursor-pointer p-[50px] z-10">
          <Image src={hamburger} alt="hamburger" width={25} className="hover:drop-shadow-[0_0_0.3rem_#ffffff70]" />        
      </div>

      <div className='fixed w-full z-10'>
        <div className={
            menuOpen
            ? "fixed left-0 top-0 w-[40%] backdrop-blur-md md:hidden h-screen bg-gradient-to-r from-cyan-500 ease-in duration-500"
            : "fixed left-[-100%] w-[40%] backdrop-blur-md h-screen bg-gradient-to-r from-cyan-500 ease-in duration-500"
          }>

          <div className='flex w-full items-center justify-end p-[50px]'>
            <div onClick={handleNav} className='cursor-pointer hover:drop-shadow-[0_0_0.3rem_#ffffff70]'>
              <AiOutlineClose size={25} />
            </div>
          </div>

          <div className='flex-col py-4 p-10'>
            <ul>
              <li 
                onClick={() => setMenuOpen(false)}
                className='py-4 font-extrabold size-fit cursor-pointer hover:text-purple-800 hover:drop-shadow-[0_0_0.3rem_#ffffff70]'><Link href="/"/>Home</li>
              <li
                onClick={() => setMenuOpen(false)}
                className='py-4 font-extrabold size-fit cursor-pointer hover:text-purple-800 hover:drop-shadow-[0_0_0.3rem_#ffffff70]'><Link href="/about-us"/>About Us</li>
              <li
              onClick={() => setMenuOpen(false)}
              className='py-4 font-extrabold size-fit cursor-pointer hover:text-purple-800 hover:drop-shadow-[0_0_0.3rem_#ffffff70]'><Link href="/service"/>Service</li>
              <li
              onClick={() => setMenuOpen(false)}
              className='py-4 font-extrabold size-fit cursor-pointer hover:text-purple-800 hover:drop-shadow-[0_0_0.3rem_#ffffff70]'><Link href="/teams"/>Teams</li>
            </ul>            
          </div>

          <Link href={'/'} className="flex absolute bottom-0 down-[-100%] p-[50px] justify-center w-full hover:drop-shadow-[0_0_0.3rem_#ffffff70]">
            <Image src={Logo} alt="Logo" width={50} className="" />
          </Link>
        </div>
      </div>
    </>
  );
}
