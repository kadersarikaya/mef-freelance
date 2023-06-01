"use client"
import React, { useState, ReactNode } from "react";
import Team from "./Team";
import Lisans from "./Lisans";

const Accordion = () => {
  const [content, setContent] = useState<ReactNode | null>(null);
  const [onClickMenu, setOnClickMenu] = useState<boolean>(true);

  const handleAccordionClick = (selectedContent: ReactNode) => {
    setContent(selectedContent);
  };
  return (
    <>
      <div className="" >
        <button className="bg-gray-200 rounded-sm p-2 block md:hidden lg:hidden left-0 absolute" onClick={() => setOnClickMenu(!onClickMenu)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
        {onClickMenu && (
          <div className="fixed top-10 duration-300 md:relative md:top-auto md:left-auto md:h-auto left-0 h-full bg-white z-10">
            <div className="flex justify-between">
              <h1 className="text-base md:text-lg w-[176px] text-[#002169] font-bold tracking-widest px-5 pt-5">İNŞAAT MÜHENDİSLİĞİ</h1>
              <button className="px-5 block md:hidden lg:hidden" onClick={
                () => setOnClickMenu(!onClickMenu)} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="relative w-[350px] md:w-[200px] lg:w-[255px] overflow-hidden pt-3">
              <input type="checkbox"
                className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
              />
              <div className="peer-checked:bg-[#002169] h-12 text-[#2D2A26] peer-checked:text-white border-b px-5 py-3 w-full pl-5 flex items-center">
                <h1 className="font-medium  text-sm ">
                  Vizyon & Misyon
                </h1>
              </div>
            </div>
            <div onClick={() => handleAccordionClick(<Team />)} className="relative w-[350px] md:w-[200px] lg:w-[255px] overflow-hidden">
              <input type="checkbox"
                className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
              />
              <div className="peer-checked:bg-[#002169] text-[#2D2A26] peer-checked:text-white h-12 border-b px-5 py-3 w-full pl-5 flex items-center">
                <button className="font-medium text-sm">
                  Akademik Kadro
                </button>
              </div>
              {/* Arrow Icon */}
              <div className="absolute top-3 right-3 text-[#2D2A26] peer-checked:text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
              {/* Content */}
              <div className="bg-white max-h-0 cursor-pointer hover:bg-[#F8F9FF] overflow-hidden transition-all duration-500  peer-checked:max-h-20">
                <div className="pl-7 md:pl-14 py-3 pr-5 border-b">
                  <p className="font-medium text-[#2D2A26] text-sm" >
                    Tam Zamanlı Öğretim Üyeleri
                  </p>
                </div>
              </div>
              <div className="bg-white max-h-0 cursor-pointer hover:bg-[#F8F9FF] overflow-hidden transition-all duration-500 peer-checked:max-h-20">
                <div className="pl-7 md:pl-14 py-3 pr-5 border-b">
                  <p className="font-medium text-[#2D2A26] text-sm">
                    Misafir Öğretim Üyeleri
                  </p>
                </div>
              </div>
              <div className="bg-white max-h-0 cursor-pointer hover:bg-[#F8F9FF] overflow-hidden transition-all duration-500 peer-checked:max-h-20">
                <div className="pl-7 md:pl-14 py-3 pr-5 border-b">
                  <p className="font-medium text-[#2D2A26] text-sm">
                    Önceki Öğretim Üyeleri
                  </p>
                </div>
              </div>
            </div>
            <div onClick={() => handleAccordionClick(<Lisans />)} className="relative w-[350px] md:w-[200px] lg:w-[255px] overflow-hidden">
              <input type="checkbox"
                className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
              />
              <div className="peer-checked:bg-[#002169] text-[#2D2A26] peer-checked:text-white h-12 border-b px-5 py-3 w-full pl-5 flex items-center">
                <h1 className="font-medium text-sm ">
                  Lisans Programı
                </h1>
              </div>
              {/* Arrow Icon */}
              <div className="absolute top-3 right-3 text-[#2D2A26] peer-checked:text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
              {/* Content */}
              <div className="bg-white max-h-0 cursor-pointer hover:bg-[#F8F9FF] overflow-hidden transition-all duration-500 peer-checked:max-h-20">
                <div className="pl-7 md:pl-14 py-3 pr-5 border-b">
                  <p className="font-medium text-[#2D2A26] text-sm" >
                    Lisans Programı
                  </p>
                </div>
              </div>
            </div>
            <div className="relative w-[350px] md:w-[200px] lg:w-[255px] overflow-hidden">
              <input type="checkbox"
                className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
              />
              <div className="peer-checked:bg-[#002169] text-[#2D2A26] peer-checked:text-white h-12 border-b px-5 py-3 w-full pl-5 flex items-center">
                <h1 className="font-medium text-sm ">
                  Laboratuvarlar
                </h1>
              </div>
              {/* Arrow Icon */}
              <div className="absolute top-3 right-3 text-[#2D2A26] peer-checked:text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
              {/* Content */}
              <div className="bg-white max-h-0 cursor-pointer hover:bg-[#F8F9FF] overflow-hidden transition-all duration-500  peer-checked:max-h-20">
                <div className="pl-7 md:pl-14 py-3 pr-5 border-b">
                  <p className="font-medium text-[#2D2A26] text-sm" >
                    Laboratuvarlar
                  </p>
                </div>
              </div>
            </div>
            <div className="relative w-[350px] md:w-[200px] lg:w-[255px] overflow-hidden">
              <input type="checkbox"
                className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
              />
              <div className="peer-checked:bg-[#002169] h-12 text-[#2D2A26] peer-checked:text-white border-b px-5 py-3 w-full pl-5 flex items-center">
                <h1 className="font-medium  text-sm ">
                  Öğrenci Danışmanlığı
                </h1>
              </div>
            </div>
            <div className="relative w-[350px] md:w-[200px] lg:w-[255px] overflow-hidden ">
              <input type="checkbox"
                className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
              />
              <div className="peer-checked:bg-[#002169] h-12 text-[#2D2A26] peer-checked:text-white border-b px-5 py-3 w-full pl-5 flex items-center">
                <h1 className="font-medium  text-sm ">
                  Dış Danışma Kurulu
                </h1>
              </div>
            </div>
            <div className="relative w-[350px] md:w-[200px] lg:w-[255px] overflow-hidden ">
              <input type="checkbox"
                className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
              />
              <div className="peer-checked:bg-[#002169] h-12 text-[#2D2A26] peer-checked:text-white border-b px-5 py-3 w-full pl-5 flex items-center">
                <h1 className="font-medium  text-sm ">
                  Araştırma Alanları
                </h1>
              </div>
            </div>
            <div className="relative w-[350px] md:w-[200px] lg:w-[255px] overflow-hidden ">
              <input type="checkbox"
                className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
              />
              <div className="peer-checked:bg-[#002169] h-12 text-[#2D2A26] peer-checked:text-white border-b px-5 py-3 w-full pl-5 flex items-center">
                <h1 className="font-medium  text-sm ">
                  Açık Pozisyonlar
                </h1>
              </div>
            </div>
            <div className="relative w-[350px] md:w-[200px] lg:w-[255px] overflow-hidden ">
              <input type="checkbox"
                className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
              />
              <div className="peer-checked:bg-[#002169] h-12 text-[#2D2A26] peer-checked:text-white border-b px-5 py-3 w-full pl-5 flex items-center">
                <h1 className="font-medium  text-sm ">
                  İletişim
                </h1>
              </div>
            </div>
          </div>
        )}
      </div>
      {content}
    </>
  );
};

export default Accordion;
