import React from "react";

function StickyNav() {
  return (
    <div class="uk-section-primary uk-preserve-color">
      <div uk-sticky="start: 100; animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light">
        <nav class="uk-navbar-container">
          <div class="uk-container uk-container-expand">
            <div uk-navbar>
              <ul class="uk-navbar-nav">
                <li class="uk-active">
                  <a href="#">Active</a>
                </li>
                <li>
                  <a href="#">Parent</a>
                  <div class="uk-navbar-dropdown">
                    <ul class="uk-nav uk-navbar-dropdown-nav">
                      <li class="uk-active">
                        <a href="#">Active</a>
                      </li>
                      <li>
                        <a href="#">Item</a>
                      </li>
                      <li>
                        <a href="#">Item</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#">Item</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default StickyNav;
