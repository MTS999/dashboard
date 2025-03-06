import React from "react";
import { Ipad } from "../../assets";
const HeroSection2 = () => {
  return (
    <div className="bg-dark hero-section-2 ">
      <div className="content d-flex flex-column flex-md-row gap-5">
        <div className="w-md-50">
          <img src={Ipad} alt="Ipad" />
        </div>

        <div className="d-center-col align-items-start w-md-50 gap-4 ">
          <h2>The GPS Code isn't just used for earning more money... </h2>
          <span className="">
            You'll finally be able to reinvent yourself & your business.
          </span>

          <p className="mb-0">
          The GPS Code doesn't help you get by with average results. The GPS Code will show you the exact steps you need to make sure you are successful in today's climate!
          </p>
          <button className="theme--button py-2  hero-buttons">Register Now</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection2;
