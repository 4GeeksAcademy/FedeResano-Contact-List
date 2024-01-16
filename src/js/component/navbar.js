import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container-fluid d-flex justify-content-center">
				<div className="mx-3">
					<Link to="/">
						Contact list
					</Link>
				</div>
				<div className="mx-3">
					<Link to="/add">
						Add contact
					</Link>
				</div>
			</div>
		</nav>
	);
};
