import { useState } from "react";
// import "./Login.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { metaLogixLogo, startup } from "../assets";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setErrors({ email: "", password: "" });
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  // console.log(formData);
  const validateForm = () => {
    let valid = true;
    let newErrors = { email: "", password: "" };

    // Email check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }

    // **Password Validation
    if (!formData.password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;
    const storedUser = JSON.parse(localStorage.getItem("userData"));

    if (storedUser) {
      if (
        storedUser.email === formData.email &&
        storedUser.password === formData.password
      ) {
        alert("Login successful!");
        navigate("/dashboard");
      } else {
        alert("invalid email or password");
      }
    } else {
      alert("No user found, Sign up first.");
    }
  };

  return (
    <>
      <div className="main-container">
        <div className="left-container">
          <img
            className="logo"
            src={metaLogixLogo}
         
            alt=""
          />
          <div className="left-container-content">
            <div className="left-container-content-box">
              <div className="info">
                <h1>Login to you account</h1>
                <p>
                  Do not have a account ?
                  <Link
                    className="content-link"
                    to={"/signup"}
                  >
                    signup
                  </Link>
                </p>
              </div>
              <TextField
                id="email"
                name="email"
                label="email"
                variant="outlined"
                fullWidth
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
              />
              <TextField
                id="password"
                name="password"
                label="password"
                variant="outlined"
                type="password"
                fullWidth
                value={formData.password}
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
              />

              <p className="forgot-password">
                {" "}
                <Link className="content-link" to={"/forgotpassword"}> Forgot Password </Link>
              </p>

              <Button
                onClick={handleSubmit}
                variant="contained"
                fullWidth
                size="large"
              >
                Login
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

export default Login;
