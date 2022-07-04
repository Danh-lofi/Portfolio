import React from "react";
import "./contact.scss";
import bg from "../../assets/img/contact-img.svg";
import Button from "../button/Button";
const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="contact__container">
        <div className="contact__left">
          <img src={bg} alt="" />
        </div>
        <div className="contact__div"></div>
        <div className="contact__right">
          <div className="contact__right__wrapper">
            <h3 className="contact__title">Get In Touch</h3>
            <div className="contact__form">
              <div className="contact__form__container">
                <input
                  type="text"
                  className="contact__form__input"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className="contact__form__input"
                  placeholder="Last Name"
                />
              </div>
              <div className="contact__form__container">
                <input
                  type="text"
                  className="contact__form__input"
                  placeholder="Email Address"
                />
                <input
                  type="text"
                  className="contact__form__input"
                  placeholder="Phone No."
                />
              </div>

              <div className="contact__form__container">
                <textarea
                  className="contact__form__input"
                  rows="6"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="contact__form__container contact__button">
                <Button contact>Send</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
