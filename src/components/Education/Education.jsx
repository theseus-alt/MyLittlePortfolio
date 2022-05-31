import React from "react";
import "./Education.scss";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import uiet from "../assets/uiet.png";
import cms from "../assets/cms.jpg";
import spc from "../assets/spc.png";

const edu=[
  {
    title:"University Institute of Engineering & Technology",
    subtitle:"Panjab University, Chandigarh",
    img:uiet,
    time:"2020 - Present"
  },
  {
    title:"City Montessori School",
    subtitle:"GomtiNagar, Lucknow",
    img:cms,
    time:"2015 - 2020"
  },
  {
    title:"St. Peter's College",
    subtitle:"Agra",
    img:spc,
    time:"2012- 2015"
  },
]

function Education() {
  return (
    <div style={{ fontFamily: "Montserrat, sans-serif" }}>
      <h1 id="edu">My Education</h1>
      {/* <div> */}
      {edu.map((item)=>(
        <Card className="mb-5 mx-5 d-flex flex-row edu" style={{"backgroundColor":"#d8dee9"}}>
        <div className="image">
          <img src={item.img} height={"200px"} width={"200px"} alt="" style={{"backgroundColor":"#d8dee9"}}/>
        </div>
        <CardBody className="p-lg-4 d-flex align-items-center edudetails" style={{"backgroundColor":"#d8dee9"}}>
          <div style={{"backgroundColor":"#d8dee9"}}>
            <CardTitle tag="h4" style={{"backgroundColor":"#d8dee9"}}>
              {item.title}
              <a
                href="https://uiet.puchd.ac.in/"
                className="text-muted"
                target="_blank"
                rel="noreferrer"
                style={{"backgroundColor":"#d8dee9"}}
              >
                <i class="fa-solid fa-up-right-from-square" style={{"backgroundColor":"#d8dee9"}}></i>
              </a>
            </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h5" style={{"backgroundColor":"#d8dee9"}}>
              {item.subtitle}
            </CardSubtitle>
            <hr />
            <CardSubtitle className="mt-3" tag="h5" style={{"backgroundColor":"#d8dee9"}}>
              {item.time}
            </CardSubtitle>
          </div>
        </CardBody>
      </Card>
      ))}
      
      

      {/* </div> */}
    </div>
  );
}

export default Education;
