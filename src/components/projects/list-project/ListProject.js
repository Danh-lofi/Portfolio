import React from "react";
import ItemProject from "../item-project/ItemProject";
import "../project.scss";
import donpeppe from "../../../assets/img/donpeppe.png";
import tmovie from "../../../assets/img/tmovie.png";
import setsail from "../../../assets/img/setsail.png";
import donppepeVideo from "../../../assets/video/donpeppe_video.mp4";
import setsailVideo from "../../../assets/video/setsail_video.mp4";
import tmovieVideo from "../../../assets/video/tmovie_video.mp4";

const PROJECTS = [
  {
    id: "01",
    name: "Don Peppe",
    src: donpeppe,
    desc: "This online pizza ordering website helps users freely choose their favorite dishes. It also has a filter feature to help them find food more easily and conveniently. Moreover, every dish is updated with the shopping cart",
    linkGithub: "https://github.com/Danh-lofi/DonPeppe",
    linkDemo: "https://donpeppe-clone-ab92e.web.app/",
    video: donppepeVideo,
  },
  {
    id: "02",
    name: "TMovie",
    src: tmovie,
    desc: "This online pizza ordering website helps users freely choose their favorite dishes. It also has a filter feature to help them find food more easily and conveniently. Moreover, every dish is updated with the shopping cart",
    linkGithub: "https://github.com/Danh-lofi/TMovie",
    linkDemo: "https://tmovie-36680.web.app/",
    video: tmovieVideo,
  },
  {
    id: "03",
    name: "SetSail",
    src: setsail,
    desc: "This online pizza ordering website helps users freely choose their favorite dishes. It also has a filter feature to help them find food more easily and conveniently. Moreover, every dish is updated with the shopping cart",
    linkGithub: "https://github.com/Danh-lofi/SetSail",
    linkDemo: "https://danh-lofi.github.io/SetSail/",
    video: setsailVideo,
  },
];
const ListProject = (props) => {
  const ListProject = PROJECTS.map((project) => (
    <ItemProject
      id={project.id}
      key={project.key}
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
