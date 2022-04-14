import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const refForm = useRef();
  const sendEmail = (evt) => {
    evt.preventDefault();
    emailjs
      .sendForm(
        "default_service",
        "template_kymuc17",
        refForm.current,
        "5dloYJhxldbmJ8FAI"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="container contact-page">
      <div className="contact-form">
        <form action="" ref={refForm} onSubmit={sendEmail}>
          <ul>
            <li className="half">
              <input type="text" name="name" placeholder="name" required />
            </li>
            <li className="half">
              <input type="email" name="email" placeholder="email" required />
            </li>
            <li className="half">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
            </li>
            <li className="half">
              <textarea
                name="message"
                id="message"
                placeholder="message"
                cols="30"
                rows="10"
              ></textarea>
            </li>
            <li>
              <input type="submit" value="SEND" />
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default Contact;
