import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				Contact list
			</Link>
			<div className="ml-auto">
				<Link to="/add">
					Add contact
				</Link>
			</div>
		</nav>
	);
};
