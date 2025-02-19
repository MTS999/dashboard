import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const VerifyCode = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState(["", "", "", "", "", ""]);

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
    navigate("/new-password");
    const fullCode = code.join("");
    if (fullCode === localStorage.getItem("resetCode")) {
    } else {
      // alert("Invalid code. Please try again.");
    }
  };

  return (
    <>
     

      <div className="mb-2">
        <h4 className="fs-2 fw-normal">Enter 6-Digit Code</h4>

        <p>Please enter the 6-digit code we sent to your email.</p>
      </div>
      <div className="flex-center flex-column gap-3 ">
        <div className=" d-flex justify-content-between  my-2 w-100 pe-1 ps-1">
          {code.map((digit, index) => (
            <input
              key={index}
              id={`code-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              className="code-box fs-4 rounded-3"
              autoFocus={index === 0}
            />
          ))}
        </div>
        <p className="w-100 text-end m-0">
          <Link className="content-link" to={"/login"}>
          Back to Login
          </Link>
        </p>
        <button className="theme--button w-100" onClick={handleSubmit}>
          SUBMIT
        </button>
      </div>
    </>
  );
};

export default VerifyCode;
