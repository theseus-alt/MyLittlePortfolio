import React from "react";
import "./About.css";
// import aboutme from "../General.js";

const aboutme =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsa est impedit voluptatem, eligendi itaque perferendis. Pariatur voluptatem expedita aut necessitatibus, reiciendis neque accusantium aliquam molestias deserunt numquam itaque magnam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsa est impedit voluptatem, eligendi itaque perferendis. Pariatur voluptatem expedita aut necessitatibus, reiciendis neque accusantium aliquam molestias deserunt numquam itaque magnam.";

function About() {
  return (
    <div>
      <h1 className="about-head">About me</h1>
      <p className="about-disc">{aboutme}</p>
    </div>
  );
}

export default About;
