import React from "react";
import Divider from "./Dividers/Divider";
import Heading from "./Dividers/Heading";

const title = "Resume";

function Resume() {
  return (
    <div>
      <Divider />
      <Heading title={title} />
    </div>
  );
}

export default Resume;
