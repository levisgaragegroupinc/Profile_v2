import React from "react";
import Divider from "../Dividers/Divider";
import Heading from "../Dividers/Heading";
import profileImg from "../../assets/profile_01.png";

const title = "About";

function About() {
  return (
    <div>
      <Divider />
      <Heading title={title} />
      <div className="uk-section uk-section-default">
        <div className="uk-container">
          <h3>Travis L Bates</h3>
          <div
            className="uk-flex uk-flex-wrap uk-grid-match uk-child-width-1-3@m"
            uk-grid="true"
          >
            <div className="k-width-1-3 uk-padding-small">
              <p>
                I have worked for METER Group Inc, USA for 10+ years. I started
                with METER in 2007 as a part-time marketing intern while at
                Washington State University (WSU). After earning my degree I
                returned to farming with my family.
              </p>
            </div>
            <div className="k-width-1-3 uk-padding-small">
              <p>
                Since returing to work for METER I have had many roles
                including: Manufacturing Assembler, Market Research Intern,
                Technical Sales Specialist, Product Owner, and Client Success
                Manager.
              </p>
            </div>
            <div className="k-width-1-3 uk-padding-small">
              <p>
                What enjoy most about my work is the opportunities to learn new
                skills and apply them. The programming team at METER is who
                inspired me to pursue web development at the University of
                Washington (UW).
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="uk-flex uk-flex-center">
        <div>
          <div className="uk-inline">
            <img
              className="uk-border-circle"
              src={profileImg}
              alt="Travis Bates profile headshot."
            ></img>
            <div className="dark uk-overlay uk-light uk-position-bottom-center uk-border-pill uk-padding-remove-bottom uk-padding-remove-top">
              <p className="white">
                Photo by:
                <a
                  className=""
                  href="https://www.behance.net/nickfrank"
                  target="_blank"
                  rel="noreferrer"
                >
                  Nick Frank
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
