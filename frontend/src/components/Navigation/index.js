import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import Businesses from "../Businesses";
import styles from "./Navigation.module.css";

function Navigation({ isLoaded }) {
	const sessionUser = useSelector((state) => state.session.user);

	let sessionLinks;
	if (sessionUser) {
		sessionLinks = <ProfileButton user={sessionUser} />;
	} else {
		sessionLinks = (
			<>
				<button>
					<NavLink to="/login">Log In</NavLink>
				</button>
				<button>
					<NavLink to="/signup">Sign Up</NavLink>
				</button>
			</>
		);
	}

	return (
		<div>
			<button>
				<NavLink exact to="/">
					Home
				</NavLink>
			</button>
			{isLoaded && sessionLinks}
			<div>
				<NavLink to="/businesses">
					<Businesses />
				</NavLink>
			</div>
		</div>
	);
}

export default Navigation;
