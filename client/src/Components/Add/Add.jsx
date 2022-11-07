import React, { useState, useEffect } from "react";
import "./Add.css";
import TextInput from "../TextInput/TextInput";
import DateInput from "../DateInput/DateInput";
import Feedback from "./Feedback/Feedback";
function Add() {
	const [inputs, setInputs] = useState({});
	const [errors, setErrors] = useState([]);

	const handleChange = (n, v) => {
		setInputs((inputs) => ({ ...inputs, [n]: v }));
	};

	const handleError = (e) => {
		let arr = [];
		let errorFound = false;

		errors.forEach((error) => {
			if (error.name.localeCompare(e.name) === 0) {
				if (e.resolved == false) {
					arr.push(error);
				}
				errorFound = true;
			} else {
				arr.push(error);
			}
		});

		if (errorFound) setErrors(arr);
		else {
			if (e.resolved === false) setErrors([...errors, e]);
		}
	};

	useEffect(() => {
		console.log("errors", errors);
	}, [errors.length]);

	return (
		<div className="add-wrapper">
			<div className="add-content">
				<TextInput
					name="formid"
					type="text"
					placeholder="Form ID"
					onChange={handleChange}
					onError={handleError}
				/>
				<div className="add-date-style">
					<DateInput onChange={handleChange} onError={handleError} />
				</div>
				<TextInput
					name="fundingSource"
					placeholder="Funding Source"
					type="text"
					onChange={handleChange}
					onError={handleError}
				/>
				<TextInput
					name="appointmentAmount"
					placeholder="Appointment Amount"
					type="number"
					onChange={handleChange}
					onError={handleError}
				/>
				<TextInput
					name="fastTrackBalance"
					placeholder="FAST Track Balance"
					type="number"
					onChange={handleChange}
					onError={handleError}
				/>
				<TextInput
					name="grantStartFunding"
					placeholder="Grant Start Funding"
					type="number"
					onChange={handleChange}
					onError={handleError}
				/>
				<TextInput
					name="grantEndFunding"
					placeholder="Grant End Funding"
					type="number"
					onChange={handleChange}
					onError={handleError}
				/>
				<div className="add-submit-button-wrapper">
					<button className="add-submit-button">Submit</button>
				</div>
				<div className="feedback-wrapper">
					{errors.map((error, index) => {
						return (
							<>
								<Feedback
									key={index}
									status={error.status}
									title={error.title}
								>
									{error.message}
								</Feedback>
							</>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Add;
