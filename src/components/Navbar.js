import React from "react";
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

function NavBar({ currentPage, handlePageChange }) {
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
              <a
                uk-icon="home"
                href="#Project"
                onClick={() => handlePageChange("Project")}
                className={
                  currentPage === "Project"
                    ? "restyle-nav-01"
                    : "restyle-nav-links"
                }
              ></a>
            </li>
            <HoverListBtn list={projectList} />
            <li>
              <a
                href="#resume"
                onClick={() => handlePageChange("Resume")}
                className={
                  currentPage === "Resume"
                    ? "restyle-nav-01"
                    : "restyle-nav-links"
                }
              >
                resume
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => handlePageChange("About")}
                className={
                  currentPage === "About"
                    ? "restyle-nav-01"
                    : "restyle-nav-links"
                }
              >
                about
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => handlePageChange("Contact")}
                className={
                  currentPage === "Contact"
                    ? "restyle-nav-01"
                    : "restyle-nav-links"
                }
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
