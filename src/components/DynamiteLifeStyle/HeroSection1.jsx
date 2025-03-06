import React from "react";

const HeroSection1 = () => {
  return (
    <div className="  hero-section-1 d-center-col gap-5 h-auto bg-primary">
      <div className=" hero-section-heading d-center-col  ">
        <h3 className="rounded-5   px-3 py-2">10 DAY QUEST </h3>

        <p className="fs-5 para-1 text-center">
          Designed to give you and your business a clear road map to...
        </p>
        <h1 className=" text-align-center">
          Accelerate Your Results And Income
        </h1>
        <p className="fw-bold date">7th - 16th April 2025</p>
      </div>

      <div className="hero-section-card d-center-col  gap-1 p-4 rounded-5    position-relative z-4">
        <h3>Your GPS To Success</h3>
        <h2 className="text-center">
          10-Day Quest From 7th - 16th April with Global Expert Kim Calvert
        </h2>
        <p className="text-center">
          Build a clear vision for yourself, your team, and your business.
          Understand the 8-figure entrepreneur mindset, and overcome the mindset
          barrriers holding back your business's progress.
        </p>
        <button className="theme--button py-2 hero-buttons">Register Now</button>
      </div>
    </div>
  );
};

export default HeroSection1;
