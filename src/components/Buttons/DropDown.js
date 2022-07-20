import React from "react";

function DropDown(props) {
  let i = 0;

  return (
    <nav className="uk-padding" uk-navbar="true">
      <a
        className="uk-button uk-button-default restyle-background-01 restyle-nav-links"
        href="#Project"
      >
        {props.btnLabel}
      </a>
      <div className="uk-navbar-dropdown restyle-background-01">
        <ul className="uk-nav uk-navbar-dropdown-nav">
          {props.projectData.map((project) => {
            i += 1;
            let anchor = "#" + project.anchor_tag;
            return (
              <li key={i}>
                <a className="restyle-nav-links" href={anchor}>
                  {project.project_title}
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
