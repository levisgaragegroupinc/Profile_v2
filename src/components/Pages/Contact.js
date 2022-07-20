import React, { useState } from "react";
import Divider from "../Dividers/Divider";
import Heading from "../Dividers/Heading";
import Form from "../Contact/form";

const title = "Contact";

function Contact() {
  return (
    <div className="uk-padding uk-flex uk-flex-column">
      <Divider />
      <div className="uk-margin-auto">
        <Heading title={title} />
      </div>
      <Form />
    </div>
  );
}

export default Contact;
