import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProfileButton from "./ProfileButton";
import styles from "./Navigation.module.css";
import { logout } from "../../store/session";
import { login } from "../../store/session";

function Navigation({ isLoaded }) {
	const dispatch = useDispatch();
	const sessionUser = useSelector((state) => state.session.user);

	const log_out = (e) => {
		e.preventDefault();
		dispatch(logout());
	};

	const loginDemo = async () => {
		await dispatch(
			login({ credential: "demo@user.io", password: "password" })
		);
	};

	let sessionLinks;
	if (sessionUser) {
		// sessionLinks = <ProfileButton user={sessionUser} />;
		sessionLinks = (
			<>
				<button className={styles.logout_button} onClick={log_out}>
					Log Out
				</button>
				<div className={styles.greetings}>
					<p className={styles.userFont}>
						Hello, {sessionUser.username}
					</p>
				</div>
				{/* <p className={styles.userFont}>{sessionUser.email}</p> */}
			</>
		);
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
				<button onClick={loginDemo} className={styles.signup_btn}>
					<p className={styles.signup_text}>Demo</p>
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
