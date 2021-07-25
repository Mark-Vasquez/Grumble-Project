import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import styles from "./Navigation.module.css";

function ProfileButton({ user }) {
	const dispatch = useDispatch();
	const [showMenu, setShowMenu] = useState(false);

	const openMenu = () => {
		if (showMenu) return;
		setShowMenu(true);
	};

	useEffect(() => {
		if (!showMenu) return;

		const closeMenu = () => {
			setShowMenu(false);
		};

		document.addEventListener("click", closeMenu);

		return () => document.removeEventListener("click", closeMenu);
	}, [showMenu]);

	const logout = (e) => {
		e.preventDefault();
		dispatch(sessionActions.logout());
	};

	return (
		<>
			<button className={styles.nav_btn} onClick={openMenu}>
				<i className="fad fa-pizza-slice"></i>
			</button>
			{showMenu && (
				<ul className={styles.profile_dropdown}>
					<li className={styles.userFont}>{user.username}</li>
					<li className={styles.userFont}>{user.email}</li>
					<li>
						<button className={styles.logout_button} onClick={logout}>
							Log Out
						</button>
					</li>
				</ul>
			)}
		</>
	);
}

export default ProfileButton;
