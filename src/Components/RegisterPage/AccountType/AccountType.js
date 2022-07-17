import { motion } from "framer-motion";
import { Typography, Box, Button } from "@mui/material";
import { BsFillPersonFill } from "react-icons/bs";
import { GiTeacher } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import styles from "./styles";

export default function AccountType() {
  const navigate = useNavigate();
  return (
    <Box sx={{ width: "50%", margin: "auto" }}>
      <Box sx={styles.selectionContainer}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
          <Typography sx={styles.question}>Account Type</Typography>
        </motion.div>
        <Box sx={styles.selections}>
          <motion.div initial={{ y: "100px", opacity: 0 }} animate={{ y: "0px", opacity: 1 }} transition={{ duration: 1.2 }}>
            <Box sx={styles.choice}>
              <GiTeacher size={100} />
              <Button variant="contained" sx={styles.desc} onClick={() => navigate("/teacher_portal")}>
                Teacher
              </Button>
            </Box>
          </motion.div>
          <motion.div initial={{ y: "100px", opacity: 0 }} animate={{ y: "0px", opacity: 1 }} transition={{ duration: 1.2 }}>
            <Box sx={styles.choice}>
              <BsFillPersonFill size={100} />
              <Button variant="contained" sx={styles.desc} onClick={() => navigate("/student_portal")}>
                Student
              </Button>
            </Box>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
}
