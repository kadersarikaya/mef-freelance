"use client"
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 w-full z-50 ">
      <div className="">
        <ul className="flex justify-start">
          <li>
            <Link href={"/muhendislik"} >
              <button className="py-4 pr-4 pl-12 bg-[#FF8E6C] text-white text-base duration-200 font-bold">MÜHENDİSLİK FAKÜLTESİ</button> 
            </Link>
          </li>
          <li><button className="bg-white px-4 py-4 text-center hover:text-[#F5333F] text-base duration-200 font-bold text-[#002169]">HAKKIMIZDA</button></li>
          <li>
            <Link href={"/bolumler"}>
              <button className="bg-white px-4 py-4 text-center hover:text-[#F5333F] text-base duration-200 font-bold text-[#002169]">BÖLÜMLER</button>
            </Link>
          </li>
          <li><button className="bg-white px-4 py-4 text-center hover:text-[#F5333F] text-base duration-200 font-bold text-[#002169]">ABET</button></li>
          <li><button className="bg-white px-4 py-4 text-center hover:text-[#F5333F] text-base duration-200 font-bold text-[#002169]">SENIOR PROJECT DESIGN</button></li>
          <li><button className="bg-white px-4 py-4 text-center hover:text-[#F5333F] text-base duration-200 font-bold text-[#002169]">LABORATUVARLAR</button></li>
          <li><button className="bg-white px-4 py-4 text-center hover:text-[#F5333F] text-base duration-200 font-bold text-[#002169]">LİSANSÜSTÜ EĞİTİM</button></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
