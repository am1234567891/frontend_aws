import "./ClassCard.css";

export default function ClassCard({ title, description }) {
  return (
    <div className="class-card-container">
      <div className="title-container">
        <img
          src="https://static.toiimg.com/photo/msid-71754425/71754425.jpg?967807"
          alt="img placeholder"
          width="100"
          height="100"
        />
        <div className="title-container-content">
          <h2 className="title-container-content-classtitle">{title}</h2>
          <h5 className="title-container-content-classdesc">{description}</h5>
        </div>
      </div>
      <div className="studentview-container">
        <h3 className="content-title">Student View</h3>
        <h5 className="content-link">Start Coding</h5>
        <h5 className="content-link">My Dashboard</h5>
      </div>
      <div className="teacherview-container">
        <h3 className="content-title">Teacher View</h3>
        <button>Class Dashboard</button>
      </div>
    </div>
  );
}
