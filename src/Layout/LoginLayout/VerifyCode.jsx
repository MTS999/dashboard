import { useState } from "react";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { IconButton } from "@mui/material";

const VerifyCode = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState(["", "", "", "", "", "",]);
  

  // Handle indvidual input change
  const handleChange = (index, value) => {
    if (value.match(/^\d?$/)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Move to next input if a digit is Entered

      if (value && index < 5) {
        document.getElementById(`code-${index + 1}`).focus();
      }
    }
    // If use press backspace
    
    else if (value === "") {
      console.log("mts");
      
      const newCode = [...code];
      newCode[index] = "";
      setCode(newCode);
    
      // Move to previous input if backspace is pressed
      if (index > 0) {
        document.getElementById(`code-${index - 1}`).focus();
      }
    }
  };

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const fullCode = code.join("");
    if (fullCode === localStorage.getItem("resetCode")) {
      navigate("/new-password");
    } else {
      alert("Invalid code. Please try again.");
    }
  };

  return (
    <>
      <div className="back-page-icon ">
        <IconButton onClick={() => navigate("/login")}>
          <KeyboardBackspaceIcon />
        </IconButton>
      </div>

      <div className="head-info">
        <h4 className="head-title">Enter 6-Digit Code</h4>

        <p>Please enter the 6-digit code we sent to your email.</p>
      </div>
      <div className="login-form flex-center">
        <div className="code-inputs ">
          {code.map((digit, index) => (
            <input
              key={index}
              id={`code-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              className="code-box"
              autoFocus={index === 0}
            />
          ))}
        </div>
        <button className="theme--button width--100" onClick={handleSubmit}>
          SUBMIT
        </button>
      </div>
    </>
  );
};

export default VerifyCode;
