import { Box, Button, Typography } from "@mui/material";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import "./Dropdown.css";
import { styles } from "./styles";

export default function Dropdown({ children }) {
  const navigate = useNavigate();
  return (
    <Box className="dropdown">
      <button className="dropbtn">
        <Box sx={styles.buttons}>
          <Typography sx={styles.font}>{children}</Typography>
          <RiArrowDropDownLine className="arrow" />
        </Box>
      </button>
      <Box className="dropdown-content">
        <Button onClick={() => navigate(`/${children}1`)}>
          <Typography sx={styles.menuFont}>{`${children}`} 1</Typography>
        </Button>
        <Button onClick={() => navigate(`/${children}2`)}>
          <Typography sx={styles.menuFont}>{`${children}`} 2</Typography>
        </Button>
        <Button onClick={() => navigate(`/${children}3`)}>
          <Typography sx={styles.menuFont}>{`${children}`} 3</Typography>
        </Button>
      </Box>
    </Box>
  );
}
