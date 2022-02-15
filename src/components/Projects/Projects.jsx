import React from "react";
import projectList from "./projectList";
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

function projectfnc(x) {
  return (
    <div className="project">
      <Row>
        {x.map((project) => (
          <Col>
            <Card className="project-card" style={{ background: "#def4c6" }}>
              <CardImg
                alt="Card image cap"
                src={project.img}
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5" color="red">
                  {project.title}
                </CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Card subtitle
                </CardSubtitle>
                <CardText>{project.desc}</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
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
