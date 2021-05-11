import React from "react";
import "./sign-up.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class signUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("password must match!");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      //wait for this to finish
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">Register here!</h2>
        <span>Sign up with email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            placeholder="name"
            onChange={this.handleChange}
            value={displayName}
            name="displayName"
            required
          />
          <FormInput
            type="email"
            placeholder="email"
            onChange={this.handleChange}
            value={email}
            name="email"
            required
          />
          <FormInput
            type="password"
            placeholder="password"
            onChange={this.handleChange}
            value={password}
            name="password"
            required
          />
          <FormInput
            type="password"
            placeholder="confirmPassword"
            onChange={this.handleChange}
            value={confirmPassword}
            name="confirmPassword"
            required
          />
          <CustomButton type="submit">Sign up right here!</CustomButton>
        </form>
      </div>
    );
  }
}

export default signUp;
