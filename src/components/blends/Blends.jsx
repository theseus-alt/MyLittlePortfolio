import React from "react";
import blendList from "./blendList";
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
  Collapse,
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

function Blends() {
  return (
    <div>
      <h1 className="projects-head">My 3D Artworks</h1>
      <div>{projectfnc(blendList)}</div>

      <Button
        color="primary"
        onClick={function noRefCheck() {}}
        style={{
          marginBottom: "1rem",
        }}
      >
        Toggle
      </Button>
      <Collapse>
        <Card>
          <CardBody>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Blends;
