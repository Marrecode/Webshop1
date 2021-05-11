import React from "react";
import { Link } from "react-router-dom";
import "./header.component.scss";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../../card-icon/cart-icon.component";

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
      <CartIcon />
    </div>
  </div>
);

//standard namn med redux codebases (rootReducern)
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
