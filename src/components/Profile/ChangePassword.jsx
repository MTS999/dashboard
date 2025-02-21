// components/ChangePassword.js
import React from "react";
import TextField from "@mui/material/TextField";

const ChangePassword = () => {
  return (
    <>
    {/* // <div className="container p-4"> */}
      {/* // <div className="row row-cols-1 g-4"> */}
        <div className="col">
          <TextField
            label="Old Password"
            type="password"
            fullWidth
            // margin="normal"
          />
        </div>
        <div className="col">
          <TextField
            label="New Password"
            type="password"
            fullWidth
            // margin="normal"
          />
        </div>
        <div className="col">
          <TextField
            label="Confirm Password"
            type="password"
            fullWidth
            // margin="normal"
          />
        </div>
      
        <div className="col">
          <button className="theme--button w-100 p-3">SAVE</button>
        </div>
            </>
      
    
  );
};

export default ChangePassword;
