import React from "react";

function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 w-full z-50 ">
      <div className="">
        <ul className="flex justify-start" >
          <li><button className="bg-white pt-4 pr-4 pb-4 pl-12 hover:bg-[#FF8E6C] hover:text-white text-base duration-200 font-bold text-[#002169]">MÜHENDİSLİK FAKÜLTESİ</button></li>
          <li><button className="bg-white px-4 py-4 text-center hover:bg-[#FF8E6C] hover:text-white text-base duration-200 font-bold text-[#002169]">HAKKIMIZDA</button></li>
          <li><button className="bg-white px-4 py-4 pb-4 text-center hover:bg-[#FF8E6C] hover:text-white text-base duration-200 font-bold text-[#002169]">BÖLÜMLER</button></li>
          <li><button className="bg-white px-4 py-4 pb-4 text-center hover:bg-[#FF8E6C] hover:text-white text-base duration-200 font-bold text-[#002169]">ABET</button></li>
          <li><button className="bg-white px-4 py-4 pb-4 text-center hover:bg-[#FF8E6C] hover:text-white text-base duration-200 font-bold text-[#002169]">SENIOR PROJECT DESIGN</button></li>
          <li><button className="bg-white px-4 py-4 pb-4 text-center hover:bg-[#FF8E6C] hover:text-white text-base duration-200 font-bold text-[#002169]">LABORATUVARLAR</button></li>
          <li><button className="bg-white px-4 py-4 pb-4 text-center hover:bg-[#FF8E6C] hover:text-white text-base duration-200 font-bold text-[#002169]">LİSANSÜSTÜ EĞİTİM</button></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
