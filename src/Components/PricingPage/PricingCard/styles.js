const styles = {
  card: {
    backgroundColor: "white",
    width: "fit-content",
    textAlign: "center",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "45px 40px",
    boxShadow: "5px 5px 15px rgba(0,0,0,0.4)",
  },
  pricePlan: {
    fontFamily: "'Inter', sans-serif",
    fontSize: "2.5em",
    fontWeight: 500,
  },
  billTime: {
    fontFamily: "'Inter', sans-serif",
    color: "#667085",
  },
  list: {
    paddingRight: "10px",
  },
  listItems: {
    fontFamily: "'Inter', sans-serif",
    color: "#667085",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  bullet: {
    background: "#344054",
    width: "25px",
    height: "25px",
    borderRadius: "28px",
  },
  button: {
    marginTop: "20px",
    backgroundColor: "#344054",
    "&:hover": {
      backgroundColor: "#34406f",
    },
  },
};

export default styles;
