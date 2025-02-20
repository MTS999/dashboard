import React from "react";
import { TextField } from "@mui/material";
const Bootstrap = () => {
  return (
    <>
      <div class="container">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div class="col">
            <TextField
              id=""
              label=""
               fullWidth
            />
          </div>
          <div class="col">
            <div class="d-flex p-3 bg-secondary text-white">One of three columns</div>
          </div>
          <div class="col">
            <div class="p-3 bg-primary text-white">One sdvdsvsdvsdvsdvdsvdsvdsvdsvof three columns</div>
          </div>

          <div class="col">
            <div class="p-3 bg-danger text-white">Second row column</div>
          </div>
          <div class="col">
            <div class="p-3 bg-warning text-dark">Second row column</div>
          </div>
          <div class="col">
            <div class="p-3 bg-success text-white">Second row column</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bootstrap;
