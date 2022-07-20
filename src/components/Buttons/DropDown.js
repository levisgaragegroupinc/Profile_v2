import React, { useState } from "react";

function DropDown(props) {
  let i = 0;

  return (
    <nav className="uk-padding" uk-navbar="true">
      <a
        className="uk-button uk-button-default restyle-background-01"
        href="#Project"
      >
        Project List
      </a>
      <div className="uk-navbar-dropdown restyle-background-01">
        <ul className="uk-nav uk-navbar-dropdown-nav">
          {props.list.map((item) => {
            i += 1;
            return (
              <li key={i}>
                <a className="restyle-nav-links" href={item.anchor_tag}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default DropDown;
