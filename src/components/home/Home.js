import React from "react";
import "./home.scss";
import banner from "../../assets/img/banner-bg.png";
import HomeRight from "./home-right/HomeRight";
import HomeLeft from "./home-left/HomeLeft";
import Skill from "../skills/Skill";
const Home = (props) => {
  return (
    <div className="home" style={{ backgroundImage: `url(${banner})` }}>
      <div className="home__container" id="home">
        <HomeLeft />
        <HomeRight />
      </div>
      <div className="home__skill" id="skill">
        <Skill />
      </div>
    </div>
  );
};

export default Home;
