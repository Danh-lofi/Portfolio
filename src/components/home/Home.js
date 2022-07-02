import React from "react";
import "./home.scss";
import banner from "../../assets/img/banner-bg.png";
import HomeRight from "./home-right/HomeRight";
import HomeLeft from "./home-left/HomeLeft";
const Home = (props) => {
  return (
    <div className="home" style={{ backgroundImage: `url(${banner})` }}>
      <div className="home__container">
        <HomeLeft />
        <HomeRight />
      </div>
    </div>
  );
};

export default Home;
