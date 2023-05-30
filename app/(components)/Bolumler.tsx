import React from "react";
import Image from "next/image";
import Card from "../../assets/Card.svg"
import Card1 from "../../assets/Card (1).svg"
import Card2 from "../../assets/Card (2).svg"
import Card3 from "../../assets/Card (3).svg"
import Card4 from "../../assets/Card (4).svg"

function Bolumler() {
    return (
        <section className="md:px-24 px-8 py-7 md:py-14 flex h-full flex-col">
            <h1 className="text-2xl md:text-4xl font-semibold pb-10">Mühendislik Fakültesi Bölümleri</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
                <div className="relative group hover:cursor-pointer">
                    <Image
                        src={Card} alt="dekan"
                        className="object-cover max-w-full h-auto rounded-lg" />
                    <div className="absolute group-hover:-translate-y-8 duration-300 text-white px-6 py-10 left-0 right-0 bottom-0 flex flex-col space-y-2">
                        <h1 className="text-xl lg:text-3xl font-bold">Bilgisayar Mühendisliği</h1>
                        <p className="text-sm lg:text-base font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                </div>
                <div className="relative group hover:cursor-pointer">
                    <Image
                        src={Card1} alt="dekan"
                        className="object-cover max-w-full h-auto rounded-lg" />
                    <div className="absolute group-hover:-translate-y-8 duration-300 text-white px-6 py-10 left-0 right-0 bottom-0 flex flex-col space-y-1.5">
                        <h1 className="text-xl lg:text-3xl font-bold">Elektrik Elektronik Mühendisliği</h1>
                        <p className="text-sm lg:text-base font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className="relative group hover:cursor-pointer">
                    <Image
                        src={Card2} alt="dekan"
                        className="object-cover max-w-full h-auto rounded-lg" />
                    <div className="absolute group-hover:-translate-y-8 duration-300 text-white px-6 py-10 left-0 right-0 bottom-0 flex flex-col space-y-1.5">
                        <h1 className="text-xl lg:text-3xl font-bold">Endüstri Mühendisliği</h1>
                        <p className="text-sm lg:text-base font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 pt-8">
                <div className="relative group hover:cursor-pointer">
                    <Image
                        src={Card3} alt="dekan"
                        className="object-cover max-w-full h-auto rounded-lg" />
                    <div className="absolute group-hover:-translate-y-8 duration-300 text-white px-6 py-10 left-0 right-0 bottom-0 flex flex-col space-y-1.5">
                        <h1 className="text-xl lg:text-3xl font-bold">İnşaat Mühendisliği</h1>
                        <p className="text-sm lg:text-base font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className="relative group hover:cursor-pointer">
                    <Image
                        src={Card4} alt="dekan"
                        className="object-cover max-w-full h-auto rounded-lg" />
                    <div className="absolute group-hover:-translate-y-8 duration-300 text-white px-6 py-10 left-0 right-0 bottom-0 flex flex-col space-y-1.5">
                        <h1 className="text-xl lg:text-3xl font-bold">Makine Mühendisliği</h1>
                        <p className="text-sm lg:text-base font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className="relative group hover:cursor-pointer">
                    <Image
                        src={Card3} alt="dekan"
                        className="object-cover max-w-full h-auto rounded-lg" />
                    <div className="absolute group-hover:-translate-y-8 duration-300 text-white px-6 py-10 left-0 right-0 bottom-0 flex flex-col space-y-1.5">
                        <h1 className="text-xl lg:text-3xl font-bold">İnşaat Mühendisliği</h1>
                        <p className="text-sm lg:text-base font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className="relative group hover:cursor-pointer">
                    <Image
                        src={Card4} alt="dekan"
                        className="object-cover max-w-full h-auto rounded-lg" />
                    <div className="absolute group-hover:-translate-y-8 duration-300 text-white px-6 py-10 left-0 right-0 bottom-0 flex flex-col space-y-1.5">
                        <h1 className="text-xl lg:text-3xl font-bold">Makine Mühendisliği</h1>
                        <p className="text-sm lg:text-base font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Bolumler;

