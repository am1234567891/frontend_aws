import { Input, Typography, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./styles";

export default function ForgotPassword() {
  const [accountInfo, setAccountInfo] = useState({ email: "", password: "" });
  const [submitted, setSubmitted] = useState(false);
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
    setSubmitted(true);
    setTimeout(function () {
      navigate("/");
    }, 5000);
  }

  return (
    <Box sx={{ ...styles.formContainer, marginBottom: "20px" }}>
      <Typography sx={styles.titleText}>Forgot Password</Typography>
      <ThemeProvider theme={theme}>
        <form onSubmit={handleSubmit}>
          <Box sx={styles.formLoginContents}>
            <div className="field">
              <label className="input-label">Account Email *</label>
              <Input
                type="email"
                placeholder="Enter the email of the account."
                sx={styles.inputField}
                value={accountInfo.email}
                onChange={(e) => setAccountInfo({ ...accountInfo, email: e.target.value })}
              />
            </div>
            <button className="button-container" type="submit">
              Send Email
            </button>
            {submitted && (
              <Typography sx={styles.termsAndServices}>
                A link has been sent to your email to reset your password. Redirecting to home page...
              </Typography>
            )}
          </Box>
        </form>
      </ThemeProvider>
    </Box>
  );
}
