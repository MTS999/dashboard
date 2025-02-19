import { useState } from "react";
import TextField from "@mui/material/TextField";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import FormHelperText from '@mui/material/FormHelperText';
// import FormControl from '@mui/material/FormControl';

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
    e.preventDefault();
    if (validateForm()) {
      localStorage.setItem("userData", JSON.stringify(formData));
      // alert("signup succccessful");
      navigate("/login");
    }
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
      <div  className="back-page-icon ">

        <IconButton onClick={()=>navigate("/login")}>
          <KeyboardBackspaceIcon />
        </IconButton>
      </div>
      <div className="head-info">
        <h4 className="head-title">Create a new account</h4>
      
        <p>Enter your details below</p>
      </div>
      <div className="login-form flex-center ">
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
                <IconButton onClick={()=>setShowPassword(!showPassword)} edge="end">
                  {!showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
{/*      
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
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
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? "hide the password" : "display the password"
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl> */}
        <button className="theme--button width--100" onClick={handleSubmit}>
          SIGNUP
        </button>
        <p className="width--100">
          Do not have a account ?
          <Link className="content-link-signup " to={"/login"}>
            login
          </Link>
        </p>
      </div>
    </>
  );
};

export default Signup;
