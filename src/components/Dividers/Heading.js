import React from "react";

function Heading(props) {
  return (
    <>
      <h2 className="uk-h2 re-h2 uk-padding-large uk-padding-remove-bottom uk-padding-remove-top">
        {props.title}
      </h2>
    </>
  );
}

export default Heading;
