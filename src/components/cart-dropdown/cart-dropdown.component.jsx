import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.style.scss";

const Cart = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton>Checkout!</CustomButton>
  </div>
);

export default Cart;
