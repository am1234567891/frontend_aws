export const styles = {
  footerContainer: {
    marginTop: "200px",
    marginBottom: "100px",
    display: "flex",
    flexDirection: {
      xs: "column",
      md: "row",
    },
    justifyContent: "space-between",
    alignItems: "start",
    padding: "0 20px",
    height: "fit-content",
  },
  contactsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: {
      xs: "center",
      md: "flex-start",
    },
  },
  socialsContainer: {
    display: "flex",
    alignItems: "center",
    gap: "27px",
    marginTop: { xs: "20px", md: "135px" },
  },
  footerInfoContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    textAlign: { xs: "center", md: "left" },
    gap: {
      md: "100px",
      xs: "0px",
    },
    flexDirection: {
      md: "row",
      xs: "column",
    },
    flexGrow: {
      xs: "1",
      md: "0",
    },
  },
  footerInfo: {
    width: "190px",
  },
  headingFont: {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "600",
    marginBottom: { sm: "10px", md: "15px" },
  },
  textFont: {
    fontFamily: "'Poppins', sans-serif",
    color: "#4e4b66",
    fontSize: "20px",
    "&:hover": {
      textDecoration: "underline",
      cursor: "pointer",
    },
    textAlign: { xs: "center", md: "left" },
  },
};
