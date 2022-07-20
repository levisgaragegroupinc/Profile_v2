import React from "react";
import Card from "../Projects/Card";
import projectPortfolio from "../Projects/Data";
import Divider from "../Dividers/Divider";
import Heading from "../Dividers/Heading";
import DropDown from "../Buttons/DropDown";

const title = "Projects";
const labelBtnDropdown = "Project List";

function Projects() {
  return (
    <div>
      <Divider />
      <Heading title={title} />
      <DropDown btnLabel={labelBtnDropdown} projectData={projectPortfolio} />
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
