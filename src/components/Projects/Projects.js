import React from "react";
import Card from "./Card";
import projectPortfolio from "./Data";
import TitleDivider from "../Dividers/Divider";

const title = "Projects";

function Projects() {
  return (
    <div>
      <TitleDivider title={title} />
      <div
        className="restyle-background-muted uk-padding-large uk-child-width-1-2@m uk-child-width-1-3@xl"
        id="project-section"
        uk-grid="true"
      >
        {projectPortfolio.map((project, index) => {
          return <Card key={index} data={project} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
