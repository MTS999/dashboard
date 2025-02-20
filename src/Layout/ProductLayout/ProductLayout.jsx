import React from "react";
import { Outlet } from "react-router-dom";

const ProductLayout = () => {
  return (
    <div className="container">
      <div className="row row-cols-3 bg-primary p-3">
        <div className="col">
          <h1 className="fw-bolder">FOREVER</h1>
        </div>

        <div className="col text-startK">
          <div className="flex-center gap-4">
            <p>home</p>
            <p>collection</p>
            <p>About</p>
          </div>
        </div>
        <div className="col">sdfds</div>
      </div>
      <Outlet/>3
    </div>
  );
};

export default ProductLayout;
