import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";
import { metaLogixLogo, startup } from "../assets";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("userData"));

    if (storedUser?.email === email) {
      localStorage.setItem("resetCode", "123456");
      navigate("/verify-code");
    } else {
      alert("Email not found!");
    }
  };

  return (
    <>
      <div className="main-container">
        <div className="left-container">
          <img
            src={metaLogixLogo}
            alt=""
            className="logo"
        
          />

          <div className="left-container-content">
            <div className="left-container-content-box">
              <div>
                <div className="info">
                  <h1>Password Reset</h1>
                  <p className="forgot-password-paragraph">
                    Forgotten your password? Enter your e-mail address below,
                    and we&apos;ll send you an e-mail allowing you to reset it.
                  </p>
                </div>
              </div>

              <TextField
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <Button onClick={handleSubmit} variant="contained" size="large">
                Reset my Password
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

export default ForgotPassword;
