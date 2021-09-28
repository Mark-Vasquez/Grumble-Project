import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import styles from "./LoginForm.module.css";
import Navigation from "../Navigation";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

function LoginFormPage() {
	const dispatch = useDispatch();
	const sessionUser = useSelector((state) => state.session.user);
	const [credential, setCredential] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState([]);

	if (sessionUser) return <Redirect to="/" />;

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors([]);
		return dispatch(sessionActions.login({ credential, password })).catch(
			async (res) => {
				const data = await res.json();
				if (data && data.errors) setErrors(data.errors);
			}
		);
	};

	return (
		<div>
			<div className={styles.navbar}>
				<div className={styles.right_nav}></div>
				<Navigation />
				{/* <div className={styles.mid_nav}>
					<div className={styles.search}></div>
				</div> */}
				<div className={styles.left_nav}>
					<Link to="/">
						<div className={styles.logo}></div>
					</Link>
				</div>
			</div>
			<div className={styles.under_nav_container}>
				<form className={styles.login_form} onSubmit={handleSubmit}>
					<ul>
						{errors.map((error, idx) => (
							<li key={idx}>{error}</li>
						))}
					</ul>
					<label className={styles.username}>
						Username or Email
						<input
							type="text"
							value={credential}
							onChange={(e) => setCredential(e.target.value)}
							required
						/>
					</label>
					<label className={styles.password}>
						Password
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</label>
					<button className={styles.submit_btn} type="submit">
						Log In
					</button>
				</form>
			</div>
			<Footer />
		</div>
	);
}

export default LoginFormPage;
