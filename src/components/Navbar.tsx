import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import Logo from "../../public/svg/Logo.svg";



const navLinks = [
  { name: "Home" },
  { name: "About Us" },
  { name: "Offer" },
  { name: "Teams" },
];

export function Navbar() {
  return (
    <>
      <nav className="fixed flex w-full shadow-xl backdrop-blur-md items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20  z-50">
        <div className="flex items-center ">
          <Link href={'/'}>
            <Image src={Logo} alt="Logo" width={50} className="lg:m-5" />
          </Link>

          <div className="hidden lg:flex pl-[74px] gap-x-[60px]">
            {navLinks.map((item, index) => (
              <p className="text-[#36485C] font-medium" key={index}>
                {item.name}
              </p>
            ))}
          </div>
        </div>      
      </nav>
      
      <div>
        <ul className='hidden lg:flex'>         
          <li className='ml-10 hover: border-b text.xl'><Link href={"/"}>Home</Link></li>
          
          <li className='ml-10 hover: border-b text.xl'><Link href={"/about-us"}>About Us</Link></li>

          <li className='ml-10 hover: border-b text.xl'><Link href={"/offer"}>Offer</Link></li>

          <li className='ml-10 hover: border-b text.xl'><Link href={"/teams"}>Teams</Link></li>
        </ul>
      </div>
    </>
  );
}
