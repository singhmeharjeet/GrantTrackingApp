import React from "react";
import "./TextInput.css";

function TextInput(props) {
	return (
		<div className="text-input">
			<label className="input-label">{props.placeholder}</label>
			<input
				className="form-input"
				type="text"
				placeholder={props.placeholder}
			/>
		</div>
	);
}

export default TextInput;
