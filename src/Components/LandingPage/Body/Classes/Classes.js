import ClassCard from "./ClassCard/ClassCard";
import ClassesTooltip from "./ClassesTooltip/ClassesTooltip";
import { motion } from "framer-motion";
import "./Classes.css";

export default function Classes() {
  const classesSetcionTitle = [
    {
      1: "Creative Coding - Period 4",
      2: "0 Students • Creative Coding 1 Preview",
    },
    {
      1: "some coding Class",
      2: "X students • Creative Coding 1",
    },
    {
      1: "Period X: Creative Coding 1",
      2: "X students • Creative Coding 2",
    },
    {
      1: "Period 5: Creative Coding 2",
      2: "6 students • Creative Coding 1",
    },
  ];

  const classSection = classesSetcionTitle.map((title, index) => (
    <ClassCard key={index} title={title[1]} description={title[2]} />
  ));

  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }}>
      <div className="classes-section">
        <div className="classes-container">
          <div className="thirdSectionForm">
            <div className="classes-container-label">
              <h1 className="classes-container-title">Classes</h1>
              <button className="classes-container-titlebutton">New Class</button>
            </div>
            <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 100 }} transition={{ duration: 0.5 }}>
              <ClassesTooltip />
            </motion.div>
            <div className="classes-display-container">{classSection}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
