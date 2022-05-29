import React from "react";
import "./About.scss"; 
// import aboutme from "../General.js";

function About() {
  return (
    <div>
      <h1>About me</h1>
      <p className="paras">
        A passionate <span>web developer</span> experienced in working with
        latest technologies like React.js and is enthisiastic to learn something
        new everyday. I am also adept in coding <span>Bots in Discord</span>{" "}
        using Libraries such as Discord.py and py-cord. Being a{" "}
        <span>Mechanical engineer</span>, I also take a leisure interest in{" "}
        <span>3d modelling</span> and art.
      </p>
    </div>
  );
}

export default About;
