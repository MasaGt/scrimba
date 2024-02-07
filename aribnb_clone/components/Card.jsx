import React from "react";
// import cardImg from "Img/katie-zaferes.png";
import reviewIcon from "Img/star.png";

export const Card = (props) => {
  return (
    <div className="card--container">
      <span className="card--tag">SOULD OUT</span>
      <img
        src={require(`Img/${props.img}`)}
        className="card--img"
        alt="Main card image."
      />
      <div className="card--review">
        <img src={reviewIcon} className="review--icon" alt="Star icon." />
        <span className="review--rate">{props.rating}</span>
        <span className="review--count gray">({props.reviewCnt}) • </span>
        <span className="review--country gray">{props.location}</span>
      </div>
      <h2>{props.heading}</h2>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
};
