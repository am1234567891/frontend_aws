import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { MdChevronRight } from "react-icons/md";
import { styles } from "./styles";
import { motion } from "framer-motion";

export default function Headers() {
  return (
    <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
      <Box sx={styles.headerContainer}>
        <Box sx={styles.headerTextContainer}>
          <Typography variant="h1" sx={styles.headerFont}>
            A Header for Landing Page
          </Typography>
          <Typography variant="p" sx={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea vel faucibus leo tincidunt amet, lectus mi venenatis,
            faucibus.
          </Typography>
        </Box>
        <Box sx={styles.buttonContainer}>
          <Button sx={styles.startButton} variant="contained">
            Start Now
          </Button>
          <Button sx={styles.learnButton} variant="contained">
            Learn more
            <MdChevronRight size={25} />
          </Button>
        </Box>
      </Box>
    </motion.div>
  );
}
