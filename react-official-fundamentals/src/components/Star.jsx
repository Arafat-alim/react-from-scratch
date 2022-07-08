import React from "react";
import starEmpty from "../images/star-empty.png";
import starFilled from "../images/star-filled.png";

export default function Star({ toggleFavorite, isFilled }) {
  return (
    <img
      src={isFilled ? starFilled : starEmpty}
      alt="fav-logo"
      className="card--favourite"
      onClick={toggleFavorite}
    />
  );
}
