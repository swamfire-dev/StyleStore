import React from "react";
import "./Item.css";

export const Item = (props) => {
  return (
    <div className="item">
      <img src={props.image} alt="The props image" />
      <p>{props.name}</p>
      <div className="item-prices">{props.new_price}</div>
      <div className="item-price-old">{props.old_price}</div>
    </div>
  );
};
