import React from "react";
import "./Header.css";
import { Row, Col, Container } from "react-bootstrap";
import dropdown from "../General.js";

function Dropdown(x) {
  return (
    <div>
      <Container>
        <Row className="dropdown-btns">
          {x.map((s) => (
            <a href={s.src} className="a">
              <Col style={{ maxWidth: "100%" }}>{s.Name}</Col>
            </a>
          ))}
        </Row>
      </Container>
    </div>
  );
}

function Header() {
  return (
    <div className="head">
      <div className="dropdown">
        <Container fluid>{Dropdown(dropdown)}</Container>
      </div>
      <div className="intro">
        <h2> {">"} Hello world! 👋</h2>
        <h2> {">"} I'm Ritvik</h2>
      </div>
    </div>
  );
}

export default Header;
