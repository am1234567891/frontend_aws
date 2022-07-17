import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LeftTriangle from "./leftTriangle.png";
import RightTriangle from "./rightTriangle.png";
import YellowBlur from "./yellowBlur.png";
import PinkBlur from "./pinkBlur.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { styles } from "./styles";
import { motion } from "framer-motion";

export default function GetStarted() {
  const navigate = useNavigate();

  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }}>
      <Box sx={styles.getStartedContainer}>
        <img src={LeftTriangle} alt="left triangle" width="250" />
        <img src={YellowBlur} alt="blur" style={styles.yellowBlur} width="750" />
        <img src={PinkBlur} alt="blur" style={styles.pinkBlur} width="750" />
        <Box>
          <Typography sx={styles.callToAction}>Get Started</Typography>
          <Box sx={styles.buttonContainer}>
            <Button variant="contained" sx={styles.loginButton} onClick={() => navigate("/login")}>
              <Typography sx={styles.loginFont}>Login</Typography>
            </Button>
            <Button variant="contained" sx={styles.signupButton}>
              <Typography sx={styles.signupFont}>Request Demo</Typography>
              <Box sx={styles.arrow}>
                <AiOutlineArrowRight size={20} color="black" />
              </Box>
            </Button>
          </Box>
        </Box>
        <img src={RightTriangle} alt="right triangle" width="250" />
      </Box>
    </motion.div>
  );
}
