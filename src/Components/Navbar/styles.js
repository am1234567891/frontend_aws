export const styles = {
  appbarContainer: {
    boxShadow: 0,
    paddingTop: "20px",
    paddingBottom: "10px",
    transition: "top 0.2s",
  },
  transitionIn: {
    top: "0",
  },
  transitionOut: {
    top: "-100px",
  },
  toolbar: {
    justifyContent: "space-between",
  },
  dropdownContainer: {
    display: "flex",
    flexGrow: 1,
  },
  fontStyle: {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "600",
    marginRight: "5%",
  },
  loginButton: {
    fontSize: "16px",
    fontFamily: "'Poppins', sans-serif",
    padding: "8px 10px",
    color: "black",
    width: "auto",
    borderRadius: "10px",
    border: "2px solid #0C0A3E",
    "&:hover": {
      backgroundColor: "#d9dbe9",
      border: "2px solid #0C0A3E",
    },
  },
  signupButton: {
    textTransform: "none",
    backgroundColor: "#100c3c",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "16px",
    borderRadius: "10px",
    color: "white",
    width: "auto",
    padding: "8px 10px",
    border: "1px solid black",
    "&:hover": {
      backgroundColor: "#46426b",
      border: "1px solid #46426b",
    },
  },
};
