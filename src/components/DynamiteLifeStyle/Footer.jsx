import React from "react";
import { Logo } from "../../assets";

const Footer = () => {
  return (
    <div className="footer">
      <div className="content d-center-col align-items-start gap-2 ">
        <div className="footer-logo">
          <img src={Logo} alt="" />
        </div>
        <a target="_blank" rel="noopener noreferrer">
          Visit Dynamite Lifestyle
        </a>

        <span>© 2025 Dynamite Lifestyle. All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
