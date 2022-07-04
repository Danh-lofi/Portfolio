import React from "react";
import "../project.scss";

import Button from "../../button/Button";
const ItemProject = (props) => {
  let classEx;
  if ((props.id / 1) % 2 == 0) {
    classEx = "reverse";
  }
  return (
    <div className="item-project">
      <div className={`item-project__container ${classEx}`}>
        <div className="item-project__left">
          <img className="item-project__src" src={props.src} alt="" />
        </div>
        <div className="item-project__right">
          <h4 className="item-project__title">{props.name}</h4>
          <span className="item-project__desc">{props.desc}</span>

          <div className="item-project__buttons">
            <Button
              project
              small
              active
              link="https://donpeppe-clone-ab92e.web.app/"
            >
              Live Demo
            </Button>
            <Button
              project
              small
              active
              link="https://github.com/Danh-lofi/DonPeppe"
            >
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
