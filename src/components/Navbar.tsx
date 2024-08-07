import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import Logo from "../../public/svg/Logo.svg";
import {AiOutlineMenu} from 'react-icons/ai'
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
      <nav className="fixed flex w-full shadow-xl backdrop-blur-md items-center px-[50px] py-[16px] z-10">
        <div className="flex items-center justify-center ">
          <Link href={'/'}>
            <Image src={Logo} alt="Logo" width={50} className="md:m-5" />
          </Link>

          {/* Navbar Page Default */}
          <div className="hidden md:flex pl-[74px] gap-x-[100px]">
            {navLinks.map((item, index) => (
              <p className="text-[#36485C] font-extrabold size-fit" key={index}>
                {item.name}
              </p>
            ))}
          </div>
        </div>      
      </nav>
      
      {/* Navbar saat md */}
      <div>
        <ul className="hidden md:flex">         
          <li className="ml-10 uppercase hover:border-b text-xl"><Link href={"/"}>Home</Link></li>
          
          <li className="ml-10 uppercase hover:border-b text-xl"><Link href={"/about-us"}>About Us</Link></li>

          <li className="ml-10 uppercase hover:border-b text-xl"><Link href={"/offer"}>Offer</Link></li>

          <li className="ml-10 uppercase hover:border-b text-xl"><Link href={"/teams"}>Teams</Link></li>
        </ul>
      </div>

      {/* Hamburger Menu */}
      <div onClick={handleNav} className="md:hidden cursor-pointer pl-24">
        <AiOutlineMenu size={25}/>
      </div>

      <div className={
        menuOpen
        ? "fixed left-0 top-0 w-[65%] md:hidden h-screen bg-white p-10 ease-in duration-500"
        : "fixed left-[-100%] top-0 p-0 ease-in duration-500"
      }>

      </div>
    </>
  );
}
