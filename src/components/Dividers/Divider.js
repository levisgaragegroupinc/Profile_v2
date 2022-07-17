import React from "react";

function TitleDivider(props) {
  return (
    <>
      <hr className="uk-divider-icon uk-padding restyle-divider"></hr>
      <h2
        className="uk-h2 re-h2 uk-padding-large uk-padding-remove-bottom uk-padding-remove-top"
        id="about"
      >
        {props.title}
      </h2>
    </>
  );
}

export default TitleDivider;
