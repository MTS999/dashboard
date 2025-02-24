import { useState } from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";



const NewPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({
    password: "",
    confirmPassword: "",
  });
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
    navigate("/signup");
    e.preventDefault();
    // if (!validateData()) return;
    if (password !== confirmPassword) {
      // alert("Passwords do not match");
      return;
    }

    let storedUser = JSON.parse(localStorage.getItem("userData"));

    if (!storedUser) {
      // alert("No user found Pease sign up first");
      return;
    }

    storedUser.password = password;
    localStorage.setItem("userData", JSON.stringify(storedUser));

    navigate("/login");
  };

 
  return (
    <>
     
      <div className="mb-2">
        <h4 className="fs-2 fw-normal">Set New Password</h4>

        <p>
          Choose a strong password with at least 6 characters for better
          security
        </p>
      </div>
      <div className="flex-center flex-column gap-3">
        <TextField
          id="password"
          name="password"
          label="Password"
          variant="outlined"
          type={showPassword ? "text" : "password"}
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
        <TextField
          id="confirmPassword"
          name="confirmPassword"
          label="confirmPassword"
          variant="outlined"
          type={showConfirmPassword ? "text" : "password"}
          fullWidth
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={()=>setShowConfirmPassword(!showConfirmPassword)} edge="end">
                  {!showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
       
       <div className="d-flex justify-content-between align-items-center  w-100 ">
          <div onClick={()=>navigate(-1)}>
            <IconButton>

            <ArrowBackIcon />
            </IconButton>
          </div>
          <p className="w-100 text-end m-0">
            <Link className="content-link" to={"/login"}>
              Back to Login
            </Link>
          </p>
        </div>
        <button className="theme--button w-100" onClick={handleSubmit}>
          Update Password
        </button>
      </div>
    </>
  );
};

export default NewPassword;
