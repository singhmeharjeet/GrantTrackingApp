import React, { useState, useEffect } from "react";
import "./Add.css";
import TextInput from "../TextInput/TextInput";
import DateInput from "../DateInput/DateInput";
import Feedback from "./Feedback/Feedback";
import { useGlobalData } from "../../Contexts/Global/GlobalContext";
import { RiSendPlaneFill } from "react-icons/ri";
function Add() {
	const [inputs, setInputs] = useState({});
	const [errors, setErrors] = useState([]);
	const { addRequest } = useGlobalData();
	const [dbResponse, setDbResponse] = useState({});
	const handleChange = (n, v) => {
		setInputs((inputs) => ({ ...inputs, [n]: v }));
	};

	const handleError = (e) => {
		let arr = [];
		let errorFound = false;

		errors.forEach((error) => {
			if (error.name.localeCompare(e.name) === 0) {
				if (e.resolved == false) arr.push(error);
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

	const handleSubmit = async () => {
		// TODO::
		// 1) Validation before submit is clicked
		// 2) Response from Backend to reflect in front end

		// if (
		// 	Object.keys(inputs).length === 8 &&
		// 	errors.filter((e) => e.resolved === false).length === 0
		// ) {
		// 	const status = add(inputs);
		// 	if (status) console.log("Data Added");
		// 	else console.log("Error with adding data")
		// }
		console.log("inputs", inputs);
		setDbResponse(
			await addRequest(inputs),
			console.log("response from db", dbResponse?.data)
		);

		/*
		if (dbResponse?.status) {
			handleError({
				name: "database",
				resolved: false,
				status: true,
				title: "Success",
				message: dbResponse?.data,
			});
		} else {
			handleError({
				name: "database",
				resolved: false,
				status: false,
				title: "Error Occured",
				message: dbResponse?.data,
			});
		}
		*/
	};

	useEffect(() => console.log("errors", errors), [errors.length]);
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
					name="grantStartAmount"
					placeholder="Grant Start Funding"
					type="number"
					onChange={handleChange}
					onError={handleError}
				/>
				<TextInput
					name="grantEndAmount"
					placeholder="Grant End Funding"
					type="number"
					onChange={handleChange}
					onError={handleError}
				/>
				<div className="add-submit-button-wrapper">
					<button
						className="add-submit-button"
						role="button"
						onClick={handleSubmit}
					>
						<span className="text">
							Submit <RiSendPlaneFill />
						</span>
					</button>
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
