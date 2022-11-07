import React, { useState, useEffect } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DateInput.css";

export default function DateInput(props) {
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());

	useEffect(() => {
		props.onChange("startDate", startDate);
		props.onChange("endDate", endDate);
	}, [startDate, endDate]);

	return (
		<>
			<div className="date-wrapper">
				<label>Application Period [From - To]</label>
				<div className="date">
					<span className="date-span">
						<DatePicker
							selected={startDate}
							selectsStart
							startDate={startDate}
							endDate={endDate}
							onChange={(date) => setStartDate(date)}
						/>
					</span>
					<span className="date-span">
						<DatePicker
							selected={endDate}
							selectsEnd
							startDate={startDate}
							endDate={endDate}
							minDate={startDate}
							onChange={(date) => setEndDate(date)}
						/>
					</span>
				</div>
			</div>
		</>
	);
}
