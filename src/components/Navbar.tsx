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
          <Link href={'/'}>
            <Image src={Logo} alt="Logo" width={50} className="m-8" />
          </Link>

          {/* Navbar Page Default */}
          <div className="hidden justify-self-auto md:flex gap-x-[100px] p-[50px]">
            {navLinks.map((item, index) => (
              <p className="text-[#36485C] font-extrabold size-fit" key={index}>
                {item.name}
              </p>
            ))}
          </div>
        </div>               
      </nav>

      {/* Hamburger Menu */}
      <div onClick={handleNav} className="fixed items-center md:hidden right-[10%] p-[50px] z-10">
          <Image src={hamburger} alt="hamburger" width={25} className="" />        
      </div>

      <div className='fixed w-full z-10'>
        <div className={
            menuOpen
            ? "fixed left-0 top-0 w-[40%] backdrop-blur-md md:hidden h-screen bg-gradient-to-r from-cyan-500 p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 px-0 ease-in duration-500"
          }>

          <div className='flex w-full items-center justify-end p-[10px]'>
            <div onClick={handleNav} className='cursor-pointer'>
              <AiOutlineClose size={25} />
            </div>
          </div>

          <div className='flex-col py-4'>
            <ul>
              <li 
                onClick={() => setMenuOpen(false)}
                className='py-4 font-extrabold size-fit cursor-pointer'><Link href="/"/>Home</li>
              <li
                onClick={() => setMenuOpen(false)}
                className='py-4 font-extrabold size-fit cursor-pointer'><Link href="/about-us"/>About Us</li>
              <li
              onClick={() => setMenuOpen(false)}
              className='py-4 font-extrabold size-fit cursor-pointer'><Link href="/service"/>Service</li>
              <li
              onClick={() => setMenuOpen(false)}
              className='py-4 font-extrabold size-fit cursor-pointer'><Link href="/teams"/>Teams</li>
            </ul>            
          </div>

          
        </div>
      </div>
    </>
  );
}
