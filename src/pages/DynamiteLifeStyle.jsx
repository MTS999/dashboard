import React from "react";
import AppbarHeader from "../components/DynamiteLifeStyle/AppbarHeader";
import HeroSection1 from "../components/DynamiteLifeStyle/HeroSection1";
import HeroSection2 from "../components/DynamiteLifeStyle/HeroSection2";
import HeroSection3 from "../components/DynamiteLifeStyle/HeroSection3";
import HeroSection4 from "../components/DynamiteLifeStyle/HeroSection4";
import HeroSection5 from "../components/DynamiteLifeStyle/HeroSection5";
import HeroSection6 from "../components/DynamiteLifeStyle/HeroSection6";
import HeroSection7 from "../components/DynamiteLifeStyle/HeroSection7";
import HeroSection8 from "../components/DynamiteLifeStyle/HeroSection8";
import Footer from "../components/DynamiteLifeStyle/Footer";

const DynamiteLifeStyle = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="row    m-0 gx-0">
          <AppbarHeader />
          <HeroSection1 />
          <HeroSection2 />
          <HeroSection3 />
          <HeroSection4 />
          <HeroSection5 />
          <HeroSection6 />
          <HeroSection7 />
          <HeroSection8 />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default DynamiteLifeStyle;
