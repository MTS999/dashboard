import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { metaLogixLogo, startup } from "../assets";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    lastName: "",
    firstName: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setErrors({ email: "", password: "", firstName: "", lastName: "" });
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = { email: "", password: "", firstName: "", lastName: "" };

    // Email check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }

    // Password check
    if (!formData.password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    //first name check
    if (!formData.firstName) {
      newErrors.firstName = "First Name is required";
    } else if (formData.firstName.length < 3) {
      newErrors.firstName = "First Name must be at least 3 characters";
    }

    // last name check
    if (!formData.lastName) {
      newErrors.lastName = "last Name is required";
    } else if (formData.lastName.length < 3) {
      newErrors.lastName = "Last Name must be at least 3 characters";
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      localStorage.setItem("userData", JSON.stringify(formData));
      alert("signup successful");
      navigate("/login");
    }
  };

  return (
    <>
      <div className="main-container">
        <div className="left-container">
          <div className="left-container-content">
            <img
              src={metaLogixLogo}
              alt=""
              className="logo"
            
            />
            <div className="left-container-content-box">
              <div className="info">
                <h1>Create a new account</h1>
                <p>
                  Already have an account ?
                  <Link
                    className="content-link"
                    to={"/login"}
                  >
                    Login
                  </Link>
                </p>
              </div>
              <TextField
                id="firstName"
                name="firstName"
                label="FirstName"
                variant="outlined"
                fullWidth
                value={formData.firstName}
                onChange={handleChange}
                error={!!errors.firstName}
                helperText={errors.firstName}
              />
              <TextField
                id="lastName"
                name="lastName"
                label="LastName"
                variant="outlined"
                fullWidth
                value={formData.lastName}
                onChange={handleChange}
                error={!!errors.lastName}
                helperText={errors.lastName}
              />
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

              <Button onClick={handleSubmit} variant="contained" fullWidth size="large">
                Signup
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

export default Signup;
