import React from "react";
import Image from "next/image";
import Yurt from "../../assets/yurt.svg"
const page = () => {
    return (
        <div className="flex space-x-6 md:space-x-12 xl:space-x-24 lg:px-24 px-3 py-14 md:py-20">
            <div className="w-[600px]">
                <ul className="space-y-3 text-base md:text-lg text-[#002169]" >
                    <li className="text-[#F5333F] font-bold" ><a href="">Diploma Programlarında
                        Yurt Dışından Öğrenciler</a></li>
                    <li><a href="">Kimler Başvurabilir</a></li>
                    <li><a href="">Nasıl Başvurabilir</a></li>
                    <li><a href="">Konaklama</a></li>
                    <li><a href="">Uluslararası Ofis</a></li>
                    <li className="font-bold"><a href="">Değişim Programları</a></li>
                    <li className="font-bold"><a href="">Ortak 3 + 2 Programları</a></li>
                    <li className="font-bold"><a href="">Bologna Süreci</a></li>
                    <li className="font-bold"><a href="">AKTS</a></li>
                    <li className="font-bold"><a href="">Diploma Eki (DE)</a></li>
                </ul>
            </div>  
            <div className="flex flex-col space-y-20">
                <div className="">
                    <div className="space-y-4">
                        <div className="lg:flex lg:space-x-12 space-y-4 ">
                            <div className="flex flex-col space-y-4">
                                <h1 className="text-[#1E2944] text-lg md:text-2xl lg:text-3xl	font-semibold">MEF Üniversitesi Mydome
                                    Kız Öğrenci Yurdu</h1>
                                <p className="text-sm md:text-base text-[#434D63]" >Üniversitemize 1.2km yürüme mesafesinde olan 280 öğrenci kapasiteli MEF Üniveritesi Mydome Kız Öğrenci Yurdu, öğrencilerin ders çalışmalarına konsantre olabileceği aynı zamanda da sosyal faaliyetlerini rahatlıkla devam ettirebilecekleri bir ortam sağlamaktadır. Öğrencilere sağlanılan imkanlardan bazıları şunlardır:</p>
                                <ul className="text-[#434D63] md:text-base text-sm list-disc pl-5" >
                                    <li className="">Her odada TV, uydu buzdolabi, yatak dolap ve çalışma masası, mutfak ünitesi</li>
                                    <li className="" >Otel konseptinde spor salonu ve kız yurdu</li>
                                    <li className="" >Etüd odası</li>
                                    <li className="" >Cafe restaurant</li>
                                    <li className="" >Teras Cafe</li>
                                    <li className="" >Karaoke Odası</li>
                                    <li className="" >Temizlik Hizmetleri</li>
                                    <li className="" >Her odada ücretsiz, hızlı ve kesintisiz Wi-Fi</li>
                                    <li className="" >Tüm binada parmak izi okuma ile giriş</li>
                                </ul>
                            </div>
                            <Image
                                src={Yurt}
                                alt="Picture of the dormitory"
                            />
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div className="border text-[#434D63] border-gray-200 p-3 space-y-2 text-center">
                                <span className="text-sm md:text-base" >Tek kişilik oda</span>
                                <h2 className="text-base md:text-lg lg:text-2xl font-bold" >3.200 TL – 3.450 TL</h2>
                            </div>
                            <div className="border text-[#434D63] border-gray-200 p-3 space-y-2 text-center">
                                <span className="text-sm md:text-base" >2 kişilik oda</span>
                                <h2 className="text-base md:text-lg lg:text-2xl font-bold" >2.400 TL – 2.800 TL</h2>
                            </div>
                            <div className="border text-[#434D63] border-gray-200 p-3 space-y-2 text-center">
                                <span className="text-sm md:text-base" >3 kişilik oda</span>
                                <h2 className="text-base md:text-lg lg:text-2xl font-bold" >2.150 TL</h2>
                            </div>
                            <div className="border text-[#434D63] border-gray-200 p-3 space-y-2 text-center">
                                <span className="text-sm md:text-base" >4 kişilik oda</span>
                                <h2 className="text-base md:text-lg lg:text-2xl font-bold" >1.950 TL</h2>
                            </div>
                        </div>
                        <button className="py-2 px-3 md:py-3 md:px-6 bg-[#F5333F] text-sm text-[#FEEBEC]">Detaylı Bilgi</button>
                    </div>
                </div>
                <div className="">
                    <div className="space-y-4">
                        <div className="lg:flex lg:space-x-12 space-y-4 ">
                            <div className="flex flex-col space-y-4">
                                <h1 className="text-[#1E2944] text-lg md:text-2xl lg:text-3xl	font-semibold">Academia Yurt Residence</h1>
                                <p className="text-sm md:text-base text-[#434D63]" >Academia Yurt Residence (Karma)Sosyal yaşamın merkezi Kağıthane’de konumlanan Academia Yurt Daireleri Öğrenci yurdu olarak residence otel şekilinde dizayn edilen lüks daireleri ile öğrencilerin rahat edebilmesi için oluşturduğu yaşam alanında, öğrenciyi her türlü konfora uluştarabilecek özellilere sahip. Academia Yurt Residence’da bulabileceğiniz imkanlardan bazıları:</p>
                                <ul className="text-[#434D63] md:text-base text-sm list-disc pl-5" >
                                    <li className="">Her türlü beyaz eşya (Klima, buzdolabı, tv, çamaşır ve kurutma makinası fırın, ocak saç kurutma makinası v.s).</li>
                                    <li className="" >Dairelerde açık mutfak, yemek pişirmek için her türlü ekipman.</li>
                                    <li className="" >Günde ortalama 2’şer saat aralığı ile 5 kez ücretsiz shuttle bulunmaktadır.</li>
                                </ul>
                                <p className="text-sm md:text-base text-[#434D63]" >
                                    Fiyatlara dahil olan hizmetler:
                                </p>
                                <ul className="text-[#434D63] md:text-base text-sm list-disc pl-5" >
                                    <li>Enerji giderleri ( elektrik, su, doğalgaz ve internet)</li>
                                    <li>Kahvaltı ücrete dahil, akşam yemeği ise aylık ek ücretlidir.</li>
                                    <li>Kahvaltı ve Fitness hizmeti talep edilmemesi durumunda ek indirim yapılır.</li>
                                    <li>Residence’da ücretsiz 80 araçlık kapalı otopark ve vardır.</li>
                                </ul>
                            </div>
                            <Image
                                src={Yurt}
                                alt="Picture of the dormitory"
                            />
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div className="border text-[#434D63] border-gray-200 p-3 space-y-2 text-center">
                                <span className="text-sm md:text-base" >Tek kişilik oda</span>
                                <h2 className="text-base md:text-lg lg:text-2xl font-bold" >3.200 TL – 3.450 TL</h2>
                            </div>
                            <div className="border text-[#434D63] border-gray-200 p-3 space-y-2 text-center">
                                <span className="text-sm md:text-base" >2 kişilik oda</span>
                                <h2 className="text-base md:text-lg lg:text-2xl font-bold" >2.400 TL – 2.800 TL</h2>
                            </div>
                            <div className="border text-[#434D63] border-gray-200 p-3 space-y-2 text-center">
                                <span className="text-sm md:text-base" >3 kişilik oda</span>
                                <h2 className="text-base md:text-lg lg:text-2xl font-bold" >2.150 TL</h2>
                            </div>
                            <div className="border text-[#434D63] border-gray-200 p-3 space-y-2 text-center">
                                <span className="text-sm md:text-base" >4 kişilik oda</span>
                                <h2 className="text-base md:text-lg lg:text-2xl font-bold" >1.950 TL</h2>
                            </div>
                        </div>
                        <button className="py-2 px-3 md:py-3 md:px-6 bg-[#F5333F] text-sm text-[#FEEBEC]">Detaylı Bilgi</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
