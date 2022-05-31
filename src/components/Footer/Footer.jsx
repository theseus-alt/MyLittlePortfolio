import React from "react";
import "./footer.scss";
import { List, ListInlineItem } from "reactstrap";

const icons = [
  {
    icon:"fa-brands fa-twitter",
    src:"https://twitter.com/RitvikGupta01"
  },
  {
    icon: "fa-brands fa-github",
    src: "https://github.com/theseus-alt"
  },
  {
    icon: "fa-brands fa-linkedin",
    src: "https://www.linkedin.com/in/ritvik-gupta-a6196a1bb/",
  },
  {
    icon: "fa-brands fa-artstation",
    src: "https://www.artstation.com/th3seus",
  },
  { icon: "fa-solid fa-at", src: "mailto:ritvikgupta75@gmail.com" },
  {
    icon: "fa-brands fa-instagram",
    src: "https://www.instagram.com/ritvikgupta2/",
  },
  {
    icon: "fa-brands fa-hackerrank",
    src: "https://www.hackerrank.com/ritvikg02",
  },
  // { icon: "cib-leetcode", src: "#" },
];

function Footer() {
  return (
    <div className="footer" id="con">
      <h1 style={{"backgroundColor":"transparent"}}>Find me here!</h1>
      <List
        type="inline"
        className="d-flex justify-content-center mb-5 mt-3 align-items-center l"
        style={{"backgroundColor":"transparent"}}
      >
        {icons.map((x) => (
          <ListInlineItem style={{"backgroundColor":"transparent"}}>
            <a href={x.src} target="_blank" rel="noreferrer" style={{"backgroundColor":"transparent"}}>
              <i class={x.icon} id="footicon" style={{"backgroundColor":"transparent"}}></i>
            </a>
          </ListInlineItem>
        ))}
        <ListInlineItem style={{"backgroundColor":"transparent"}}>
          <button className="disc" style={{"backgroundColor":"transparent"}}>
            <i
              class="fa-brands fa-discord"
              onClick={() => {
                navigator.clipboard.writeText("Theseus#7429");
                alert("Discord tag copied!");
              }}
              style={{"backgroundColor":"transparent"}}
            ></i>
          </button>
        </ListInlineItem>
      </List>
    </div>
  );
}

export default Footer;
