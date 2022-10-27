import React from "react";
import "./FormInput.css";


function FormInput(props) {
  return (
    <div className="formInput">
      <label>{props.placeholder}</label>
      <input placeholder={props.placeholder} />
    </div>
  );
}

export default FormInput;
