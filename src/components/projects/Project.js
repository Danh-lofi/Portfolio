import React, { useState } from "react";
import ListProject from "./list-project/ListProject";
import "./project.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import cupidify from "../../assets/img/cupidify.jpg";
import donpeppe from "../../assets/img/donpeppe.png";
import tmovie from "../../assets/img/tmovie.png";
import setsail from "../../assets/img/setsail.png";
import bike from "../../assets/img/bike.png";
import labnail from "../../assets/img/labnail.jpg";
import suar from "../../assets/img/suar.jpg";
import donppepeVideo from "../../assets/video/donpeppe_video.mp4";
import setsailVideo from "../../assets/video/setsail_video.mp4";
import tmovieVideo from "../../assets/video/tmovie_video.mp4";
import bikeVideo from "../../assets/video/bike_video.mp4";
import labnailVideo from "../../assets/video/labnail_video.mp4";
import suarVideo from "../../assets/video/suar_video.mp4";
import cupidifyVideo from "../../assets/video/cupidify.mp4";
import { useEffect } from "react";

const PROJECTS = [
  {
    id: "00",
    name: "Cupidify",
    src: cupidify,
    desc: "This is a website that helps users find their soulmate. It has a filter feature to help users find their soulmate more easily and conveniently.",
    linkGithub: "https://github.com/Danh-lofi/cupidify",
    linkDemo: "https://cupidiify.vercel.app/",
    video: cupidifyVideo,
  },
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
    name: "App-Chat",
    src: suar,
    desc: "This website will help people make friends, create online chat groups with each other.",
    linkGithub:
      "https://github.com/Danh-lofi/App-Chat/tree/master/App/app-reactjs",
    linkDemo: "https://suar-chat.web.app//",
    video: suarVideo,
  },
  {
    id: "03",
    name: "TMovie",
    src: tmovie,
    desc: "With this website, users can search and view information about movies that are popular, or highly rated today.",
    linkGithub: "https://github.com/Danh-lofi/TMovie",
    linkDemo: "https://tmovie-36680.web.app/",
    video: tmovieVideo,
  },
  {
    id: "04",
    name: "SetSail",
    src: setsail,
    desc: "This is the UI/UX of a website",
    linkGithub: "https://github.com/Danh-lofi/SetSail",
    linkDemo: "https://danh-lofi.github.io/SetSail/",
    video: setsailVideo,
  },
  {
    id: "05",
    name: "Bicycle",
    src: bike,
    desc: "This is the UI/UX of a website",
    linkGithub: "https://github.com/Danh-lofi/Bicycle-Lading-Page",
    linkDemo: "https://danh-lofi.github.io/Bicycle-Lading-Page/",
    video: bikeVideo,
  },
  {
    id: "06",
    name: "Lab Nail",
    src: labnail,
    desc: "This is the UI/UX of a website",
    linkGithub: "https://github.com/Danh-lofi/nail-lab",
    linkDemo: "https://danh-lofi.github.io/nail-lab/src/index",
    video: labnailVideo,
  },
];
const Project = (props) => {
  // state
  const [number, setNumber] = useState(1);
  const [project, setProject] = useState([]);

  useEffect(() => {
    const projectSlice = PROJECTS.slice(4 * (number - 1), 4 * number);
    setProject(projectSlice);
  }, [number]);
  //
  const lengthProject = PROJECTS.length;
  const numberPage = Math.ceil(lengthProject / 4);
  const arrPage = [];
  for (let i = 1; i <= numberPage; i++) {
    arrPage.push(i);
  }
  const ListPage = arrPage.map((page) => (
    <li
      key={page}
      className={`project__navigation__item ${number === page ? "active" : ""}`}
      onClick={() => setNumber(page)}
    >
      {page}
    </li>
  ));

  const decreaseNumberPageHandler = () => {
    number > 1 && setNumber(number - 1);
  };

  const increaseNumberPageHandler = () => {
    number !== numberPage && setNumber(number + 1);
  };

  return (
    <div id="project" className="project">
      <div className="project__container">
        <h3 className="project__header">
          My <span className="project__header__ef">Project</span>
        </h3>
        <div className="project__list">
          <ListProject PROJECTS={project} number={number} />
        </div>
        <div className="project__navigation">
          <ul className="project__navigation__list">
            <li
              className="project__navigation__item"
              onClick={decreaseNumberPageHandler}
            >
              <FontAwesomeIcon icon={faAngleLeft} />
            </li>
            {ListPage}
            <li
              className="project__navigation__item"
              onClick={increaseNumberPageHandler}
            >
              <FontAwesomeIcon icon={faAngleRight} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project;
