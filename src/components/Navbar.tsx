"use client";

import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import Logo from "../../public/svg/Logo.svg";
import hamburger from "../../public/svg/hamburger.svg";
import { useState } from "react"; // untuk menggunakan HOOK



const navLinks = [
  { name: "Home" },
  { name: "About Us" },
  { name: "Offer" },
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
        
        {/* Hamburger Menu */}
        <div onClick={handleNav} className="justify-center items-center md:hidden cursor-pointer p-[50px]">
          <Image src={hamburger} alt="hamburger" width={25} className="" />        
        </div>

        <div className={
          menuOpen
          ? "fixed left-0 top-0 w-[65%] md:hidden h-screen bg-white p-10 ease-in duration-500"
          : "fixed left-[-100%] top-0 p-0 ease-in duration-500"
        }>

        </div>
      </nav>
    </>
  );
}
