import React from "react";
import "./button.scss";
const Button = (props) => {
  const name = props.active ? "button__active" : "button";
  return (
    <button className={name}>
      <p className="button__content">{props.children}</p>
    </button>
  );
};

export default Button;
