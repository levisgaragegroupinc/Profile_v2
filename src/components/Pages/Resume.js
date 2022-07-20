import React from "react";
import Divider from "../Dividers/Divider";
import Heading from "../Dividers/Heading";
import resumePdf from "../../assets/Resume-01.pdf";
let imagePath = require(`../../assets/resume-img.png`);
const title = "Resume";

function Resume() {
  return (
    <div>
      <Divider />
      <Heading title={title} />
      <div className="uk-flex uk-flex-center">
        <a
          href={resumePdf}
          target="_blank"
          rel="noreferrer"
          uk-icon="icon: download; ratio: 2"
        ></a>
      </div>
      <a href={resumePdf} target="_blank" rel="noreferrer">
        <img src={imagePath} alt="Resume."></img>
      </a>
    </div>
  );
}

export default Resume;
