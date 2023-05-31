import React from "react";
import Navbar from "../(components)/Navbar";

const page = () => {
  return (
    <>
      <Navbar url={"/egitim"} color={"[#0097CE]"} bolum={"EĞİTİM FAKÜLTESİ"} />
      <div className="px-40">
        <div className="flex space-x-12">
          <div className="py-20" >
            <h1 className="text-lg w-[176px] text-[#002169] font-bold tracking-widest">İNGİLİZCE
              ÖĞRETMENLİĞİ</h1>
            <div className="relative w-[255px] overflow-hidden pt-3">
              <input type="checkbox"
                className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
              />
              <div className="peer-checked:bg-[#002169] h-12 text-[#2D2A26] peer-checked:text-white border-b px-5 py-3 w-full pl-5 flex items-center">
                <h1 className="font-medium  text-sm ">
                  Vizyon & Misyon
                </h1>
              </div>
            </div>
            <div className="relative w-[255px] overflow-hidden">
              <input type="checkbox"
                className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
              />
              <div className="peer-checked:bg-[#002169] h-12 text-[#2D2A26] peer-checked:text-white border-b px-5 py-3 w-full pl-5 flex items-center">
                <h1 className="font-medium  text-sm ">
                  Akademik Kadro
                </h1>
              </div>
            </div>
            <div className="relative w-[255px] overflow-hidden ">
              <input type="checkbox"
                className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
              />
              <div className="peer-checked:bg-[#002169] h-12 text-[#2D2A26] peer-checked:text-white border-b px-5 py-3 w-full pl-5 flex items-center">
                <h1 className="font-medium  text-sm ">
                  Programın Eğitsel Amaçları
                </h1>
              </div>
            </div>
            <div className="relative w-[255px] overflow-hidden ">
              <input type="checkbox"
                className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
              />
              <div className="peer-checked:bg-[#002169] h-12 text-[#2D2A26] peer-checked:text-white border-b px-5 py-3 w-full pl-5 flex items-center">
                <h1 className="font-medium  text-sm ">
                  Ders Planı
                </h1>
              </div>
            </div>
            <div className="relative w-[255px] overflow-hidden ">
              <input type="checkbox"
                className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
              />
              <div className="peer-checked:bg-[#002169] h-12 text-[#2D2A26] peer-checked:text-white border-b px-5 py-3 w-full pl-5 flex items-center">
                <h1 className="font-medium  text-sm ">
                  Ders Tanımları
                </h1>
              </div>
            </div>
            <div className="relative w-[255px] overflow-hidden ">
              <input type="checkbox"
                className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
              />
              <div className="peer-checked:bg-[#002169] h-12 text-[#2D2A26] peer-checked:text-white border-b px-5 py-3 w-full pl-5 flex items-center">
                <h1 className="font-medium  text-sm ">
                  Mezuniyet Koşulları
                </h1>
              </div>
            </div>
            <div className="relative w-[255px] overflow-hidden ">
              <input type="checkbox"
                className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
              />
              <div className="peer-checked:bg-[#002169] h-12 text-[#2D2A26] peer-checked:text-white border-b px-5 py-3 w-full pl-5 flex items-center">
                <h1 className="font-medium  text-sm ">
                  Stajlar
                </h1>
              </div>
            </div>
            <div className="relative w-[255px] overflow-hidden ">
              <input type="checkbox"
                className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
              />
              <div className="peer-checked:bg-[#002169] h-12 text-[#2D2A26] peer-checked:text-white border-b px-5 py-3 w-full pl-5 flex items-center">
                <h1 className="font-medium  text-sm ">
                  Laboratuvarlar
                </h1>
              </div>
            </div>
            <div className="relative w-[255px] overflow-hidden ">
              <input type="checkbox"
                className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
              />
              <div className="peer-checked:bg-[#002169] h-12 text-[#2D2A26] peer-checked:text-white border-b px-5 py-3 w-full pl-5 flex items-center">
                <h1 className="font-medium  text-sm ">
                  Akreditasyon
                </h1>
              </div>
            </div>
            <div className="relative w-[255px] overflow-hidden ">
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
          <div className="py-16 px-12 bg-[#E2E7FF80]">
            <h1 className="pb-5 text-3xl text-[#2E2E2E] font-bold">MEZUNLARIMIZIN ÇALIŞTIĞI KURUMLAR</h1>
            <div className="flex space-x-7 justify-between text-[#000A1F]">
              <ul className="list-disc">
                <li>AÇI KOLEJİ BAHÇEKÖY KAMPÜSÜ</li>
                <li>ACIBADEM ASFA OKULUNDA</li>
                <li>ACIBADEM OKULLARI-ÜSKÜDAR KAMPÜSÜ</li>
                <li>AMERİKAN KÜLTÜR KOLEJİ BEYLİKDÜZÜ KAMPÜSÜ</li>
                <li>ANTALYA YÜKSELİŞ ÖZEL ÖĞRETİM KURSU</li>
                <li>AYAZAĞA NİLÜFER GÖKAY ORTAOKULU</li>
                <li>BAHÇEKÖY AÇI OKULUNDA</li>
                <li>BAHÇEŞEHİR KOLEJİ ÇAMLICA KAMPÜSÜ</li>
                <li>BEŞİKTAŞ KABATAŞ VAKFI OKULLARI</li>
                <li>BİL KOLEJİ</li>
                <li>BİLFEN OKULLARI ACARKENT KAMPÜSÜ</li>
                <li>BİLFEN OKULLARI BAHÇEŞEHİR KAMPÜSÜ</li>
                <li>BİLFEN OKULLARI HALKALI KAMPÜSÜ</li>
                <li>BİLFEN OKULLARI ÇAMLICA KAMPÜSÜ</li>
                <li>BİLFEN OKULLARI-TUZLA-ÇAYIROVA KAMPÜSÜ</li>
                <li>BÜYÜKÇEKMECE BİLGE ÇINAR DERSHANESİ</li>
                <li>DARÜŞŞAFAKA EĞİTİM KURUMLARI</li>
                <li>DİYARBAKIR YEDİİKLİM OKULU</li>
                <li>DOĞA KOLEJİ BEYKOZ KAMPÜSÜ</li>
                <li>ERDEM KOLEJİ ÇEKMEKÖY KAMPÜSÜ</li>
                <li>ESENLER YUNUS EMRE ORTAOKULU</li>
                <li>ESENYURT IHSAN INTERNATIONAL SCHOOL</li>
              </ul>
              <ul className="list-disc" >
                <li>EYÜBOĞLU OKULLARI ÇAMLICA KAMPÜSÜ</li>
                <li>EYÜBOĞLU OKULLARI-ATAKENT KAMPÜSÜ</li>
                <li>FEN BİLİMLERİ OKULLARI BEYKENT KAMPÜSÜ</li>
                <li>GÖKCEN KOLEJİ</li>
                <li>GÜL AĞACI ANAOKULU</li>
                <li>IŞIK OKULLARI AYAZAĞA KAMPÜSÜ</li>
                <li>İSTEK OKULLARI KEMAL ATATÜRK KAMPÜSÜ</li>
                <li>İSTEK OKULLARI-KAŞGARLI MAHMUD KAMPÜSÜ</li>
                <li>KABATAŞ VAKFI OKULLARI</li>
                <li>KOCAELİ YAPI KREDİ BİLFEN ANAOKULU</li>
                <li>KOÇ OKULLARI</li>
                <li>MEF OKULLARI BAHÇEŞEHİR KAMPÜSÜ</li>
                <li>MEF OKULLARI ULUS KAMPÜSÜ</li>
                <li>MEKTEBİM OKULLARI</li>
                <li>NUN OKULLARI</li>
                <li>RIFAT ILGAZ ORTAOKULU</li>
                <li>SINAV OKULLARI BAYRAMPAŞA KAMPÜSÜ</li>
                <li>SULTANGAZİ KAŞGARLI MAHMUT KAMPÜSÜ</li>
                <li>TED KOLEJİ ATAKENT KAMPÜSÜ</li>
                <li>UĞUR OKULLARI</li>
                <li>VEHBİ KOÇ VAKFI OKULLARI</li>
                <li>YEŞİLKÖY ERMENİ OKULU</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center pt-12 pb-5">
          <h1 className="text-3xl text-[#2E2E2E] font-bold">MEZUNLARIMIZIN YÜKSEK LİSANSA KABUL EDİLDİĞİ KURUMLAR</h1>
          <div className="grid grid-cols-2 space-x-7">
            <div className="">
              <h2>MEF Üniversitesi</h2>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
