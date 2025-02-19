import { useState } from "react";
import TextField from "@mui/material/TextField";
// import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";


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

  const [showPassword, setShowPassword] = useState(false);

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
    navigate("/login");
    e.preventDefault();
    // if (validateForm()) {
    //   localStorage.setItem("userData", JSON.stringify(formData));
    //   // alert("signup succccessful");
    // }
  };

  // const handleClickShowPassword = () => setShowPassword((show) => !show);

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };

  // const handleMouseUpPassword = (event) => {
  //   event.preventDefault();
  // };

  return (
    <>
    

      <div className="mb-2">
        <h4 className="fs-2 fw-normal">Create a new account</h4>

        <p>Enter your details below</p>
      </div>
      <div className="flex-center flex-column gap-3">
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
          label="Email"
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
          label="Password"
          variant="outlined"
          type={showPassword ? "text" : "password"}
          fullWidth
          value={formData.password}
          onChange={handleChange}
          error={!!errors.password}
          helperText={errors.password}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {!showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        
        <button className="theme--button w-100" onClick={handleSubmit}>
          SIGNUP
        </button>
        <p className="w-100 text-end pe-1">
          Do not have a account ?
          <Link className="content-link-signup ms-1" to={"/login"}>
            login
          </Link>
        </p>
      </div>
    </>
  );
};

export default Signup;
