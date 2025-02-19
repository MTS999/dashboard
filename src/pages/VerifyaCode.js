import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { metaLogixLogo, startup } from "../assets";
import { useNavigate } from "react-router-dom";

const VerifyCode = () => {
  const [code, setCode] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (code === localStorage.getItem("resetCode")) {
      alert("Code is correct!");
      navigate("/new-password");
    } else {
      alert("invalid code");
    }
  };

  return (
    <>
      <div className="main-container">
        <div className="left-container">
          <img
            src={metaLogixLogo}
            alt="logo"
            className="logo"
           
          />

          <div className="left-container-content">
            <div className="left-container-content-box">
              <div className="info">
                <h1>Enter 6-Digit Code</h1>
              </div>
              <TextField
                id="code"
                name="code"
                label="code"
                variant="outlined"
                fullWidth
                value={code}
                onChange={(e) => setCode(e.target.value)}
                required
              />

              <Button
                onClick={handleSubmit}
                variant="contained"
                fullWidth
                size="large"
              >
                Verify
              </Button>
            </div>
          </div>
        </div>
        <div className="right-container">
          <img className="right-img" src={startup} alt="startup" />
        </div>
      </div>
    </>
  );
};

export default VerifyCode;
