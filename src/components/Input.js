import React from "react";
import "./Input.css";

const Input = ({ label, ...inputProps }) => {
  return (
    <div className="input">
      <label>{label}</label>
      <input {...inputProps} />
    </div>
  );
};

export default Input;
