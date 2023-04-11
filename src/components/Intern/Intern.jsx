import React from "react";
import "./Intern.scss";
import iitm from "../assets/intern1.png";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
} from "reactstrap";

const interns = [
  {
    id: 0,
    place: "Indian Institute of Technology, Bombay",
    city: "Mumbai  ",
    duration: "  June-July 2022",
    description:
      "I have worked under Prof. Amit Singh and Prof. Sushil Kumar in IIT Bombay on the topic of “Microstructure evolution and modeling the stress response of Ti-6Al-4V alloy during low cycle fatigue”. In my time there, I developed an interest in various manufacturing processes and technologies used in research and production.",
    learned:
      "I worked with various manufaturing equipments and processes including cutting using wire edm and rotating mechanical polisher. The primary equipment we used for testing is Axial Fatigue System. Read the full report ",
    rep: "https://docs.google.com/document/d/1fHXIdOZS-QLUtlkrLItH7w0EzSFILGu5-J10c0fqmVI/edit?usp=sharing",
  },
];

function Intern() {
  return (
    <div style={{ fontFamily: "Montserrat, sans-serif" }}>
      <h1 id="int">Internships and Trainings</h1>
      {interns.map((item) => (
        <Card className="mb-3 mx-5" key={item.id}>
          <CardImg
            alt="Card image cap"
            src={iitm}
            style={{
              height: 180,
            }}
            top
            width="100%"
            className="internimg"
          />
          <CardBody id="card-back">
            <CardTitle tag="h5" id="card-back">
              {item.place}
            </CardTitle>
            <CardSubtitle className="text-muted mb-2" id="card-back">
              {item.city}
              <span className="dot text-muted"></span>
              {item.duration}
            </CardSubtitle>
            <CardText id="card-back">{item.description}</CardText>
            <CardSubtitle className="text-muted mb-2 h5" id="card-back">
              What I learned
            </CardSubtitle>
            <CardText id="card-back">
              {item.learned}
              <a id="card-back" href={item.rep}>
                here.
              </a>
            </CardText>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

export default Intern;
