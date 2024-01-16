import React, { useState } from "react";
import { useForm } from "react-hook-form";

import "./contact.scss";
import bg from "../../assets/img/contact-img.svg";
import Button from "../button/Button";
import Alert from 'react-bootstrap/Alert'
import SuccessModal from "../modal/SuccessModal";
const phoneRegExp = /(84|0[3|5|7|8|9])+([0-9]{8,9})\b/;

const Contact = () => {
    const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data)
    const { firstName, lastName, email, phone, message } = data;
    const body = {
      name: firstName + " " + lastName,
      email,
      phone,
      message,
    }
    // URL to which the POST request will be sent
const apiUrl = 'https://doan-be.vercel.app/contact';

// Data to be sent in the POST request (can be a JSON object, FormData, etc.)

// Configuration for the Fetch API
const fetchOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json', // Specify the content type if sending JSON data
    // Additional headers can be included as needed
  },
  body: JSON.stringify(body) // Convert the data to JSON format
};

// Make the POST request using the Fetch API
fetch(apiUrl, fetchOptions)
  .then(response => {
    // Check if the request was successful (status code 2xx)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Parse the response data (if applicable)
        setShow(true);
    reset(); 
    return response.json(); // This assumes the response is in JSON format
  })
  .then(data => {
    // Handle the data returned from the server
    setShow(true);
    reset(); 
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('Fetch error:', error);
  });

  };

  return (
    <form id="contact" className="contact" onSubmit={handleSubmit(onSubmit)}>
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
                  {...register("firstName", { required: true })}
                />
                <input
                  type="text"
                  className="contact__form__input"
                  placeholder="Last Name"
                  {...register("lastName", { required: true })}
                />
              </div>
              <div className="contact__form__container">
                <input
                  type="text"
                  className="contact__form__input"
                  placeholder="Email Address"
                  {...register("email", { required: true })}
                />
                <input
                  type="text"
                  className="contact__form__input"
                  placeholder="Phone No."
                  {...register("phone", { required: true,  pattern: phoneRegExp  })}
                   aria-invalid={errors.phone ? "true" : "false"}
                />
             
              </div>
                {errors.phone?.type === "pattern" && (
        <p className="contact__form__input__error">Số điện thoại không hợp lệ</p>
      )}

              <div className="contact__form__container">
                <textarea
                  className="contact__form__input"
                  rows="6"
                  placeholder="Message"
                  {...register("message", { required: true })}
                ></textarea>
              </div>
              <div className="contact__form__container contact__button">
                <Button contact>Send</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SuccessModal isOpen={show} closeModal={()=>setShow(false)} />
    </form>
  );
};

export default Contact;
