import React from "react";
import Image from "next/image";
import Image1 from "../../assets/Image1.svg";
import Image2 from "../../assets/Image2.svg";
import Image3 from "../../assets/Image3.svg";
import Image4 from "../../assets/Image4.svg";
import Image5 from "../../assets/Image5.svg";
import Image6 from "../../assets/Image6.svg";
import Image7 from "../../assets/Image1.svg";
import Image8 from "../../assets/Image2.svg";
import Image9 from "../../assets/Image2.svg";
const Team = () => {
  const team = [
    {
      Image: Image1,
      name: "Eda ARIKAN",
      position: "Mütevelli Heyet Başkanı",
    },
    {
      Image: Image2,
      name: "Eda ARIKAN",
      position: "Mütevelli Heyet Başkanı",
    },
    {
      Image: Image3,
      name: "Eda ARIKAN",
      position: "Mütevelli Heyet Başkanı",
    },
    {
      Image: Image4,
      name: "Eda ARIKAN",
      position: "Mütevelli Heyet Başkanı",
    },
    {
      Image: Image5,
      name: "Eda ARIKAN",
      position: "Mütevelli Heyet Başkanı",
    },
    {
      Image: Image6,
      name: "Eda ARIKAN",
      position: "Mütevelli Heyet Başkanı",
    },
    {
      Image: Image7,
      name: "Eda ARIKAN",
      position: "Mütevelli Heyet Başkanı",
    },
    {
      Image: Image8,
      name: "Eda ARIKAN",
      position: "Mütevelli Heyet Başkanı",
    },
    {
      Image: Image9,
      name: "Eda ARIKAN",
      position: "Mütevelli Heyet Başkanı",
    },
  ]
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-14 lg:gap-x-40 gap-y-10 lg:gap-y-20">
        {team.map((item, index) => (
          <div key={index} className="flex flex-col justify-center items-center mx-auto">
            <div className="bg-[#F5333F] bg-opacity-50 p-1 rounded-full w-28 h-28 lg:w-56 lg:h-56">
              <a className='block bg-white p-1 rounded-full' >
                <Image
                  alt='team'
                  src={item.Image}
                  className="rounded-full w-26 h-26 lg:w-52 lg:h-52" />
              </a>
            </div>
            <div className="pt-5 md:pt-11 space-y-1.5 md:space-y-2.5 mx-auto text-center px-5">
              <h3 className="text-lg md:text-xl font-semibold text-[#161616]">{item.name}</h3>
              <p className="text-gray-500 text-sm md:text-base">{item.position}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Team;
