import { Box, Typography, IconButton, InputAdornment, Input, Backdrop, CircularProgress } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { styles } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import "./Register.css";

export default function Register() {
  window.scrollTo(0, 0);
  const [open, setOpen] = useState(false);
  const [revealPw, setRevealPw] = useState(false);
  const [pwError, setPwError] = useState(false);
  const [exists, setExists] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [accountInfo, setAccountInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPw: "",
    key: "",
  });
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
    // checking if password contains the requirements
    if (
      accountInfo.password.length < 8 ||
      !/\d/.test(accountInfo.password) ||
      !/\D/.test(accountInfo.password) ||
      !/\W/.test(accountInfo.password) ||
      accountInfo.password !== accountInfo.confirmPw
    )
      setPwError(true);
    if (accountInfo.firstName.length === 0) setFirstNameError(true);
    if (accountInfo.lastName.length === 0) setLastNameError(true);

    if (!firstNameError && !lastNameError && !pwError) {
      try {
        const response = await fetch("ec2-184-72-193-113.compute-1.amazonaws.com/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          mode: "cors",
          body: JSON.stringify({
            username: accountInfo.lastName + " " + accountInfo.firstName,
            email: accountInfo.email,
            password: accountInfo.password,
            key: accountInfo.key,
          }),
        });
        if (response.status === 201) {
          const jwt = await response.json();
          localStorage.setItem("jwt-token", jwt.token);
          navigate("/register/account_type");
        } else {
          setOpen(false);
          setExists(true);
        }
      } catch (error) {
        setOpen(false);
        console.log(error);
      }
    }
  }

  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <div>
          <Box sx={styles.formContainer}>
            <div className="text-container">
              <Typography sx={styles.titleText}>Create account</Typography>
              <Typography sx={styles.switchText}>
                Already a member?{" "}
                <Link to="/login" style={{ color: "#4a4a4a" }}>
                  Log in
                </Link>
              </Typography>
            </div>
            <form className="form-container" onSubmit={handleSubmit}>
              <ThemeProvider theme={theme}>
                <div className="field">
                  <label className="input-label">First Name *</label>
                  <Input
                    error={firstNameError}
                    type="text"
                    sx={styles.input}
                    value={accountInfo.firstName}
                    onChange={(e) => setAccountInfo({ ...accountInfo, firstName: e.target.value })}
                  />
                </div>
                <div className="field">
                  <label className="input-label">Last Name *</label>
                  <Input
                    error={lastNameError}
                    type="text"
                    sx={styles.input}
                    value={accountInfo.lastName}
                    onChange={(e) => setAccountInfo({ ...accountInfo, lastName: e.target.value })}
                  />
                </div>
                <div className="field">
                  <label className="input-label">Email *</label>
                  <Input
                    type="email"
                    sx={styles.input}
                    value={accountInfo.email}
                    onChange={(e) => setAccountInfo({ ...accountInfo, email: e.target.value })}
                  />
                </div>
                <div className="field">
                  <label className="input-label">Password *</label>
                  <Input
                    error={pwError}
                    sx={styles.input}
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
                  <label className="pw-req input-label">Must have at least 8 characters, including numbers and symbols.</label>
                </div>
                <div className="field">
                  <label className="input-label">Confirm Password *</label>
                  <Input
                    error={pwError}
                    sx={styles.input}
                    value={accountInfo.confirmPw}
                    type={revealPw ? "text" : "password"}
                    onChange={(e) => setAccountInfo({ ...accountInfo, confirmPw: e.target.value })}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton onClick={() => setRevealPw(!revealPw)}>
                          {revealPw ? <AiFillEye size={25} /> : <AiFillEyeInvisible size={25} />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </div>
              </ThemeProvider>
              <Typography sx={{ color: "red" }}>{exists && "Account already exists."}</Typography>
              <button className="button-container" type="submit">
                Create account
              </button>
            </form>
            <Typography sx={styles.termsAndServices}>
              By creating an account, you agree to our{" "}
              <span style={{ textDecoration: "underline" }}>Terms & Conditions and Privacy Policy.</span>
            </Typography>
          </Box>
        </div>
      </motion.div>
      <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}
