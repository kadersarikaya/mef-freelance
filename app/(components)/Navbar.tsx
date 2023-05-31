"use client"
import Link from "next/link";
import React, {useRef} from "react";

interface Props {
  bolum?: string;
  color?: string;
  url?: string;
}

const Navbar: React.FC<Props> = ({ bolum, color, url }) => {
  const navRef = useRef<HTMLDivElement>(null);

  return (
    <nav className="bg-white shadow-sm sticky top-0 w-full z-50">
      <div className="flex overflow-x-auto overflow-y-hidden" ref={navRef}>
        <ul className="flex whitespace-nowrap">
          <li>
            <Link href={url? url : "/"}>
              <button
                className={`py-2 md:py-4 pr-2 md:pr-4 pl-6 md:pl-12 bg-${color} text-white text-sm md:text-base duration-200 font-bold`}
              >
                {bolum}
              </button>
            </Link>
          </li>
          <li>
            <button className="bg-white px-2 md:px-4 py-2 md:py-4 text-center hover:text-[#F5333F] text-sm md:text-base duration-200 font-bold text-[#002169]">
              HAKKIMIZDA
            </button>
          </li>
          <li>
            <Link href={"/bolumler"}>
              <button className="bg-white px-2 md:px-4 py-2 md:py-4 text-center hover:text-[#F5333F] text-sm md:text-base duration-200 font-bold text-[#002169]">
                BÖLÜMLER
              </button>
            </Link>
          </li>
          <li>
            <button className="bg-white px-2 md:px-4 py-2 md:py-4 text-center hover:text-[#F5333F] text-sm md:text-base duration-200 font-bold text-[#002169]">
              ABET
            </button>
          </li>
          <li>
            <button className="bg-white px-2 md:px-4 py-2 md:py-4 text-center hover:text-[#F5333F] text-sm md:text-base duration-200 font-bold text-[#002169]">
              SENIOR PROJECT DESIGN
            </button>
          </li>
          <li>
            <button className="bg-white px-2 md:px-4 py-2 md:py-4 text-center hover:text-[#F5333F] text-sm md:text-base duration-200 font-bold text-[#002169]">
              LABORATUVARLAR
            </button>
          </li>
          <li>
            <button className="bg-white px-2 md:px-4 py-2 md:py-4 text-center hover:text-[#F5333F] text-sm md:text-base duration-200 font-bold text-[#002169]">
              LİSANSÜSTÜ EĞİTİM
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
