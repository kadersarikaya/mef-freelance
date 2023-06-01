"use client"
import React, {useState} from "react";

const AccordionEgitim = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

  return (
    <div className="relative">
          <button
              className="fixed top-16 left-4 md:hidden lg:hidden z-50 bg-gray-200 rounded-full p-2 focus:outline-none"
              onClick={toggleSidebar}
          >
              {isOpen ? (
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6 text-gray-600"
                  >
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                      />
                  </svg>
              ) : (
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6 text-gray-600"
                  >
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 12h16m-7 6h7"
                      />
                  </svg>
              )}
          </button>
          <div className={`${isOpen ? "translate-x-0" : "md:translate-x-0 -translate-x-full"
              } transition-transform duration-300 ease-in-out fixed md:relative md:top-auto md:left-auto md:h-auto top-0 left-0 h-screen bg-white md:shadow-none shadow-lg z-40`}>
            <div className="flex pt-12 md:pt-0 md:justify-normal justify-center">
                <h1 className="text-base md:text-lg w-[176px] md:text-start text-center text-[#002169]  font-bold tracking-widest px-5 md:pt-0 pt-5">İNGİLİZCE
                ÖĞRETMENLİĞİ</h1>
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
          {isOpen && (
              <div
                  className="fixed top-0 md:bg-white md:opacity-100 left-0 h-screen w-screen bg-black opacity-25 z-30"
                  onClick={toggleSidebar}
              />
          )}
    </div>
  );
};

export default AccordionEgitim;
