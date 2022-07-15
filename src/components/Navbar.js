import React, { useState } from "react";

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
            <li>
              <a className="restyle-nav-links" href="#">
                Projects
              </a>
              <div className="uk-navbar-dropdown restyle-background-01">
                <ul className="uk-nav uk-navbar-dropdown-nav">
                  <li>
                    <a className="restyle-nav-links" href="#techblog">
                      Technology Blog
                    </a>
                  </li>
                  <li>
                    <a className="restyle-nav-links" href="#knickknacks">
                      KnickKnacks
                    </a>
                  </li>
                  <li>
                    <a className="restyle-nav-links" href="#weather">
                      Weather
                    </a>
                  </li>
                  <li>
                    <a className="restyle-nav-links" href="#quiz">
                      Quiz
                    </a>
                  </li>
                  <li>
                    <a className="restyle-nav-links" href="#translation">
                      Translation
                    </a>
                  </li>
                  <li>
                    <a className="restyle-nav-links" href="#notes">
                      Notes
                    </a>
                  </li>
                </ul>
              </div>
            </li>
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
