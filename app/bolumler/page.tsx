import React from "react";
import Navbar from "../(components)/Navbar";
import Accordion from "../(components)/AccordionInsaat";
import Team from "../(components)/Team";

const Bolumler = () => {
  return (
    <>
    <Navbar />
    <div className="px-40 py-20" >
      <div className="flex space-x-24">
        <Accordion/>
        <Team/>
      </div>
    </div>
    </>
  )
};

export default Bolumler;
