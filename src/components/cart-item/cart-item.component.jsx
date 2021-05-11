import React from "react";

import "./cart-item.styles.scss";

const CartItem = ({ item: { imageUrl, price, name } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-detals">
      <span className="name">{name}:</span>{" "}
      <span className="price">Price - {price} dollar</span>
    </div>
  </div>
);

export default CartItem;
