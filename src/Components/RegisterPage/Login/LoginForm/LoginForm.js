import { Backdrop, CircularProgress, Input, InputAdornment, IconButton, Typography, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { styles } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LoginForm() {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [revealPw, setRevealPw] = useState(false);
  const [accountInfo, setAccountInfo] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const theme = createTheme({
    palette: {
      primary: {
        main: "#787878",
      },
    },
  });

  async function handleSubmit(event) {
    event.preventDefault();
    setOpen(true);
    try {
      const response = await fetch("ec2-184-72-193-113.compute-1.amazonaws.com/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        mode: "cors",
        body: JSON.stringify({
          email: accountInfo.email,
          password: accountInfo.password,
        }),
      });
      if (response.status === 200) {
        const jwt = await response.json();
        localStorage.setItem("jwt-token", jwt.token);
        navigate("/home");
      } else {
        setOpen(false);
        setError(true);
      }
    } catch (error) {
      setError(true);
      setOpen(false);
      console.log(error);
    }
  }

  return (
    <Box sx={{ ...styles.formContainer, marginBottom: "20px" }}>
      <Typography sx={styles.titleText}>Welcome back</Typography>
      <ThemeProvider theme={theme}>
        <form onSubmit={handleSubmit}>
          <Box sx={styles.formLoginContents}>
            <div className="field">
              <label className="input-label">Email *</label>
              <Input
                type="email"
                sx={styles.inputField}
                value={accountInfo.email}
                onChange={(e) => setAccountInfo({ ...accountInfo, email: e.target.value })}
              />
            </div>
            <div className="field">
              <label className="input-label">Password *</label>
              <Input
                error={error}
                sx={styles.inputField}
                value={accountInfo.password}
                type={revealPw ? "text" : "password"}
                onChange={(e) => setAccountInfo({ ...accountInfo, password: e.target.value })}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={() => setRevealPw(!revealPw)}>
                      {revealPw ? <AiFillEye size={25} /> : <AiFillEyeInvisible size={25} />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <label className="input-label">
                <Typography sx={{ margin: "5px 0px", color: "red" }}>{error ? "Incorrect Password or Email." : " "}</Typography>
                <Link to="/forgotpassword" className="forgot-pw">
                  Forgot Password
                </Link>
              </label>
            </div>
            <button className="button-container" type="submit">
              Log in
            </button>
          </Box>
        </form>
      </ThemeProvider>
      <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  );
}
