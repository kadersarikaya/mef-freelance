"use client"
import { useState } from "react";
import Hero from "../../assets/Hero.svg"
import Hero1 from "../../assets/Hero (1).svg"

import Image from "next/image";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [Hero, Hero1];
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className='w-full m-auto relative group'>
            <div className='relative'>
                <Image
                    alt="Hero Image"
                    src={slides[currentIndex]}
                    className='max-w-full h-auto bg-center bg-cover duration-200'
                />
                <div className='absolute flex flex-col md:space-y-1 lg:space-y-3 items-start text-white bottom-0 left-0 right-0 text-start md:px-24 px-8 justify-center py-2 sm:py-14 md:py-20 lg:py- 2xl:py-60'>
                    <div className="bg-[#FF8E6C] hidden px-1 py-1.5 md:inline-block text-center rounded text-xs font-medium">
                        # Hashtag
                    </div>
                    <h2 className="font-semibold text-lg md:text-xl lg:text-2xl ">FAKÜLTELER</h2>
                    <h1 className="font-semibold text-2xl md:text-3xl lg:text-6xl " >Mühendislik Fakültesi</h1>
                    <p className='text-sm md:text-base w-full md:w-[75%]'>Geleceğin toplum yararına şekillendirilmesinde, mühendislik alanında verdiği eğitim-öğretim ve temel/uygulamalı araştırma çalışmalarıyla uluslararası bir odak olmak.</p>
                </div>
            </div>
            {/* Left Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-1 md:left-2 text-xl md:text-2xl rounded-full p-1 md:p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={25} />
            </div>
            {/* Right Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] right-1 md:right-2 -translate-x-0 translate-y-[-50%] text-xl md:text-2xl rounded-full p-1 md:p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={25} />
            </div>
        </div>
    );
};

export default Slider;
