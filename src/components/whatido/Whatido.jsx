import React from "react";
// import CIcon from "@coreui/icons-react";
import "../About/About.css";
import "./whatido.css";

const icons = [
  "fa-java",
  "fa-js-square",
  "fa-react",
  "fa-python",
  "fa-html5",
  "fa-css3",
  "fa-sass",
  "fa-bootstrap",
  "fa-android",
  "fa-figma",
  "fa-node-js ",
];
const pre = "h1 mx-4 fa-brands ";

function Whatido() {
  return (
    <div id="wht">
      <h1>What I do</h1>
      <p className="paras">
        I started learning and working with <span>Java</span> when I was in
        highschool. It was my first encounter with the world of programming.
        After graduating from highschool, I started polishing my skills with{" "}
        <span>web development</span> . Shortly after I started developing an
        interest in python and bot development.
        <br />
        Following are the technologies I have knowledge about and have worked in
        the past.
      </p>
      <div className="d-flex mx-4 justify-content-center k">
        {icons.map((icon) => (
          <i class={pre + icon} id="icon"></i>
        ))}
        {/* <CIcon name="cilAccessibility" size="sm"></CIcon> */}
      </div>
    </div>
  );
}

export default Whatido;
