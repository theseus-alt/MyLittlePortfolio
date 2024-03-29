import React from "react";
import blendList from "./blendList";
import "./blends.scss";
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
    <div className="project" style={{ fontFamily: "Montserrat, sans-serif" }}>
      <Row className="mx-3 blendres">
        {x.map((project) => (
          <Col className="p-0" key={project.id}>
            <Card
              style={{
                background: "#def4c6",
              }}
              className="mx-1 mb-1 shadow-sm"
              inverse
            >
              <CardImg alt="Card image cap" src={project.img} top />
              <CardImgOverlay id="threed">
                <CardTitle tag="h5" id="tit">
                  {project.title}{" "}
                  <a
                    href={project.src}
                    className="text-light"
                    target="_blank"
                    rel="noreferrer"
                    style={{ backgroundColor: "transparent" }}
                  >
                    <i
                      className="fa-solid fa-up-right-from-square"
                      style={{ backgroundColor: "transparent" }}
                    ></i>
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
          // className="bg-success"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          id="button"
          style={
            isOpen
              ? { backgroundColor: "#88c0d0" }
              : { backgroundColor: "#5e81ac" }
          }
        >
          {isOpen ? "Show less" : "Show more"}
        </Button>
      </div>
    </div>
  );
}

export default Blends;
