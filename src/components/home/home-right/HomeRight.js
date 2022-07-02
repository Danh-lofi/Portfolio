import React from "react";
import "../home.scss";
import headerImg from "../../../assets/img/header-img.svg";
const HomeRight = () => {
  return (
    <div className="home__right">
      <div className="home__right__container">
        <img className="home__right__img" src={headerImg} alt="" />
      </div>
    </div>
  );
};

export default HomeRight;
