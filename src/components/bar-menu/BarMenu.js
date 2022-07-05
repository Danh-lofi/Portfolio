import React, { useEffect } from "react";
import "./BarMenu.scss";
import { Link } from "react-scroll";
import { IconFacebook, IconGitHub } from "../../icon/Icons";
import Button from "../button/Button";

const BarMenu = (props) => {
  console.log(props.isBar);
  let className;
  if (props.isBar) {
    className = "active";
  }
  console.log(className);
  return (
    <div className={`bar-menu ${className}`}>
      <div className="bar-menu__close" onClick={props.onClick}>
        &times;
      </div>
      <div className="bar-menu__nav">
        <div className="bar-menu__nav__container">
          <Link
            offset={-120}
            className="bar-menu__nav__link"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            Home
          </Link>
          <Link
            offset={-120}
            className="bar-menu__nav__link"
            spy={true}
            smooth={true}
            duration={500}
            to="skill"
          >
            Skills
          </Link>
          <Link
            className="bar-menu__nav__link"
            spy={true}
            smooth={true}
            duration={500}
            offset={-62}
            to="project"
          >
            Projects
          </Link>

          <Link
            offset={62}
            className="bar-menu__nav__link"
            spy={true}
            smooth={true}
            duration={500}
            to="contact"
          >
            Contact Me
          </Link>

          <ul className="bar-menu__nav__list_social">
            <li className="bar-menu__nav__item__social">
              <a
                target="__blank"
                href="https://www.facebook.com/profile.php?id=100011665686890"
                className="bar-menu__nav__item__social__wrapper"
              >
                <IconFacebook />
              </a>
            </li>
            <li className="bar-menu__nav__item__social">
              <a
                target="__blank"
                href="https://github.com/Danh-lofi"
                className="bar-menu__nav__item__social__wrapper"
              >
                <IconGitHub />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BarMenu;
