export const styles = {
  getStartedContainer: {
    width: { xs: "fit-content", md: "100%" },
    margin: "auto",
    marginTop: "99px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  callToAction: {
    color: "#4e4b66",
    fontFamily: "'Poppins', sans-serif",
    fontSize: { xs: "45px", md: "75px" },
    fontWeight: "bold",
    margin: "0 15px 50px",
    textAlign: "center",
    zIndex: "1",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: {
      xs: "column",
      md: "row",
    },
    alignItems: "center",
    width: "fit-content",
    margin: "auto",
    gap: "30px",
  },
  loginButton: {
    textTransform: "none",
    backgroundColor: "#0C0A3E",
    border: "1px solid black",
    borderRadius: "15px",
    "&:hover": {
      backgroundColor: "#47466b",
      border: "1px solid #47466b",
    },
    padding: "16px 40px",
  },
  signupButton: {
    textTransform: "none",
    backgroundColor: "white",
    border: "1px solid black",
    display: "flex",
    alignItems: "center",
    gap: "20px",
    borderRadius: "15px",
    "&:hover": {
      backgroundColor: "#9391ba",
      border: "1px solid #9391ba",
    },
    padding: "16px 40px",
  },
  loginFont: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: { xs: "15px", md: "25px" },
    color: "white",
  },
  signupFont: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: { xs: "15px", md: "25px" },
    color: "black",
  },
  arrow: {
    display: "inherit",
  },
  yellowBlur: {
    position: "absolute",
    left: "450px",
    zIndex: -1,
  },
  pinkBlur: {
    position: "absolute",
    left: "730px",
    zIndex: -1,
  },
};
