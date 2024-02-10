"use client";
import React from "react";
import Image from "next/image";
import Logo from "../../../public/images/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavigationBar = () => {
  const router = usePathname();
  return (
    <nav className="flex w-screen justify-center items-center my-5">
      <div className="flex w-[90%] justify-between items-center">
        <div className="w-[10rem] lg:w-[12rem] flex gap-2 relative">
          <Image src={Logo} alt="earth-logo" className="w-[40px]  lg:w-[5rem] h-[40px] lg:h-[5rem]"/>
          <h1 className="italic absolute bottom-3 left-14 text-transparent lg:text-xl text-sm px-2 font-extrabold bg-clip-text bg-gradient-to-r from-pink-600 to bg-orange-600 ">
            Earth app
          </h1>
        </div>
        <div className="hidden lg:flex w-[60%] ">
          <ul className="flex justify-center gap-10 w-full text-orange-700 font-bold">
            <li className="">
              <Link
                className={
                  router == "/"
                    ? " border-b-2 border-b-gray-300 pb-1"
                    : "border-none"
                }
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={
                  router == "/about"
                    ? "border-b-2 border-b-gray-300 pb-1"
                    : "border-none"
                }
                href="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={
                  router == "/contact"
                    ? " border-b-2 border-b-gray-300 pb-1 "
                    : "border-none"
                }
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="lg:w-[9rem] bg-gradient-to-r from-pink-600 to-orange-600  hover:bg-gradient-to-l flex justify-center items-center rounded">
          <Link className="lg:px-4 py-2 px-2 text-white font-bold" href="/signin">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
