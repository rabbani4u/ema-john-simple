import React from "react";
import "./ReviewItem.css";

function ReviewItem(props) {
  const { name, quantity, img } = props.product;
  return (
    <div className="review-item">
      <div className="product_image">
        <img src={img} alt="" />
      </div>
      <div className="product_info">
        <h4 className="product-name">{name}</h4>
        <p>Quantity: {quantity}</p>
        <button className="main-button">Remove Item</button>
      </div>
    </div>
  );
}

export default ReviewItem;
