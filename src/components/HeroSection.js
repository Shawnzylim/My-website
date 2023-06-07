import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import "../App.css";

const HeroSection = ({ timelineRef }) => {
  const scrollDown = (e) => {
    e.preventDefault();
    timelineRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="hero-container">
      <video src="/videos/star-wars-ghibli-style.mp4" autoPlay loop muted />
      <h1>GREETINGS PADAWAN</h1>
      <p>May the Force Be With You</p>
      <div className="hero-btns">
        {/* <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          where="/about-me"
        >
          ABOUT ME (BORING)
        </Button> */}
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={scrollDown}
        >
          <i class="fa fa-caret-down" aria-hidden="true" />
          FEEL THE FORCE <i class="fa fa-caret-down" aria-hidden="true" />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
