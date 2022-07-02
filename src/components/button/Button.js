import React from "react";
import "./button.scss";
const Button = (props) => {
  return (
    <button className="button">
      <p className="button__content">{props.children}</p>
    </button>
  );
};

export default Button;
