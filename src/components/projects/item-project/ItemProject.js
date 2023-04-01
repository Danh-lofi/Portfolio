import React from "react";
import "../project.scss";
import Button from "../../button/Button";
const ItemProject = (props) => {
  let classEx;
  let dataAos;
  if ((props.id / 1) % 2 == 0) {
    classEx = "reverse";
    dataAos = "fade-left";
  } else dataAos = "fade-right";
  return (
    <div className="item-project" data-aos={dataAos} data-aos-duration="2000">
      <div className={`item-project__container ${classEx}`}>
        <a
          href={props.linkDemo}
          target="__blank"
          className="item-project__left"
        >
          <img className="item-project__src" src={props.src} alt="" />
          <video
            className="item-project__video"
            src={props.video}
            muted
            autoPlay
            loop
          ></video>
        </a>
        <div className="item-project__right">
          <h4 className="item-project__title">{props.name}</h4>
          <span className="item-project__desc">{props.desc}</span>

          <div className="item-project__buttons">
            <Button project small active link={props.linkDemo}>
              Live Demo
            </Button>
            <Button project small active link={props.linkGithub}>
              Link Github
            </Button>
          </div>
        </div>
        <div className="item-project__div"></div>
      </div>
    </div>
  );
};

export default ItemProject;
