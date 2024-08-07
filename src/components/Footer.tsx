import Image from "next/image";
import Logo from "../../public/svg/Logo.svg";
import Facebook from "../../public/svg/Facebook.svg";
import Twitter from "../../public/svg/X.svg";
import Feed from "../../public/svg/Feed.svg";

export function Footer() {
  return (
    <div className="pt-[80px] pb-[40px]">
      <div className="flex items-center justify-center gap-x-[12px]">
        <Image src={Logo} alt="Logo" width={150} />
        {/* <p className="font-bold text-black text-[17px]">Aditya Wardana</p> */}
      </div>

      <ul className="flex flex-col items-center gap-y-[32px] pt-[56px] text-[#36485C] sm:flex-row sm:justify-center sm:gap-x-5 sm:pt-5">
        <li>Home</li>
        <li>About Us</li>
        <li>Service</li>
        <li>Teams</li>
      </ul>

      <p className="pt-[56px] text-center text-[14px] font-medium text-[#5F7896] sm:pt-5">
        © Copyright 2024. That's All. All rights reserved.
      </p>

      <div className="flex items-center justify-center gap-x-[56px] pt-[40px]">
        <Image src={Feed} alt="Facebook" />
        <Image src={Facebook} alt="Feed" />
        <Image src={Twitter} alt="Twitter" />
      </div>
    </div>
  );
}
