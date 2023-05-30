import React from "react";
import Navbar from "../(components)/Navbar";
import Slider from "../(components)/Slider";
import About from "../(components)/About";
import Bolumler from "../(components)/Bolumler";


const page = () => {
  return <div>
    <Navbar color={"[#F5333F]"} bolum={"MUHENDİSLİK FAKÜLTESİ"} />
    <Slider />
    <About />
    <Bolumler />
  </div>;
};

export default page;
