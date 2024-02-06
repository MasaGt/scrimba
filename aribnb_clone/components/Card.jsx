import React from "react";
import cardImg from "Img/katie-zaferes.png";
import reviewIcon from "Img/star.png";

export const Card = () => {
  return (
    <section className="card">
      <div className="card--container">
        <span className="card--tag">SOULD OUT</span>
        <img src={cardImg} className="card--img" alt="Main card image." />
        <div className="card--review">
          <img src={reviewIcon} className="review--icon" alt="Star icon." />
          <span className="review--rate">5.0</span>
          <span className="review--count gray">(6) • </span>
          <span className="review--country gray">USA</span>
        </div>
        <h2>Life lessons with Katie Zaferes</h2>
        <p>
          <span className="bold">From $136</span> / person
        </p>
      </div>
    </section>
  );
};
