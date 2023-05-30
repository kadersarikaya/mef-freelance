import React from "react";
import Navbar from "../(components)/Navbar";
import Accordion from "../(components)/Accordion";
import Team from "../(components)/Team";

const Bolumler = () => {
  return (
    <>
      <Navbar color={"[#F5333F]"} bolum={"MÜHENDİSLİK FAKÜLTESİ"} />
      <div className="px-40 py-20" >
        <div className="flex space-x-24">
          <Accordion />
          <Team />
        </div>
      </div>
    </>
  )
};

export default Bolumler;
