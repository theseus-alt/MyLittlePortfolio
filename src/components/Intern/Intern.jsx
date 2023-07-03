import React from "react";
import "./Intern.scss";
import iitm from "../assets/intern1.png";
import drdo from "../assets/intern2.png";
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
    pic: iitm,
    place: "Indian Institute of Technology, Bombay",
    city: "Mumbai  ",
    duration: "  June-July 2022",
    description:
      "I have worked under Prof. Amit Singh and Prof. Sushil Kumar in IIT Bombay on the topic of “Microstructure evolution and modeling the stress response of Ti-6Al-4V alloy during low cycle fatigue”. In my time there, I developed an interest in various manufacturing processes and technologies used in research and production.",
    learned:
      "I worked with various manufaturing equipments and processes including cutting using wire edm and rotating mechanical polisher. The primary equipment we used for testing is Axial Fatigue System. Read the full report ",
    rep: "https://docs.google.com/document/d/1fHXIdOZS-QLUtlkrLItH7w0EzSFILGu5-J10c0fqmVI/edit?usp=sharing",
  },
  {
    id: 0,
    pic: drdo,
    place: "Centre for Fire, Explosive and Environment Safety, DRDO",
    city: "Delhi  ",
    duration: "  June-July 2023",
    description:
      "In one month of on-site training at the institute, I studied about blast waves, their impact and how to minimise their effects. I also performed detailed simulations on ANSYS software using explicit dynamics and autodyn.",
    learned:
      "I learned about the physics of explosion and explosives along with a detailed study in blast waves and it's impact using computer simulations which were performed using Autodyn. Read the full report ",
    rep: "https://docs.google.com/document/d/179A9F8y3h7D2x2fT8sLbTECGbSyDENGeDNZdNXTswys/edit?usp=sharing",
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
            src={item.pic}
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
