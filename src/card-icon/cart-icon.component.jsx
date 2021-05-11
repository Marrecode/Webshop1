import React from "react";
import "./cart-icon.style.scss";
import { ReactComponent as ShopIcon } from "../assets/shopbagWorks.svg";
import { toggleCartHidden } from "../redux/cart/cart.action";
import { connect } from "react-redux";

const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShopIcon />
  </div>
);
//true/false -> hidden
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

//null e default
export default connect(null, mapDispatchToProps)(CartIcon);
