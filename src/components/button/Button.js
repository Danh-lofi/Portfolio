import React from "react";
import "./button.scss";

const Button = (props) => {
  let name = props.active ? "button__active" : "button";
  if (props.small) {
    name += " small";
  }
  if (props.project) {
    name += " button__project";
  }
  if (props.contact) {
    name += " button__contact";
  }
  let Comp = props.link ? "a" : "button";
  return (
    <Comp
      className={name}
      href={props.link}
      target="__blank"
      download={props.download}
    >
      <p className="button__content">{props.children}</p>
    </Comp>
  );
};

export default Button;
