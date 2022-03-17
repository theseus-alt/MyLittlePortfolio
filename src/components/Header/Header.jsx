import React from "react";
// import { useEffect, useState } from "react";
import "./Header.css";
import { Row, Col, Container } from "reactstrap";
// import dropdown from "../General.js";

const dropdown = [
  {
    Name: "About Me",
    src: "#about",
  },
  {
    Name: "Education",
    src: "#edu",
  },
  {
    Name: "What I do",
    src: "#wht",
  },
  {
    Name: "Projects",
    src: "#pro",
  },
  { Name: "3D Artworks", src: "#3d" },
  { Name: "Contact Me", src: "#con" },
];

function Dropdown(x) {
  return (
    <Row className="dropdown-btns" id="drop">
      {x.map((s) => (
        <Col className="but">
          <a href={s.src} className="btn-lnk">
            {s.Name}
          </a>
        </Col>
      ))}
    </Row>
  );
}

// function HandleScroll() {
//   const [offset, setOffset] = useState(0);

//   useEffect(() => {
//     const onScroll = () => setOffset(window.pageYOffset);
//     // clean up code
//     window.removeEventListener("scroll", onScroll);
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);
//   // document.getElementsByClassName("dropdown-btns")[0].style.display = "none";
//   // console.log(offset);
//   if (offset > 400) {
//     // console.log(offset);
//     // document.getElementById("drop").style.display = "flex";
//   } else {
//     // document.getElementsByClassName("dropdown-btns")[0].style.display = "flex";
//     // document.getElementById("drop").style.display = "none";
//   }
// }

function Header() {
  return (
    <div className="head m-0">
      <div
      // onScroll={HandleScroll()}
      >
        {Dropdown(dropdown)}
      </div>

      <div className="intro">
        <Container>
          <h2> {">"} Hello world! 👋</h2>
          <h2> {">"} I'm Ritvik</h2>
        </Container>
      </div>
    </div>
  );
}

export default Header;
