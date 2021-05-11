import React from "react";
import "./cart-icon.style.scss";
import { ReactComponent as ShopIcon } from "../assets/shopping-bag.svg";

const CartIcon = () => (
  <div className="cart-icon">
    <ShopIcon />
  </div>
);

export default CartIcon;
