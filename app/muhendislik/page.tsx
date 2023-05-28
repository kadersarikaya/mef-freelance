import React from "react";
import Navbar from "../(components)/Navbar";
import Slider from "../(components)/Slider";
import About from "../(components)/About";
import Bolumler from "../(components)/Bolumler";

const page = () => {
  return <div>
    <Navbar />
    <Slider />
    <About />
    <Bolumler />
  </div>;
};

export default page;
