import React from "react";
import Divider from "./Dividers/Divider";
import Heading from "./Dividers/Heading";
import pdf from "../assets/Resume-01.pdf";
let imagePath = require(`../assets/resume-img.png`);
const title = "Resume";

function Resume() {
  return (
    <div>
      <Divider />
      <Heading title={title} />
      <a href={pdf} target="_blank" rel="noreferrer">
        <img src={imagePath} alt="Resume."></img>
      </a>
    </div>
  );
}

export default Resume;
