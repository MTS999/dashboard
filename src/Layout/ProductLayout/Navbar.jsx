import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="row row-cols-3  p-3 mb-0">
        <div className="col">
          <h1 className="fw-bolder text-dark">FOREVER</h1>
        </div>

        <div className="col text-start flex-center">
          <div className="flex-center gap-4">
            <p>Home</p>
            <p>Collection</p>
            <p>About</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
