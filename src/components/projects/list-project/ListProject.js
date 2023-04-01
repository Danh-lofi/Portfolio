import React from "react";
import ItemProject from "../item-project/ItemProject";
import "../project.scss";

const ListProject = (props) => {
  const { PROJECTS, number } = props;

  const ListProject = PROJECTS.map((project) => (
    <ItemProject
      id={project.id}
      key={project.id}
      src={project.src}
      name={project.name}
      desc={project.desc}
      linkDemo={project.linkDemo}
      linkGithub={project.linkGithub}
      video={project.video}
    />
  ));
  return <div className="list-project">{ListProject}</div>;
};

export default ListProject;
