import React, { useRef } from "react";
import { Button } from "./Button";
import "./Contact.css";
import { Link } from "react-router-dom";
import swgoh from "./swgohgg-logo.png";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_krg4tnd",
        "template_r5yot7z",
        form.current,
        "jvkTl4UHCtwyBcnYU"
      )
      .then(
        (result) => {
          clearInput();
          alert("Email sent sucessfully!");
        },
        (error) => {
          alert("Email failed to send");
        }
      );
  };

  function clearInput() {
    document.getElementById("form").reset();
    const textarea = document.getElementById("message");
    textarea.value = "";
  }

  return (
    <div className="contact-main-container">
      <div className="text-container">
        <h1>It's a trap!</h1>
        <p>--send over the death star plans quick--</p>
      </div>
      <div className="contact-container">
        <section className="footer-subscription">
          <div className="footer-subscription-container">
            <div className="input-areas">
              <form id="form" ref={form}>
                <label className="input-label" for="name">
                  Name
                </label>
                <input
                  type="name"
                  name="user_name"
                  placeholder="Enter Name"
                  className="footer-input"
                />
                <label className="input-label" for="email">
                  email
                </label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Enter Email"
                  className="footer-input"
                />
                <label className="input-label" for="message">
                  message
                </label>
                <textarea
                  id="message"
                  className="footer-input-message"
                  name="message"
                  placeholder="Enter Message"
                />
                <Button
                  className="send-email"
                  buttonStyle="btn--primary"
                  onClick={sendEmail}
                >
                  SEND DATACARD
                </Button>
              </form>
            </div>
          </div>
        </section>
        <div class="footer-links">
          <div className="footer-link-wrapper">
            <div class="footer-link-items">
              <h2>Contact Me</h2>
              <h3>
                <i class="fa fa-map-marker " />
                Singapore
              </h3>
              <Link to="tel:6031112298" target="_blank">
                <i class="fa fa-phone " />
                +65 96701673
              </Link>
              <Link to="mailto:shawnzylim@gmail.com" target="_blank">
                <i class="fa fa-envelope " />
                Shawnzylim@gmail.com
              </Link>
              <Link to="https://swgoh.gg/p/592983585/" target="_blank">
                <img src={swgoh} alt="swgoh" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
