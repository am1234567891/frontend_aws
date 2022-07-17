import { AiOutlineGoogle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import Typography from "@mui/material/Typography";
import "./SignupForm.css";

export default function SignupForm() {
  return (
    <div className="signupForm-container">
      <div style={{ width: "200px" }}>
        <Typography
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "16px",
            color: "#4a4a4a",
          }}
        >
          Don't have an account?
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "36px",
            color: "#4a4a4a",
            fontWeight: 600,
          }}
        >
          Sign up
        </Typography>
      </div>
      <div className="button-containers">
        <button className="action-button">
          <AiOutlineGoogle size={24} />
          <Typography
            sx={{ fontFamily: "'Inter', sans-serif", fontSize: "14px" }}
          >
            Sign up with Google
          </Typography>
        </button>
        <button className="action-button">
          <BsFacebook size={19} />
          <Typography
            sx={{ fontFamily: "'Inter', sans-serif", fontSize: "14px" }}
          >
            Sign up with Facebook
          </Typography>
        </button>
        <button className="action-button">
          <Typography
            sx={{ fontFamily: "'Inter', sans-serif", fontSize: "14px" }}
          >
            Sign up with email
          </Typography>
        </button>
      </div>
    </div>
  );
}
