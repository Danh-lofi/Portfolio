import React, { useEffect, useState } from "react";
import "./nav.scss";
import { IconFacebook, IconGitHub } from "../../icon/Icons";
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
            <h3>Portfolio</h3>
          </div>
          <div className="navbar__nav">
            <div className="navbar__nav__container">
              <span className="navbar__nav__link active">Home</span>
              <span className="navbar__nav__link">Skills</span>
              <span className="navbar__nav__link">Projects</span>
              <ul className="navbar__nav__list_social">
                <li className="navbar__nav__item__social">
                  <div className="navbar__nav__item__social__wrapper">
                    <IconFacebook />
                  </div>
                </li>
                <li className="navbar__nav__item__social">
                  <div className="navbar__nav__item__social__wrapper">
                    <IconGitHub />
                  </div>
                </li>
              </ul>
              <div className="navbar__nav__button">
                <Button>Contact Me</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
