import * as React from "react";
import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import logo_placeholder from "../Footer/logo_placeholder.png";
import Dropdown from "./NavbarDropdown/Dropdown";
import { styles } from "./styles";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function NavBar(props) {
  const [yPos, setYPos] = useState(window.scrollY);
  const [scrollDirection, setScrollDirection] = useState(false);
  const [navBarContainer, setNavBarContainer] = useState([
    styles.appbarContainer,
    styles.transitionIn,
  ]);
  const navigate = useNavigate();
  const location = useLocation();
  const hideDropDowns = ["/login", "/register"];

  window.onscroll = () => {
    if (window.scrollY < yPos) setScrollDirection(false);
    else {
      setScrollDirection(true);
    }
    setYPos(window.scrollY);
  };

  useEffect(() => {
    const updateNavBar = () => {
      if (scrollDirection) {
        setNavBarContainer([navBarContainer[0], styles.transitionOut]);
      } else {
        setNavBarContainer([navBarContainer[0], styles.transitionIn]);
      }
    };
    updateNavBar();
  }, [yPos]);

  return (
    <div style={{ height: "80px", minWidth: "700px" }}>
      <AppBar
        position="fixed"
        color="default"
        sx={{ ...navBarContainer, marginBottom: "10px" }}
      >
        <Container maxWidth="fluid">
          <Toolbar sx={styles.toolbar}>
            <Box style={{ width: "270px", maxWidth: "70%" }}>
              <Button onClick={() => navigate("/")}>
                <img
                  style={{ marginRight: "5%" }}
                  src={logo_placeholder}
                  width="240px"
                  alt="company logo"
                />
              </Button>
            </Box>
            {!hideDropDowns.includes(location.pathname) && (
              <Box sx={styles.dropdownContainer}>
                <Dropdown>Product</Dropdown>
                <Dropdown>Solution</Dropdown>
                <Dropdown>Pricing</Dropdown>
                <Dropdown>Blog</Dropdown>
              </Box>
            )}
            <Box
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                width: "200px",
              }}
            >
              <Button
                sx={styles.loginButton}
                variant="outlined"
                onClick={() => navigate("/login")}
              >
                LOGIN
              </Button>
              <Button
                sx={styles.signupButton}
                variant="outlined"
                onClick={() => navigate("/register")}
              >
                SIGN UP
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
