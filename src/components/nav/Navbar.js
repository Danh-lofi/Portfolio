import React, { useEffect, useState } from "react";
import "./nav.scss";
import { IconFacebook, IconGitHub } from "../../icon/Icons";

import { Link } from "react-scroll";

import Button from "../button/Button";
const Navbar = (props) => {
  const [isShrink, setIsShrink] = useState(false);
  let className = "navbar";
  useEffect(() => {
    const shrinkHeader = () => {
      if (document.documentElement.scrollTop > 50) {
        setIsShrink(true);
      } else {
        setIsShrink(false);
      }
    };

    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  if (isShrink) {
    className += " shrink";
  }
  return (
    <div className={className}>
      <div className="navbar__container">
        <div className="navbar__wrapper">
          <div className="navbar__logo">
            <h3>
              <Link
                offset={-120}
                to="home"
                spy={true}
                smooth={true}
                duration={500}
              >
                Portfolio
              </Link>
            </h3>
          </div>
          <div className="navbar__nav">
            <div className="navbar__nav__container">
              <Link
                offset={-120}
                className="navbar__nav__link"
                to="home"
                spy={true}
                smooth={true}
                duration={500}
              >
                Home
              </Link>
              <Link
                offset={-120}
                className="navbar__nav__link"
                spy={true}
                smooth={true}
                duration={500}
                to="skill"
              >
                Skills
              </Link>
              <Link
                className="navbar__nav__link"
                spy={true}
                smooth={true}
                duration={500}
                offset={-62}
                to="project"
              >
                Projects
              </Link>
              <ul className="navbar__nav__list_social">
                <li className="navbar__nav__item__social">
                  <a
                    target="__blank"
                    href="https://www.facebook.com/profile.php?id=100011665686890"
                    className="navbar__nav__item__social__wrapper"
                  >
                    <IconFacebook />
                  </a>
                </li>
                <li className="navbar__nav__item__social">
                  <a
                    target="__blank"
                    href="https://github.com/Danh-lofi"
                    className="navbar__nav__item__social__wrapper"
                  >
                    <IconGitHub />
                  </a>
                </li>
              </ul>
              <Link
                offset={62}
                className="navbar__nav__button"
                spy={true}
                smooth={true}
                duration={500}
                to="contact"
              >
                <Button>Contact Me</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
