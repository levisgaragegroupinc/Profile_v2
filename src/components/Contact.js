import React, { useState } from "react";
import TitleDivider from "./Dividers/Divider";
import Form from "./Contact/form";

const title = "Contact";

function Contact() {
  return (
    <div className="uk-padding">
      <TitleDivider title={title} />
      <Form />
    </div>
  );
}

export default Contact;
