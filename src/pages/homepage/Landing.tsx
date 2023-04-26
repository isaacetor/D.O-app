import React from "react";
import Hero from "./Hero";
import Awareness from "./Awareness";
import Steps from "./Steps";
import GetStarted from "./GetStarted";
import Block from "./Block";
import Gallery from "./Gallery";

const Landing = () => {
  return (
    <div>
      <Hero />
      <Gallery />
      <Awareness />
      <Steps />
      <GetStarted />
      <Block />
    </div>
  );
};

export default Landing;
