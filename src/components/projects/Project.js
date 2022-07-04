import React from "react";
import ListProject from "./list-project/ListProject";
import "./project.scss";
const Project = (props) => {
  return (
    <div className="project">
      <div className="project__container">
        <h3 className="project__header">
          My <span className="project__header__ef">Project</span>
        </h3>
        <div className="project__list">
          <ListProject />
        </div>
      </div>
    </div>
  );
};

export default Project;
