import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import styles from "./Navigation.module.css";
import { logout } from "../../store/session";

function Navigation({ isLoaded }) {
	const sessionUser = useSelector((state) => state.session.user);

	let sessionLinks;
	if (sessionUser) {
		sessionLinks = <ProfileButton user={sessionUser} />;
	} else {
		sessionLinks = (
			<>
				<button className={styles.login_btn}>
					<NavLink className={styles.login_text} to="/login">
						Log In
					</NavLink>
				</button>
				<button className={styles.signup_btn}>
					<NavLink className={styles.signup_text} to="/signup">
						Sign Up
					</NavLink>
				</button>
			</>
		);
	}

	return (
		<div className={styles.navbar}>
			<button className={styles.home_btn}>
				<NavLink className={styles.home_text} exact to="/">
					Home
				</NavLink>
			</button>
			{sessionLinks}
		</div>
	);
}

export default Navigation;
