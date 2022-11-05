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
					<Link to="/add"> Add </Link>
				</span>

				<span>
					<Link to="/view"> View </Link>
				</span>

				<span>
					<Link to="/delete"> Delete </Link>
				</span>

				<span>
					<Link to="/update"> Update </Link>
				</span>
			</div>
		</div>
	);
}

export default Header;
