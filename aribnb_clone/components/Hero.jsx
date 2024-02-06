import React from "react";
import HeroImg from "Img/photo-grid.png";

export const Hero = () => {
  return (
    <section className="hero">
      <img src={HeroImg} className="hero--img" />
      <h1 className="hero--heading">Online Experiences</h1>
      <p className="hero--p">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
};
