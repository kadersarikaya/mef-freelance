import React from "react";
import Image from "next/image";
import Dekan from "../../assets/dekan.svg"
import Yonetim from "../../assets/yönetim.svg"

const About = () => {
  return (
      <section className="text-[#2D2A26] flex flex-col md:px-24 px-8 py-14 md:py-20">
          <h1 className="text-2xl md:text-4xl font-semibold pb-6 md:pb-10">Mühendislik Fakültesi Hakkında</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">      
            <div className="flex flex-col lg:flex-col space-y-6 md:space-y-10">
                <div className="flex flex-col space-y-4 border p-6 ">
                    <h2 className="text-xl md:text-2xl font-medium">Neden Mühendislik Fakültesi</h2>
                      <p className="text-sm font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam placerat magna sit amet erat varius hendrerit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam placerat magna sit amet erat varius hendrerit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam placerat magna sit amet erat varius hendrerit.</p>
                    <div>
                        <button className="bg-[#F5333F] text-sm text-white py-2 px-4">Daha Fazla</button>
                    </div>
                </div>
                <div className="flex flex-col space-y-4 border p-6">
                      <h2 className="text-xl md:text-2xl font-medium">Akreditasyon</h2>
                      <p className="text-sm font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam placerat magna sit amet erat varius hendrerit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam placerat magna sit amet erat varius hendrerit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam placerat magna sit amet erat varius hendrerit.</p>
                    <div>
                        <button className="bg-[#F5333F] text-sm text-white py-2 px-4">Daha Fazla</button>
                    </div>
                </div>
            </div>
            <div className="relative">
                <Image
                width={482}
                height={526}
                src={Dekan} alt="dekan" 
                className="object-cover w-full h-full rounded-lg"/>
                    <div className="absolute text-white p-6 left-0 right-0 bottom-0 flex flex-col space-y-1.5">
                        <h1 className="text-xl md:text-2xl font-bold">Dekanın Mesajı</h1>
                        <p className="text-sm text-[#B5B5B2] font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam placerat magna sit amet erat varius hendrerit. </p>
                        <div className="pt-2">
                        <button className="bg-[#F5333F] text-sm py-2 px-4">Daha Fazla</button>
                        </div>
                    </div>
            </div>
            <div className="relative">
                <Image
                    width={482}
                    height={526}
                    src={Yonetim} alt="dekan"
                    className="object-cover w-full h-full rounded-lg" />
                <div className="absolute text-white p-6 left-0 right-0 bottom-0 flex flex-col space-y-1.5">
                    <h1 className="text-xl md:text-2xl font-bold">Fakülte Yönetimi</h1>
                    <p className="text-sm text-[#B5B5B2] font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam placerat magna sit amet erat varius hendrerit. </p>
                    <div className="pt-2">
                        <button className="bg-[#F5333F] text-sm py-2 px-4">Daha Fazla</button>
                    </div>
                </div>
            </div>
        </div> 
     </section>
  )
};

export default About;
