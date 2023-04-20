import React from "react";
import "./Input.css";

const Input = ({ label, ...inputProps }) => {
  return (
    <div className="input_container">
      <label>{label}</label>
      <input {...inputProps} />
    </div>
  );
};

export default Input;
