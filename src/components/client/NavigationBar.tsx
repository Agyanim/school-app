"use client"
import React from "react";
import Image from "next/image";
import EarthLogo from "../../../public/images/earth-logo2.png";
import Link from "next/link";
import { usePathname } from "next/navigation";


const NavigationBar = () => {
    const router=usePathname()
  return (
    <nav className="flex w-screen justify-center items-center my-5">
      <div className="flex w-[90%] justify-between">
        <div className="w-[20rem] flex items-center gap-2">
          <Image src={EarthLogo} alt="earth-logo" width={40} height={40} />
          <h1 className="italic">Earth app</h1>
        </div>
        <div className="flex w-[80%] ">
            <ul className="flex justify-center gap-10 w-full">
                <li className=""><Link className={router=="/"? "border-b bottom-1 border-b-red-300":"border-none"} href="/">Home</Link></li>
                <li><Link className={router=="/about"? "border-b bottom-1 border-b-red-300":"border-none"} href="/about">About</Link></li>
                <li><Link className={router=="/contact"? "border-b bottom-1 border-b-red-300":"border-none"} href="/contact">Contact</Link></li>
            </ul>
          
            
          
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
