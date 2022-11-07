import React from "react";
import "./TextInput.css";

function TextInput(props) {
	return (
		<div className="text-input">
			<label className="input-label">{props.placeholder}</label>
			<input
        className="form-input"
        type="text"
				inputMode={props.type === "number" ? "decimal" : "text"}
				placeholder={props.placeholder}
				step={props.step ? props.step : 500}
			/>
		</div>
	);
}

export default TextInput;
