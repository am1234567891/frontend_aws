import React from "react";
import "./Feature.css";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function Feature() {
  React.useEffect(() => {
    let feature1 = document.querySelector(".scrollingImage1"),
      feature2 = document.querySelector(".scrollingImage2"),
      feature3 = document.querySelector(".scrollingImage3");
    let firstFeature = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          feature1.style.opacity = 1;
          feature2.style.opacity = 0;
          feature3.style.opacity = 0;
        }
      },
      { threshold: 1.0, root: null }
    );

    firstFeature.observe(document.querySelector(".feature1"));

    let secondFeature = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          feature1.style.opacity = 0;
          feature2.style.opacity = 1;
          feature3.style.opacity = 0;
        }
      },
      { threshold: 1.0 }
    );

    secondFeature.observe(document.querySelector(".feature2"));

    let thirdFeature = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          feature1.style.opacity = 0;
          feature2.style.opacity = 0;
          feature3.style.opacity = 1;
        }
      },
      { threshold: 1.0 }
    );

    thirdFeature.observe(document.querySelector(".feature3"));
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }}>
      <div className="scroll-container">
        <div className="scroll-area">
          <div className="features">
            <h1 className="feature1" style={{ color: "#262338" }}>
              Feature # 1
            </h1>
            <div>
              <Typography variant="p" sx={{ fontFamily: "'Poppins', sans-serif", color: "#262338" }}>
                Excepteur commodo consequat elit cupidatat laboris qui commodo fugiat do dolor deserunt non. Cillum pariatur ad
                quis ea ut eu voluptate cupidatat. Labore est amet occaecat aute esse enim fugiat amet proident non. In
                reprehenderit quis officia proident proident aliqua mollit culpa commodo culpa cupidatat. Tempor reprehenderit
                magna tempor exercitation quis tempor exercitation culpa magna mollit consequat sunt ex aliqua. Id veniam sunt non
                sit eiusmod ad fugiat tempor mollit veniam.
              </Typography>
            </div>
          </div>
          <div className="features">
            <h1 className="feature2" style={{ color: "#262338" }}>
              Feature # 2
            </h1>
            <div>
              <Typography variant="p" sx={{ fontFamily: "'Poppins', sans-serif", color: "#262338" }}>
                Ullamco eu enim aute amet nulla in incididunt adipisicing incididunt aute. Officia fugiat consectetur labore aute
                reprehenderit tempor ut enim tempor. Adipisicing cillum incididunt nostrud minim incididunt deserunt commodo
                proident. Irure occaecat cillum anim exercitation Lorem occaecat. Cillum non velit ea occaecat laborum ea ipsum
                reprehenderit. Proident duis excepteur dolor tempor eu deserunt aute magna proident ad id occaecat aliquip. Duis
                nulla elit ullamco consectetur ullamco veniam.
              </Typography>
            </div>
          </div>
          <div className="features">
            <h1 className="feature3" style={{ color: "#262338" }}>
              Feature # 3
            </h1>
            <div>
              <Typography variant="p" sx={{ fontFamily: "'Poppins', sans-serif", color: "#262338" }}>
                Culpa non non quis in ea nisi veniam consequat id dolore. Dolore esse laborum qui ea excepteur. Nisi non do esse
                anim voluptate enim ad anim eu nostrud officia ad excepteur elit. Consequat duis voluptate cillum esse.
              </Typography>
            </div>
          </div>
        </div>
        <div className="scroll-image-area">
          <div className="moving-image">
            <img src={img1} alt="" className="featureImage scrollingImage1" />
            <img src={img2} alt="" className="featureImage scrollingImage2" />
            <img src={img3} alt="" className="featureImage scrollingImage3" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
