import React from "react";
import Navbar from "../(components)/Navbar";
import AccordionEgitim from "../(components)/AccordionEgitim";
import Image from "next/image";
import Ogrenci from "../../assets/ogrenci.svg";

const page = () => {
  return (
    <>
      <Navbar url={"/egitim"} color={"#0097CE"} bolum={"EĞİTİM FAKÜLTESİ"} />
      <div className=" xl:px-24 px-3 py-14 md:py-20">
        <div className="flex md:space-x-12 lg:space-x-24 justify-between">
            <AccordionEgitim />
          <div>
            <div className="flex justify-end">
              <div className="py-16 px-12 w-full bg-[#E2E7FF80] -mt-20 bg-cover bg-center">
                <h1 className="pb-5 text-start text-lg md:text-xl xl:text-3xl text-[#2E2E2E] font-bold">MEZUNLARIMIZIN ÇALIŞTIĞI KURUMLAR</h1>
                <div className="flex flex-col lg:flex-row lg:space-x-7 justify-between text-[#000A1F] text-base xl:text-lg">
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
            <h1 className="text-lg md:text-xl lg:text-2xl text-[#2E2E2E] font-bold py-5">MEZUNLARIMIZIN YÜKSEK LİSANSA KABUL EDİLDİĞİ KURUMLAR</h1>
            <div className="flex flex-col space-y-5 text-center">
              <div className="grid grid-cols-2 gap-7">
                <div className="border rounded-lg p-3 md:p-6 bg[#EAEAEA]">
                  <h2 className="text-[#002169] text-lg md:text-xl lg:text-2xl text-start">MEF Üniversitesi</h2>
                </div>
                <div className="border rounded-lg p-6 bg[#EAEAEA]">
                  <h2 className="text-[#002169] text-lg md:text-xl lg:text-2xl text-start">Çanakkale Onsekiz Mart Üniversitesi</h2>
                </div>
                <div className="border rounded-lg p-6 bg[#EAEAEA]">
                  <h2 className="text-[#002169] text-lg md:text-xl lg:text-2xl text-start">Technical University Of Munich
                    Almanya</h2>
                </div>
                <div className="border rounded-lg p-6 bg[#EAEAEA]">
                  <h2 className="text-[#002169] text-lg md:text-xl lg:text-2xl text-start">University of Eastern Finland - Finlandiya</h2>
                </div>
                <div className="border rounded-lg p-6 bg[#EAEAEA]">
                  <h2 className="text-[#002169] text-lg md:text-xl lg:text-2xl text-start">University of London - İngiltere</h2>
                </div>
                <div className="border rounded-lg p-6 bg[#EAEAEA]">
                  <h2 className="text-[#002169] text-lg md:text-xl lg:text-2xl text-start">University Of Victoria - Kanada</h2>
                </div>
              </div>
              <div className="">
                <h1 className="text-start text-lg md:text-xl lg:text-2xl text-[#2E2E2E] font-bold py-5">Mezunlarımız Ne Diyor?</h1>
                <div className="grid grid-cols-2 gap-7">
                  <div className="flex flex-col space-y-6">
                    <Image
                    src={Ogrenci}
                    alt="ogrenci" 
                    />
                    <p className="text-[#4D4A47] text-start text-sm font-medium" >
                      <span className="text-[#2D2A26] text-sm md:text-base font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam placerat magna sit amet erat varius hendrerit.
                    </p>
                  </div>
                  <div className="flex flex-col space-y-6">
                    <Image
                      src={Ogrenci}
                      alt="ogrenci"
                    />
                    <p className="text-[#4D4A47] text-start text-sm font-medium" >
                      <span className="text-[#2D2A26] text-sm md:text-base font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam placerat magna sit amet erat varius hendrerit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
