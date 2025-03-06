import React from "react";
import { GPS_CODE_LOGO } from "./../../assets/index";
const AppbarHeader = () => {
  return (
    <div className="nav-header  position-fixed  p-2 z-45 mw-100">
      <div className=" mx-auto flex-center justify-content-between   rounded-4  nav-header-content">
        <img
          className=" ms-3 gps-logo d-block  "
          src={GPS_CODE_LOGO}
          alt="GPS-LOGO"
        />
        <button className="theme--button hero-buttons py-2 px-4 fs-6">
          Grab your post
        </button>
      </div>
    </div>
  );
};

export default AppbarHeader;
