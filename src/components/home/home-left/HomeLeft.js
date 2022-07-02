import React from "react";
import Button from "../../button/Button";
import "../home.scss";

const HomeLeft = () => {
  return (
    <div className="home__left">
      <div className="home__left__container">
        <div className="home__left__welcome">
          <span className="home__left__welcome__text">
            Welcome to my Portfolio
          </span>
        </div>
        <h3 className="home__left__title">Hi! I'm Danh Front-end Developer</h3>
        <span className="home__left__info">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </span>
        <div>
          <Button>Dowload CV</Button>
        </div>
      </div>
    </div>
  );
};

export default HomeLeft;
