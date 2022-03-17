import React from "react";
import blendList from "./blendList";
import "./blends.css";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Row,
  Col,
  Button,
  Collapse,
} from "reactstrap";

function projectfnc(x) {
  return (
    <div
      className="project"
      id="3d"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <Row className="mx-3 blendres">
        {x.map((project) => (
          <Col className="p-0">
            <Card
              style={{
                background: "#def4c6",
              }}
              className="mx-1 mb-1 shadow-sm"
              inverse
            >
              <CardImg alt="Card image cap" src={project.img} top />
              <CardImgOverlay>
                <CardTitle tag="h5">
                  {project.title}{" "}
                  <a
                    href={project.src}
                    className="text-light"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="fa-solid fa-up-right-from-square"></i>
                  </a>
                </CardTitle>
              </CardImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

function Blends() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <h1 className="projects-head">My 3D Artworks</h1>
      <div>{projectfnc(blendList[0])}</div>

      <Collapse isOpen={isOpen}>
        <div>{projectfnc(blendList[1])}</div>
        <div>{projectfnc(blendList[2])}</div>
      </Collapse>
      <div className="d-flex justify-content-center">
        <Button
          className="bg-success"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          style={{
            marginBottom: "1rem",
          }}
        >
          {isOpen ? "Show less" : "Show more"}
        </Button>
      </div>
    </div>
  );
}

export default Blends;
