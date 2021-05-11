import React from "react";
import { Link } from "react-router-dom";
import "./header.component.scss";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => (
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
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          Sign out!
        </div>
      ) : (
        <Link className="option" to="/signin">
          Sign in!
        </Link>
      )}
    </div>
  </div>
);

export default Header;
