import React from "react";
// import cardImg from "Img/katie-zaferes.png";
import reviewIcon from "Img/star.png";
import data from "../data";

export const Card = (props) => {
  let tagText;
  if (props.openSpots <= 0) {
    tagText = "SOLD OUT";
  } else if (props.location === "Online") {
    tagText = "Online";
  }
  return (
    <div className="card--container">
      {tagText && <span className="card--tag">{tagText}</span>}
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
