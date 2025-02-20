import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import InputAdornment from "@mui/material/InputAdornment";
import { IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import useFetch from "../../hooks/useFetch";

const Login = () => {
  const { request, loading } = useFetch();
  const [error,setError]=useState(null)
  const [user, setUser] = useState(null);
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  console.log(user);
  
  const [showPassword, setShowPassword] = useState(false);


  const login = async () => {
    const {data,error} = await request(
      "GET",
      "https://api.escuelajs.co/api/v1/products",
      formData
    );
   
    if(error){
      setError(error)
    }

    // localStorage.setItem("token", data?.access_token);
    // fetchUserProfile(data?.access_token);

  };


  const fetchUserProfile = async (token) => {
    const { data, error } = await request("GET", "https://api.escuelajs.co/api/v1/auth/profile", null, token);

    if (error) {
      setError(error);
    } else {
      setUser(data);
    }
  };


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

    // password Validation
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
    navigate("/dashboard");
    e.preventDefault();

    // if (!validateForm()) return;
    const storedUser = JSON.parse(localStorage.getItem("userData"));

    if (storedUser) {
      if (
        storedUser.email === formData.email &&
        storedUser.password === formData.password
      ) {
      } else {
      }
    } else {
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);


  if(loading){
    return <div>Loading</div>
  }
  return (
    <>
      <div className="mb-2">
        <h4 className="fs-2 fw-normal">Login to you account</h4>

        <p>Enter your details below</p>
      </div>

      <div className="flex-center flex-column gap-3">
        <TextField
          id="email"
          name="email"
          label="Email"
          variant="outlined"
          fullWidth
          required
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
                <IconButton onClick={handleClickShowPassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <p className="w-100 text-end m-0">
          <Link className="content-link" to={"/forgotpassword"}>
            Forgot Password
          </Link>
        </p>

        <button className="theme--button w-100" onClick={handleSubmit}>
          LOGIN
        </button>

        <p className="w-100 text-end">
          Do not have a account ?
          <Link className="content-link-signup ms-1" to={"/signup"}>
            signup
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
