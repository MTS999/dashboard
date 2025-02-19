import { useState } from "react";
import TextField from "@mui/material/TextField";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

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
      <div className="back-page-icon ">
        <IconButton onClick={() => navigate(-1)}>
          <KeyboardBackspaceIcon />
        </IconButton>
      </div>
      <div className="head-info">

        <h4 className="head-title">Password Reset</h4>

        <p className="forgot-password-paragraph">
          Forgotten your password? Enter your e-mail address below, and
          we&apos;ll send you an e-mail allowing you to reset it.
        </p>
      </div>
      <div className="login-form flex-center">
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
        <button className="theme--button width--100" onClick={handleSubmit}>
          RESET MY PASSWORD
        </button>
      </div>
    </>
  );
};

export default ForgotPassword;
