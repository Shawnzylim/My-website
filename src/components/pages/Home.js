import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
// import Cards from "../Cards";
import TextScroll from "../TextScroll";
import { useRef } from "react";

function Home() {
  const timelineRef = useRef(null);
  return (
    <>
      <HeroSection timelineRef={timelineRef} />
      <TextScroll ref={timelineRef} />
      {/* <Cards /> */}
    </>
  );
}

export default Home;
