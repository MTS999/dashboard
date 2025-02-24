import { useState } from "react";
import TextField from "@mui/material/TextField";
import { useNavigate ,Link} from "react-router-dom";

const ForgotPassword = () => {

  console.log("mtssssss");
  
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("userData"));

    navigate("/verify-code");
    if (storedUser?.email === email) {
      localStorage.setItem("resetCode", "123456");
    } else {
      // alert("Email not found!");
    }
  };

  return (
    <>
     
      <div className="mb-2">

        <h4 className="fs-2 fw-normal">Password Reset</h4>

        <p >
          Forgotten your password? Enter your e-mail address below, and
          we&apos;ll send you an e-mail allowing you to reset it.
        </p>
      </div>
      <div className="flex-center flex-column gap-3">
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
         <p className="w-100 text-end m-0">
          <Link className="content-link" to={"/login"}>
          Back to Login
          </Link>
        </p>
        <button className="theme--button w-100" onClick={handleSubmit}>
          VERIFY EMAIL
        </button>
      </div>
    </>
  );
};

export default ForgotPassword;
