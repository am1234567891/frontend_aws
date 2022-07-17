const styles = {
  selectionContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "fit-content",
    margin: "auto",
    marginTop: "120px",
    color: "#4A4A4A",
    gap: "2em",
  },
  selections: {
    display: "flex",
    gap: "5em",
  },
  question: {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "500",
    fontSize: "50px",
  },
  choice: {
    width: "15em",
    height: "15em",
    border: "3px solid #4A4A4A",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "30px",
    borderRadius: "20%",
  },
  desc: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "15px",
    textTransform: "none",
    backgroundColor: "#4A4A4A",
  },
};

export default styles;
