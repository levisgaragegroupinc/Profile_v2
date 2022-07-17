import React, { useState } from "react";
import TitleDivider from "./Dividers/Divider";

const title = "About";

function About() {
  return (
    <div>
      <TitleDivider title={title} />
      <p>Hello About Me</p>
    </div>
  );
}

export default About;
