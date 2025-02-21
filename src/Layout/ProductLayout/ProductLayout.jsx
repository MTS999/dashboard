import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const ProductLayout = () => {
  return (
    <div className="container">
      <Navbar />
      <hr className="m-0 mb-5" />
      <Outlet />
    </div>
  );
};

export default ProductLayout;
