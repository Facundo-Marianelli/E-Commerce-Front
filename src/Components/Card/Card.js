import React from "react";
import "./Card.css";
const Card = (props) => {
  return (
    <div>
      <h3>{props.message}</h3>
    </div>
  );
};

export default Card;