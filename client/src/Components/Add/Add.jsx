import React, { useState } from "react";
import "./Add.css";
import TextInput from "../TextInput/TextInput";
import DateInput from "../DateInput/DateInput";
import Feedback from "./Feedback/Feedback";
function Add() {
	return (
		<div className="add-wrapper">
			<div className="add-content">
				<TextInput placeholder="Form ID" />
				<div className="add-date-style">
					<DateInput />
				</div>
				<TextInput type="text" placeholder="Funding Source" />
				<TextInput type="number" placeholder="Appointment Amount" />
				<TextInput type="number" placeholder="FAST Track Balance" />
				<TextInput type="number" placeholder="Grant Start Funding" />
				<TextInput type="number" placeholder="Grant End Funding" />
				<div className="add-submit-button-wrapper">
					<button className="add-submit-button">Submit</button>
				</div>
				<div className="feedback-wrapper">
					<Feedback valid={false} title="Invalid date">
						From Date should be before To date
					</Feedback>
					<Feedback valid={true} title="Entry Added">
						Thank You!
					</Feedback>
				</div>
			</div>
		</div>
	);
}

export default Add;
