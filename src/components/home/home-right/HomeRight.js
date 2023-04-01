import React from "react";
import "../home.scss";
import profileImg from "../../../assets/img/profile-pic.png";

const HomeRight = () => {
  return (
    <div className="home__right">
      <div className="home__right__container">
        <img className="home__right__img" src={profileImg} alt="" />
      </div>
    </div>
  );
};

export default HomeRight;
