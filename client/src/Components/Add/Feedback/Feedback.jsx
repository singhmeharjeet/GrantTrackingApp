import React, { useState, useRef } from "react";

import "./Feedback.css";

import { IoMdCheckmarkCircle, IoMdCloseCircle } from "react-icons/io";

function Feedback({ valid, title, children }) {
	const [isCollapsed, setIsCollapsed] = useState(true);
	const [maxHeight, setMaxHeight] = useState(0);

	const contentRef = useRef(null);

	function handleCollaps() {
		setIsCollapsed(!isCollapsed);
		isCollapsed
			? setMaxHeight(0)
			: setMaxHeight(contentRef.current.scrollHeight);
	}

	return (
		<>
			<div
				ref={contentRef}
				className={`form-check-row-wrapper 
				${isCollapsed ? "hide" : "show"}
				${valid ? "valid" : "unvalid"}`}
				onClick={() => handleCollaps()}
			>
				<div
					className={`form-check-row`}
					onClick={() => handleCollaps()}
				>
					<div className="form-check-icon">
						{valid ? (
							<IoMdCheckmarkCircle
								style={{
									height: "40%",
									width: "40%",
									fill: "green",
								}}
							/>
						) : (
							<IoMdCloseCircle
								style={{
									height: "40%",
									width: "40%",
									fill: "red",
								}}
							/>
						)}
					</div>
					<div className="form-check-title">{title}</div>
				</div>
				<div
					className="form-check-description"
					style={{ maxHeight: `${maxHeight}px` }}
				>
					<p>{children}</p>
				</div>
			</div>
		</>
	);
}

export default Feedback;
