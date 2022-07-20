import React from "react";
import Divider from "../Dividers/Divider";
import Heading from "../Dividers/Heading";
import resumePdf from "../../assets/Resume-01.pdf";
let imagePath = require(`../../assets/resume-img.png`);
const title = "Resume";

const listname = "Stack Experience";
const stacklist = [
  "HTML",
  "CSS",
  "Javascript",
  "React",
  "JQuery",
  "Handlebars",
  "Express",
  "Node",
  "MySQL",
  "JAWS DB",
  "MongoDB",
  "GraphQL",
];

function Resume() {
  return (
    <div>
      <div className="uk-flex uk-flex-column uk-flex-middle">
        <h3 className="uk-padding-small uk-margin-remove">{listname}</h3>
        <ul className="uk-align-center uk-flex uk-flex-wrap uk-flex-center">
          {stacklist.map((code) => {
            return <li className="uk-padding-small">{code}</li>;
          })}
        </ul>
      </div>
      <Divider />
      <Heading title={title} />
      <div className="uk-flex uk-flex-center">
        <a
          aria-label="Download resume"
          href={resumePdf}
          target="_blank"
          rel="noreferrer"
          uk-icon="icon: download; ratio: 2"
        ></a>
      </div>
      <div className="uk-flex uk-flex-center">
        <a href={resumePdf} target="_blank" rel="noreferrer">
          <img src={imagePath} alt="Resume."></img>
        </a>
      </div>
    </div>
  );
}

export default Resume;
