import bg from "./background_pattern.png";

export const styles = {
  pricingHeading: {
    backgroundColor: "#344054",
    textAlign: "center",
    color: "white",
    display: "flex",
    flexDirection: "column",
    gap: "2.1rem",
    paddingTop: "5rem",
  },
  pricingHeadingTitle: {
    fontFamily: "'Inter', sans-serif",
    fontWeight: "500",
    fontSize: "3em",
  },
  pricingHeadingDesc: {
    fontFamily: "'Inter', sans-serif",
    fontSize: "1.25em",
  },
  discounts: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  pricingHeadingDisc: {
    fontFamily: "'Inter', sans-serif",
    fontSize: "1em",
  },
  backgroundPattern: {
    backgroundImage: `url(${bg})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "510px",
    marginBottom: "-300px",
    zIndex: "0",
  },
  cards: {
    display: "flex",
    justifyContent: "center",
    gap: "4.5em",
    paddingTop: "5em",
  },
  badge: {
    backgroundColor: "#101828",
    width: "fit-content",
    padding: "3px 8px",
    borderRadius: "10px",
    margin: "auto",
  },
  badgeText: {
    fontFamily: "'Inter', sans-serif",
    fontSize: ".875em",
  },
  faq: {
    fontFamily: "'Ariel', sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    background: "#F5F3ED",
    zIndex: "-1",
    position: "relative",
  },
  faqTitle: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginBottom: "20px",
    marginTop: "500px",
  },
  faqMission: {
    color: "#808080",
    fontSize: "1rem",
  },
  faqItems: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    gap: "20px",
    margin: "50px 5em 40px 5em",
  },
  faqItem: {
    maxWidth: "30%",
  },
  faqItemQuestion: {
    fontWeight: "bold",
    fontSize: "1.25rem",
    margin: "5px 0 10px 0",
  },
  faqItemBody: {
    color: "#808080",
    fontSize: "1rem",
    textIndent: "10px",
  },
  demoHeading: {
    textAlign: "center",
    gap: "2.1rem",
    paddingTop: "6rem",
    backgroundColor: "#F5F3ED",
  },
  demoHeadingTitle: {
    color: "#101828",
    fontFamily: "'Inter', sans-serif",
    fontWeight: "500",
    fontSize: "2.25em",
  },
  demoHeadingDesc: {
    color: "#667085",
    fontFamily: "'Inter', sans-serif",
    fontSize: "2.03em",
    marginTop: ".9rem",
  },
  demoButton: {
    width: "18.185em",
    height: "5em",
    borderRadius: "0.9em",
    background: "#7F56D9",
    marginTop: "3.1rem",
    marginBottom: "7.7rem",
  },
  demoButtonText: {
    fontFamily: "Inter",
    fontWeight: "500",
    fontSize: "1.8",
    color: "#FFFFFF",
  },
};

export default styles;
