import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
	return (
		<div className="header">
			<div id="header-logo">
				<Link to="/" className="site-title">
					Tracker
				</Link>
			</div>
			<div className="header-options">
				<span>
					<Link className="header-buttons" to="/view">
						<span>View</span>
					</Link>
				</span>
				<span>
					<Link className="header-buttons" to="/add">
						Add
					</Link>
				</span>
				<span>
					<Link className="header-buttons" to="/delete">
						Delete
					</Link>
				</span>
				<span>
					<Link className="header-buttons" to="/update">
						Update
					</Link>
				</span>
			</div>
		</div>
	);
}

export default Header;
