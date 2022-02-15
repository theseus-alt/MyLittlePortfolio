import React from "react";
import "./Header.css";
import { Row, Col, Container } from "reactstrap";
// import dropdown from "../General.js";

function Dropdown(x) {
  return (
    <div>
      <Container>
        <Row className="dropdown-btns">
          {x.map((s) => (
            <Col className="but">
              <a href={s.src} className="btn-lnk">
                {s.Name}
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

const dropdown = [
  {
    Name: "A",
    src: "#",
  },
  {
    Name: "B",
    src: "#",
  },
  {
    Name: "C",
    src: "#",
  },
  {
    Name: "D",
    src: "#",
  },
];

function Header() {
  return (
    <div className="head">
      <div className="dropdown">
        <div>{Dropdown(dropdown)}</div>
      </div>
      <div className="intro">
        <h2> {">"} Hello world! 👋</h2>
        <h2> {">"} I'm Ritvik</h2>
      </div>
    </div>
  );
}

export default Header;
