"use client"
import React, {useState} from "react";

const AccordionEgitim = () => {
    const [onClickMenu, setOnClickMenu] = useState<boolean>(true);
  return (
    <div className="">
        <button className="bg-gray-200 rounded-sm p-1 fixed block md:hidden lg:hidden left-0 " onClick={() => setOnClickMenu(!onClickMenu)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
            </svg>
        </button>
        {onClickMenu && (
        <div className="fixed top-8 duration-300 md:relative md:top-auto md:left-auto md:h-auto left-0 h-full bg-white z-10">
            <div className="flex pt-6 justify-between">
                <h1 className="text-base md:text-lg w-[176px] text-[#002169] font-bold tracking-widest px-5 pt-5">İNGİLİZCE
                ÖĞRETMENLİĞİ</h1>
                <button className="px-5 block md:hidden lg:hidden" 
                onClick={() => setOnClickMenu(!onClickMenu)} >
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
            <div className="relative w-[350px] md:w-[200px] lg:w-[255px] overflow-hidden">
                <input type="checkbox"
                    className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                />
                <div className="peer-checked:bg-[#002169] h-12 text-[#2D2A26] peer-checked:text-white border-b px-5 py-3 w-full pl-5 flex items-center">
                    <h1 className="font-medium  text-sm ">
                        Akademik Kadro
                    </h1>
                </div>
            </div>
            <div className="relative w-[350px] md:w-[200px] lg:w-[255px] overflow-hidden ">
                <input type="checkbox"
                    className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                />
                <div className="peer-checked:bg-[#002169] h-12 text-[#2D2A26] peer-checked:text-white border-b px-5 py-3 w-full pl-5 flex items-center">
                    <h1 className="font-medium  text-sm ">
                        Programın Eğitsel Amaçları
                    </h1>
                </div>
            </div>
            <div className="relative w-[350px] md:w-[200px] lg:w-[255px] overflow-hidden ">
                <input type="checkbox"
                    className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                />
                <div className="peer-checked:bg-[#002169] h-12 text-[#2D2A26] peer-checked:text-white border-b px-5 py-3 w-full pl-5 flex items-center">
                    <h1 className="font-medium  text-sm ">
                        Ders Planı
                    </h1>
                </div>
            </div>
            <div className="relative w-[350px] md:w-[200px] lg:w-[255px] overflow-hidden ">
                <input type="checkbox"
                    className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                />
                <div className="peer-checked:bg-[#002169] h-12 text-[#2D2A26] peer-checked:text-white border-b px-5 py-3 w-full pl-5 flex items-center">
                    <h1 className="font-medium  text-sm ">
                        Ders Tanımları
                    </h1>
                </div>
            </div>
            <div className="relative w-[350px] md:w-[200px] lg:w-[255px] overflow-hidden ">
                <input type="checkbox"
                    className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                />
                <div className="peer-checked:bg-[#002169] h-12 text-[#2D2A26] peer-checked:text-white border-b px-5 py-3 w-full pl-5 flex items-center">
                    <h1 className="font-medium  text-sm ">
                        Mezuniyet Koşulları
                    </h1>
                </div>
            </div>
            <div className="relative w-[350px] md:w-[200px] lg:w-[255px] overflow-hidden ">
                <input type="checkbox"
                    className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                />
                <div className="peer-checked:bg-[#002169] h-12 text-[#2D2A26] peer-checked:text-white border-b px-5 py-3 w-full pl-5 flex items-center">
                    <h1 className="font-medium  text-sm ">
                        Stajlar
                    </h1>
                </div>
            </div>
            <div className="relative w-[350px] md:w-[200px] lg:w-[255px] overflow-hidden ">
                <input type="checkbox"
                    className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                />
                <div className="peer-checked:bg-[#002169] h-12 text-[#2D2A26] peer-checked:text-white border-b px-5 py-3 w-full pl-5 flex items-center">
                    <h1 className="font-medium  text-sm ">
                        Laboratuvarlar
                    </h1>
                </div>
            </div>
            <div className="relative w-[350px] md:w-[200px] lg:w-[255px] overflow-hidden ">
                <input type="checkbox"
                    className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                />
                <div className="peer-checked:bg-[#002169] h-12 text-[#2D2A26] peer-checked:text-white border-b px-5 py-3 w-full pl-5 flex items-center">
                    <h1 className="font-medium  text-sm ">
                        Akreditasyon
                    </h1>
                </div>
            </div>
            <div className="relative w-[350px] md:w-[200px] lg:w-[255px] overflow-hidden ">
                <input type="checkbox"
                    className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                />
                <div className="peer-checked:bg-[#002169] h-12 text-[#2D2A26] peer-checked:text-white border-b px-5 py-3 w-full pl-5 flex items-center">
                    <h1 className="font-medium  text-sm ">
                        Mezunlar
                    </h1>
                </div>
            </div>
        </div>
        )}
    </div>
  );
};

export default AccordionEgitim;
