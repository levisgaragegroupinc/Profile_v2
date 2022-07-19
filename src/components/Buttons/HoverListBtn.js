import React from "react";

function HoverListBtn(props) {
  let i = 0;

  return (
    <li>
      <a className="restyle-nav-links" href="#Project">
        Projects
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
    </li>
  );
}

export default HoverListBtn;
