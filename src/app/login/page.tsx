import { Metadata } from "next";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedin,
    FaRegEnvelope,
  } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

export const metadata: Metadata = {
    title: "Aditya | Login",
    description: "Login Page"
}

export default function LoginPage() {
    return (
        <>
        <main className="flex flex-col items-center justify-center w-full flex-1 xl:px-20 text-center  ">
            {/* Sign in section */}
            <div className="bg-white rounded-2xl shadow-2xl md:flex xl:w-2/3 max-w-4xl">
            <div className="xl:w-3/5 p-5 md:shrink-0">
                <div className=" font-bold text-[#1a1633] text-center sm:text-left">
                <span>StartUpperLife</span>
                </div>
                <div className="py-10 text-[#1a1633]">
                <h2 className="text-3xl font-bold mb-2">Sign in to Account</h2>
                <div className="border-2 w-10 border-[#1a1633] inline-block mb-2 "></div>
                {/* soscial media section */}
                <div className="flex justify-center my-2">
                    <a href="#" className="border-2 rounded-full p-2 mx-1">
                    <FaFacebookF />
                    </a>
                    <a href="#" className="border-2 rounded-full p-2 mx-1">
                    <FaInstagram />
                    </a>
                    <a href="#" className="border-2 rounded-full p-2 mx-1">
                    <FaLinkedin />
                    </a>
                </div>
                <p className="text-gray-400">or use your email account</p>
                <div className="flex flex-col items-center">
                    <div className="bg-gray-100 flex items-center w-64 p-2 mb-3">
                    <FaRegEnvelope className="text-gray-400 m-2" />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="text-sm bg-gray-100 outline-none flex-1"
                    />
                    </div>
                    <div className="bg-gray-100 flex items-center w-64 p-2 mb-3">
                    <MdLockOutline className="text-gray-400 m-2" />
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        className="text-sm bg-gray-100 outline-none flex-1"
                    />
                    </div>
                    <div className=" flex w-64 mb-5 justify-between">
                    <label htmlFor="#" className="text-xs flex items-center">
                        <input type="checkbox" name="remember" className="mr-1" />
                        Remember me
                    </label>
                    <a href="#" className="text-xs">
                        <p>Forgot Password?</p>
                    </a>
                    </div>
                    <a
                    href="#"
                    className="border-2 border-[#1a1633] rounded-full px-12 py-2 inline-block font-semibold hover:bg-[#1a1633] hover:text-gray-100"
                    >
                    Sign in
                    </a>
                </div>
                </div>
            </div>
            {/* sing up section */}
            <div className="xl:w-2/5 bg-[#1a1633] text-gray-100 rounded-tr-2xl rounded-br-2xl py-36 px-12">
                <h2 className="text-3xl font-bold mb-2">Hello Friend !</h2>
                <div className="border-2 w-10 border-white inline-block mb-2 "></div>
                <p className="mb-2">
                Fill up personal information and start journey with us.
                </p>
                <a
                href="#"
                className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-gray-100 hover:text-[#1a1633]"
                >
                Sign Up
                </a>
            </div>
            </div>
        </main>
        </>
        
    )
}