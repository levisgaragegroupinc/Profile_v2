import React, { useState } from "react";
import HoverListBtn from "./Buttons/HoverListBtn";

const projectList = [
  {
    title: "Technology Blog",
    anchor_tag: "#techblog",
  },
  {
    title: "KnickKnacks",
    anchor_tag: "#knickknacks",
  },
  {
    title: "Weather",
    anchor_tag: "#weather",
  },
  {
    title: "Quiz",
    anchor_tag: "#quiz",
  },
  {
    title: "Translation",
    anchor_tag: "#translation",
  },
  {
    title: "Notes",
    anchor_tag: "#notes",
  },
];

function NavBar() {
  return (
    <>
      <nav
        className="uk-navbar-container restyle-background-01"
        uk-navbar="true"
        uk-sticky="true"
      >
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li className="uk-active">
              <a className="restyle-links-active" uk-icon="home" href="#"></a>
            </li>
            <HoverListBtn list={projectList} />
            <li>
              <a
                className="restyle-nav-links"
                href="./public/files/resume-tlb-2022v2.pdf"
                target="_blank"
              >
                resume
              </a>
            </li>
            <li>
              <a className="restyle-nav-links" href="#about">
                about
              </a>
            </li>
            <li>
              <a
                className="restyle-nav-links"
                uk-toggle="target: #offcanvas-usage"
              >
                contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      ;
    </>
  );
}

export default NavBar;
