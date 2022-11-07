import React, { useState } from "react";
import PropTypes from "prop-types";
import "./TextInput.css";
import { useDidUpdateEffect } from "../../Hooks/useDidUpdateEffect";

function TextInput(props) {
	const name = props.name;
	const [value, setValue] = useState("");
	const [color, setColor] = useState("rgb(154, 154, 154)");

	const isNumeric = (n) => !isNaN(parseFloat(n)) && isFinite(n);

	function validateValue(value) {
		switch (name) {
			case "formid":
			case "fundingSource": {
				if (!value || value.trim().length < 3) {
					props.onError({
						name,
						resolved: false,
						status: false,
						title: "Invalid Input",
						message: `Please enter a valid ${name} above 3 characters`,
					});
					setColor("red");
				} else if (value.trim().length >= 3) {
					props.onError({
						name,
						resolved: true,
						status: true,
						title: "Valid Input",
						message: `You entered a valid ${name} above 3 characters`,
					});
					setColor("green");
				}
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
					setColor("red");
				} else if (value >= 0 && isNumeric(value)) {
					props.onError({
						name,
						resolved: true,
						status: true,
						title: "Positive Value",
						message: `${name} is always a positive number`,
					});
					setColor("green");
				} else if (value === "") {
					props.onError({
						name,
						resolved: false,
						status: false,
						title: "Empty Input Field",
						message: `${name} is always a positive number`,
					});
					setColor("red");
				}
				break;
			}
			default: {
				setColor("green");
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
						} else if (
							event.target.value === "" ||
							event.target.value === "-"
						) {
							setValue("");
						} else return;
					}
					setValue(event.target.value);
				}}
				className="form-input"
				style={{ borderBottom: `2px solid ${color}` }}
				type="text"
				placeholder={props.placeholder}
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
