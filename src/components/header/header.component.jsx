import React from "react";
import { Link } from "react-router-dom";
import "./header.component.scss";

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <div>HOME</div>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="contact" to="/contact">
        ABOUT
      </Link>
    </div>
  </div>
);

export default Header;
