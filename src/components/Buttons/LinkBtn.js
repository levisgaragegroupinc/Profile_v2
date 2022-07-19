import React from "react";

function LinkBtn(props) {
  let i = 0;
  return (
    <>
      {props.links.map((item) => {
        i += 1;
        return (
          <li className="uk-padding-small uk-text-nowrap" key={i}>
            <a href={item.href}>{item.name}</a>
          </li>
        );
      })}
    </>
  );
}

export default LinkBtn;
