import React, { useState } from "react";
import Divider from "./Dividers/Divider";
import Heading from "./Dividers/Heading";

const title = "About";

function About() {
  return (
    <div>
      <Divider />
      <Heading title={title} />
      <p>Hello About Me</p>
    </div>
  );
}

export default About;
