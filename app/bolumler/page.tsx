"use client";
import React, { useState } from "react";
import Navbar from "../(components)/Navbar";
import Accordion from "../(components)/AccordionInsaat";

const Bolumler = () => {
    
    return (
        <>
            <Navbar url={"/muhendislik"} color={"#F5333F"} bolum={"MÜHENDİSLİK FAKÜLTESİ"} />
            <div className="md:px-24 px-3 py-14 md:py-20" >
                <div className="flex space-x-6 md:space-x-12 lg:space-x-24 justify-between">
                    <Accordion />
                </div>
            </div>
        </>
    )
};

export default Bolumler;
