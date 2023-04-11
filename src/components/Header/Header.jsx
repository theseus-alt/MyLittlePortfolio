import React from "react";
// import { useEffect, useState } from "react";
import "./Header.scss";
import { Row, Col, Container } from "reactstrap";
// import dropdown from "../General.js";

const dropdown = [
  {
    id: 0,
    Name: "About Me",
    src: "#about",
  },
  {
    id: 1,
    Name: "Education",
    src: "#edu",
  },
  {
    id: 2,
    Name: "What I do",
    src: "#wht",
  },
  {
    id: 3,
    Name: "Internships",
    src: "#int",
  },
  {
    id: 4,
    Name: "Projects",
    src: "#pro",
  },
  {
    id: 5,
    Name: "3D Artworks",
    src: "#3d",
  },
  {
    id: 6,
    Name: "Contact Me",
    src: "#con",
  },
];

function Dropdown(x) {
  return (
    <Row className="dropdown-btns" id="drop">
      {x.map((s) => (
        <Col className="but" key={s.id}>
          <a href={s.src} className="btn-lnk">
            {s.Name}
            {/* {window.scrollBy(0, -500)} */}
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
        <Container id="cont">
          <h2> {">"} Hi there! 👋</h2>
          <h2> {">"} I'm Ritvik</h2>
        </Container>
      </div>
    </div>
  );
}

export default Header;
