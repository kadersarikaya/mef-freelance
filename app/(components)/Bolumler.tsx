import React from "react";
import Image from "next/image";
import Card from "../../assets/Card.svg"
import Card1 from "../../assets/Card (1).svg"
import Card2 from "../../assets/Card (2).svg"
import Card3 from "../../assets/Card (3).svg"
import Card4 from "../../assets/Card (4).svg"

function Bolumler() {
  return(
    <section className="px-24 py-20 flex flex-col">
        <h1 className="text-4xl font-semibold pb-10">Mühendislik Fakültesi Hakkında</h1>
        <div className="flex space-x-7">
            <div className="relative">
                <Image
                    src={Card} alt="dekan"
                    className="object-cover w-full h-full rounded-lg" />
                  <div className="absolute text-white px-6 py-14 left-0 right-0 bottom-0 flex flex-col space-y-2">
                    <h1 className="text-3xl font-bold">Bilgisayar Mühendisliği</h1>
                      <p className="text-base font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>
            </div>
            <div className="relative">
                <Image
                    src={Card1} alt="dekan"
                    className="object-cover w-full h-full rounded-lg" />
                <div className="absolute text-white p-6 left-0 right-0 bottom-0 flex flex-col space-y-1.5">
                      <h1 className="text-3xl font-bold">Elektrik Elektronik Mühendisliği</h1>
                      <p className="text-base font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div className="relative">
                <Image
                    src={Card2} alt="dekan"
                    className="object-cover w-full h-full rounded-lg" />
                  <div className="absolute text-white px-6 py-14 left-0 right-0 bottom-0 flex flex-col space-y-1.5">
                      <h1 className="text-3xl font-bold">Endüstri Mühendisliği</h1>
                      <p className="text-base font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </div>
        <div className="flex space-x-7 pt-8">
              <div className="relative">
                  <Image
                      src={Card3} alt="dekan"
                      className="object-cover w-full h-full rounded-lg" />
                  <div className="absolute text-white px-6 py-10 left-0 right-0 bottom-0 flex flex-col space-y-1.5">
                      <h1 className="text-3xl font-bold">İnşaat Mühendisliği</h1>
                      <p className="text-base font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
              </div>
              <div className="relative">
                  <Image
                      src={Card4} alt="dekan"
                      className="object-cover w-full h-full rounded-lg" />
                  <div className="absolute text-white px-6 py-10 left-0 right-0 bottom-0 flex flex-col space-y-1.5">
                      <h1 className="text-3xl font-bold">Makine Mühendisliği</h1>
                      <p className="text-base font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
              </div>
        </div>
    </section>
  )
}

export default Bolumler;

