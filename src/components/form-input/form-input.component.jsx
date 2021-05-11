import React from "react";
import "./form-input.component.styles.scss";

const FormInput = ({ handleChange, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
  </div>
);

export default FormInput;
