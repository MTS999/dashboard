import React from "react";
import { kim } from "../../assets";
import DoneIcon from "@mui/icons-material/Done";
const expectations = [
  "You can expect to learn everything you need to stand out in today's world",
  "You can expect to learn what you need to adapt to today's world",
  "You can expect to learn how to attract clients",
  "You can expect to learn the mindset needed, how to close the deals, and increase income",
  "You can expect to become more effective and start being successful!",
];

const HeroSection4 = () => {
  return (
    <div className="hero-section-4 ">
      <div className="content d-flex flex-column justify-content-center flex-md-row mx-auto gap-5">
        <div className="left-container d-center-col  order-2 order-md-1 w-100 w-md-50">
          <div className="d-center-col w-100 align-items-start gap-3">
            <h2 className="mb-0">What you can expect</h2>
            <p className="mb-0 description">
              If you are someone who wants to make it happen and step up as a
              leader and a professional, accelerate your growth you need The GPS
              Code, all value, all action no BS, - the good stuff that gets
              results!
            </p>
            <div className="d-center-col align-items-start">
              {expectations.map((item, index) => (
                <div className="list d-flex algn-items-center gap-2">
                  <div className="icon">
                    <DoneIcon />
                  </div>
                  <div>
                    <p className="mb-0">
                     {item}
                    </p>
                  </div>
                </div>
              ))}
            
            </div>
            <span className="mb-0">
              Decide you are ready, register now and access your bonuses!
            </span>
            <button className="theme--button py-2  hero-buttons">
              Register Now
            </button>
          </div>
        </div>
        <div className="right-container d-center-col  order-1 order-md-2 w-100 w-md-50">
          <img src={kim} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection4;
