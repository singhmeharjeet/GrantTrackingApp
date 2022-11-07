import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./TextInput.css";

function useDidUpdateEffect(fn, inputs) {
	const didMountRef = useRef(false);

	useEffect(() => {
		if (didMountRef.current) {
			return fn();
		}
		didMountRef.current = true;
	}, inputs);
}

function TextInput(props) {
	const name = props.name;
	const [value, setValue] = useState("");

	const isNumeric = (n) => !isNaN(parseFloat(n)) && isFinite(n);

	function validateValue(value) {
		console.log("validate triggered from" + props.placeholder);
		switch (name) {
			case "formid":
			case "fundingSource":{
				if (!value) 
					props.onError({
						name,
						resolved: false,
						status: false,
						title: "Empty Field",
						message: `Please enter a valid ${name}`,
					});
				break;
			}
			case "appointmentAmount":
			case "fastTrackBalance":
			case "grantStartFunding":
			case "grantEndFunding": {
				if (value < 0) {
					props.onError({
						name,
						resolved: false,
						status: false,
						title: "Negative value",
						message: `${name} is always a positive number`,
					});
				} else if (value >= 0 && isNumeric(value)) {
					props.onError({
						name,
						resolved: true,
						status: true,
						title: "Positive Value",
						message: `${name} is always a positive number`,
					});
				} else if (value === "") {
					props.onError({
						name,
						resolved: false,
						status: false,
						title: "Empty Input Field",
						message: `${name} is always a positive number`,
					});
				}
				break;
			}
			default: {
				return;
			}
		}
	}

	useDidUpdateEffect(() => {
		validateValue(value);
		props.onChange(name, value);
	}, [value]);

	return (
		<div className="text-input">
			<label className="input-label">{props.placeholder}</label>
			<input
				onChange={(event) => {
					if (props.type.localeCompare("number") === 0) {
						if (isNumeric(event.target.value)) {
							setValue(event.target.value);
						} else if (event.target.value === "" || event.target.value === "-") {
							setValue("");
						} else return;
					}
					setValue(event.target.value);
				}}
				className="form-input"
				type="text"
				placeholder={props.placeholder}
				step={props.step ? props.step : 500}
				name={props.name}
				value={value}
			/>
		</div>
	);
}
TextInput.defaultProps = {
	type: "text",
	placeholder: "Enter a value",
};
TextInput.propTypes = {
	name: PropTypes.string.isRequired,
};
export default TextInput;
