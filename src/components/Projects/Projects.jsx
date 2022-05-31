import React from "react";
// import "../Education/Education.css";
import "./Projects.scss";
// import projectList from "./projectList";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
  CardText,
  Button,
} from "reactstrap";

const projectList = [
  {
    title: "Smart Electricity Meter",
    desc: "Interconnected Enery meters which communicate via mobile network for regions lacking porper internet connectivity. Modules used are current sensing unit(ACS 712) and Communication unit(Node MCU ESP8266). They are connected via Arduino Uno microcontroller.",
    img: "https://i.imgur.com/D9LpF0G.png",
    src: "https://www.youtube.com/watch?v=b-arF-7SYpY",
    sub: "Innovative Product Design Project for college",
  },
  {
    title: "TicTacToe",
    desc: "A simple two player tictactoe game with aesthetic backgrounds.",
    img: "https://i.imgur.com/39eilek.png",
    src: "https://theseus-alt.github.io/TicTacToe/",
    sub: "Made using vanilla Javascript",
  },
  {
    title: "Discord Bot",
    desc: "A verified discord bot used by more than 300 servers. It is written using discord.py wrapper class. The bot lets user search information regarding different comics. Click the link below for further information",
    img: "https://i.imgur.com/XVjZZ2l.jpg",
    src: "https://discordbotlist.com/bots/nhentai-bot",
    sub: "Made using Discord.py",
  },
];

function projectfnc(x) {
  return (
    <div
      className="project"
      id="pro"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <Row className="mx-3 prores">
        {x.map((project) => (
          <Col className="p-0 mb-3 projectcol">
            <div className="hoverclass">
              <Card
                className="mx-2"
                id="card-back"
              >
                <CardImg
                  alt="Card image cap"
                  src={project.img}
                  top
                  width="100%"
                  style={{"pointerEvents":"none"}}
                />
                <CardBody style={{"backgroundColor":"#d8dee9","pointerEvents":"none"}}>
                  <CardTitle tag="h5" style={{"backgroundColor":"#d8dee9"}}>
                    {project.title}
                  </CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6" style={{"backgroundColor":"#d8dee9"}}>
                    {project.sub}
                  </CardSubtitle>
                  <CardText style={{"backgroundColor":"#d8dee9"}}>{project.desc}</CardText>
                  <Button
                    href={project.src}
                    className="d-flex justify-content-center"
                    target="_blank"
                    rel="noreferrer"
                    id="button"
                  >
                    Visit
                  </Button>
                </CardBody>
              </Card>

            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

function Projects() {
  return (
    <div>
      <h1 className="projects-head">My Projects</h1>
      <div>{projectfnc(projectList)}</div>
    </div>
  );
}

export default Projects;
