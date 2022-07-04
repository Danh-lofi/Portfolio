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
  const Comp = props.link ? "a" : "button";
  return (
    <Comp className={name} href={props.link} target="__blank">
      <p className="button__content">{props.children}</p>
    </Comp>
  );
};

export default Button;
