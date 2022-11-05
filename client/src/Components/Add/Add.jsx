import React, { useState } from "react";
import "./Add.css";
import TextInput from "../TextInput/TextInput";
import DateInput from "../DateInput/DateInput";
function Add() {
	return (
		<div className="add-wrapper">
			<div className="add-content">
				<TextInput placeholder="Form ID" />
				<div className="add-date-style">
					<DateInput />
				</div>
				<TextInput placeholder="Appointment Amount" />
				<TextInput placeholder="Funding Source" />
				<TextInput placeholder="FAST Track Balance" />
				<TextInput placeholder="Grant Start Funding" />
				<TextInput placeholder="Grant End Funding" />
				<div className="add-submit-button-wrapper">
					<button class="add-submit-button">Submit</button>
				</div>
			</div>
		</div>
	);
}

export default Add;
