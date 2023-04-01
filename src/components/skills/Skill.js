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
  SwiperCore.use([Autoplay]);
  const listImg = [html, css, js, bootstrap, react, redux, github];
  return (
    <div className="skill">
      <div className="skill__container">
        <div className="skill__title__wrapper">
          <h3 className="skill__title">Skills</h3>
          <span className="skill__desc">
            These are the skills I have learned over the years
          </span>
        </div>
        <div
          className="skill__list"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="2000"
        >
          <Swiper
            grabCursor={true}
            slidesPerView={5}
            autoplay={true}
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
