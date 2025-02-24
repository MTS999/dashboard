// components/ChangePassword.js
import React from "react";
import TextField from "@mui/material/TextField";

const ChangePassword = () => {
  return (
    <>
        <div className="col">
          <TextField
            label="Old Password"
            type="password"
            fullWidth
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
