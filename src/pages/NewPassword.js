import { useState } from "react";
// import "./ForgotPassword.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { metaLogixLogo, startup } from "../assets";

const NewPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const validateData = () => {
    let valid = true;
    let newErrors = { password: "", confirmPassword: "" };

    // Password check
    if (!password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    // Confirm Password check
    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
      valid = false;
    } else if (confirmPassword.length < 6) {
      newErrors.confirmPassword =
        "Confirm Password must be at least 6 characters";
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateData()) return;
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    let storedUser = JSON.parse(localStorage.getItem("userData"));

    if (!storedUser) {
      alert("No user found Pease sign up first");
      navigate("/signup");
      return;
    }

    storedUser.password = password;
    localStorage.setItem("userData", JSON.stringify(storedUser));

    alert("Password changed successfully!");
    navigate("/login");
  };
  return (
    <>
      <div className="main-container">
        <div className="left-container">
          <img src={metaLogixLogo} alt="logo" className="logo" />

          <div className="left-container-content">
          <div className="left-container-content-box">
          <div className="info">
            <h1>Set New Password</h1>
          </div>
            <TextField
              id="newPassword"
              name="newPasword"
              label="NewPassword"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!errors.password}
              helperText={errors.password}
              required
            />
            <TextField
              id="confirmPassword"
              name="confirmPaswword"
              label="Confirm  Password"
              variant="outlined"
              fullWidth
              InputLabelProps={{
                sx: { color: 'black' } // Change to a visible color
              }}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
              required
            />

            <Button onClick={handleSubmit} variant="contained">
              Update Password
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

export default NewPassword;
