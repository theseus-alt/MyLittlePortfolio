import React from "react";
import "./Education.css";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import uiet from "../assets/uiet.png";
import cms from "../assets/cms.jpg";
import spc from "../assets/spc.png";

function Education() {
  return (
    <div style={{ fontFamily: "Montserrat, sans-serif" }}>
      <h1 id="edu">My Education</h1>
      {/* <div> */}
      <Card className="mb-5 mx-5 d-flex flex-row edu">
        <div className="image">
          <img src={uiet} height={"200px"} width={"200px"} alt="" />
        </div>
        <CardBody className="p-lg-4 d-flex align-items-center">
          <div>
            <CardTitle tag="h4">
              University Institute of Engineering {"&"} Technology{"  "}
              <a
                href="https://uiet.puchd.ac.in/"
                className="text-muted"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-solid fa-up-right-from-square"></i>
              </a>
            </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h5">
              Panjab University, Chandigarh
            </CardSubtitle>
            <hr />
            <CardSubtitle className="mt-3" tag="h5">
              2020 - Present
            </CardSubtitle>
          </div>
        </CardBody>
      </Card>
      <Card className="mb-5 mx-5 d-flex flex-row edu">
        <div>
          <img src={cms} height={"200px"} width={"200px"} alt="" />
        </div>
        <CardBody className="p-4 d-flex align-items-center">
          <div>
            <CardTitle tag="h4">
              City Montessori School{" "}
              <a
                href="http://www.cmseducation.org/"
                className="text-muted"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-solid fa-up-right-from-square"></i>
              </a>
            </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h5">
              Gomtinagar 1, Lucknow
            </CardSubtitle>
            <hr />
            <CardSubtitle className="mt-3" tag="h5">
              2016-2020
            </CardSubtitle>
          </div>
        </CardBody>
      </Card>
      <Card className="mb-5 mx-5 d-flex flex-row edu">
        <div>
          <img src={spc} alt="" />
        </div>
        <CardBody className="p-4 d-flex align-items-center">
          <div>
            <CardTitle tag="h4">
              St. Peter's College{" "}
              <a
                href="https://www.stpetersagra.org/"
                className="text-muted"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-solid fa-up-right-from-square"></i>
              </a>
            </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h5">
              Agra
            </CardSubtitle>
            <hr />
            <CardSubtitle className="mt-3" tag="h5">
              2012-2016
            </CardSubtitle>
            {/* <Button>Button</Button> */}
          </div>
        </CardBody>
      </Card>

      {/* </div> */}
    </div>
  );
}

export default Education;
