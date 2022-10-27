import React, {useState} from "react";
import "./Add.css";
import FormInput from "../FormInput/FormInput";
function Add() {
	// const [state, setState] = useState({
	// 	formid, startDate, endDate
	// });
	return (
		<div className="add">
			{/* <FormInput placeholder="FormID" onClick={(e) => { setState.formid = e.target.value }} /> */}
			<FormInput placeholder="Appointment Start Date" />
			<FormInput placeholder="Appointment End Date" />
			<FormInput placeholder="Appointment Amount" />
			<FormInput placeholder="Funding Source" />
			<FormInput placeholder="FAST Track Balance" />
			<FormInput placeholder="Grant Start Funding" />
			<FormInput placeholder="Grant End Funding" />
			<button class="button">Submit</button>
		</div>
	);
}

export default Add;
