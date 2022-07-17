import { useNavigate } from "react-router-dom";
import { Box, Container, IconButton, Typography } from "@mui/material";
import {
  FaSnapchatGhost,
  FaInstagram,
  FaTiktok,
  FaFacebook,
} from "react-icons/fa";
import logo_placeholder from "./logo_placeholder.png";
import { styles } from "./styles";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer>
      <Container maxWidth="xl">
        <Box sx={styles.footerContainer}>
          <Box sx={styles.contactsContainer}>
            <img src={logo_placeholder} width="300" alt="company logo" />
            <Box sx={styles.socialsContainer}>
              <IconButton href="https://www.snapchat.com" target="_blank">
                <FaSnapchatGhost size={40} />
              </IconButton>
              <IconButton href="https://www.instagram.com/" target="_blank">
                <FaInstagram size={40} />
              </IconButton>
              <IconButton href="https://www.tiktok.com/" target="_blank">
                <FaTiktok size={40} />
              </IconButton>
              <IconButton href="https://www.facebook.com/" target="_blank">
                <FaFacebook size={40} />
              </IconButton>
            </Box>
          </Box>
          <Box sx={styles.footerInfoContainer}>
            <Box sx={styles.footerInfo}>
              <Typography variant="h6" sx={styles.headingFont}>
                AiTudier
              </Typography>
              <Typography
                variant="p"
                sx={styles.textFont}
                onClick={() => {
                  navigate("/");
                }}
              >
                Home <br />
              </Typography>
              <Typography
                variant="p"
                sx={styles.textFont}
                onClick={() => {
                  navigate("/about");
                }}
              >
                About <br />
              </Typography>
              <Typography
                variant="p"
                sx={styles.textFont}
                onClick={() => {
                  navigate("/features");
                }}
              >
                Features <br />
              </Typography>
            </Box>
            <Box sx={styles.footerInfo}>
              <Typography variant="h6" sx={styles.headingFont}>
                Support
              </Typography>
              <Typography
                variant="p"
                sx={styles.textFont}
                onClick={() => {
                  navigate("/faq");
                }}
              >
                FAQ <br />
              </Typography>
              <Typography
                variant="p"
                sx={styles.textFont}
                onClick={() => {
                  navigate("/customer-support");
                }}
              >
                Customer Support <br />
              </Typography>
              <Typography
                variant="p"
                sx={styles.textFont}
                onClick={() => {
                  navigate("/zendesk");
                }}
              >
                Zendesk <br />
              </Typography>
              <Typography
                variant="p"
                sx={styles.textFont}
                onClick={() => {
                  navigate("/resources");
                }}
              >
                Resources <br />
              </Typography>
            </Box>
            <Box sx={styles.footerInfo}>
              <Typography variant="h6" sx={styles.headingFont}>
                Developers
              </Typography>
              <Typography
                variant="p"
                sx={styles.textFont}
                onClick={() => {
                  navigate("/documentation");
                }}
              >
                Documentation <br />
              </Typography>
              <Typography
                variant="p"
                sx={styles.textFont}
                onClick={() => {
                  navigate("/api");
                }}
              >
                API <br />
              </Typography>
              <Typography
                variant="p"
                sx={styles.textFont}
                onClick={() => {
                  navigate("/careers");
                }}
              >
                Careers <br />
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </footer>
  );
}
