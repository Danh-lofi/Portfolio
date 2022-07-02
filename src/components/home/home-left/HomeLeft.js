import React from "react";
import Button from "../../button/Button";
import "../home.scss";
import Typical from "react-typical";
const HomeLeft = () => {
  return (
    <div className="home__left">
      <div className="home__left__container">
        <div className="home__left__welcome">
          <span className="home__left__welcome__text">
            Welcome to my Portfolio
          </span>
        </div>
        <h3 className="home__left__title">
          Hi! I'm
          {/* Danh Front-end Developer */}
          <Typical
            steps={[" Danh", 2000, "Front-end Developer", 2000]}
            loop={Infinity}
            // wrapper="p"
          />
        </h3>
        <span className="home__left__info">
          Currently, I am a 3rd year student at Industrial University of Ho Chi
          Minh City, majoring in software engineering. My hobbies are reading
          books, listening to music and coding. I always strive to develop
          myself with the desire to become a good programmer.
        </span>
        <div className="home__left__btn">
          <Button active>Dowload CV</Button>
          <Button active>Contact Me</Button>
        </div>
      </div>
    </div>
  );
};

export default HomeLeft;
