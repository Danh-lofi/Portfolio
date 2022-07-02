import React from "react";
import "./skill.scss";
import html from "../../assets/img/html.png";
import css from "../../assets/img/css.png";
import react from "../../assets/img/react.png";
import bootstrap from "../../assets/img/bootstrap.png";
import github from "../../assets/img/github.png";
import js from "../../assets/img/js.png";
import redux from "../../assets/img/redux.png";
// import required modules

// import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";

const Skill = (props) => {
  const listImg = [html, css, js, bootstrap, react, redux, github];
  listImg.map((item) => console.log(item));
  return (
    <div className="skill">
      <div className="skill__container">
        <div className="skill__title__wrapper">
          <h3 className="skill__title">Skills</h3>
          <span className="skill__desc">
            These are the skills I have learned over the years
          </span>
        </div>
        <div className="skill__list">
          <Swiper
            grabCursor={true}
            slidesPerView={5}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {listImg.map((item, i) => (
              <SwiperSlide key={`slide-${i}`}>
                <img src={item} className="skill__img" alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Skill;
