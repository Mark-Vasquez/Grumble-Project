import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Businesses from "./components/Businesses";
import BusinessPage from "./components/BusinessPage";
import Review from "./components/ReviewForm/ReviewForm";

function App() {
	const dispatch = useDispatch();
	const [isLoaded, setIsLoaded] = useState(false);
	useEffect(() => {
		dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
	}, [dispatch]);

	return (
		<>
			<Navigation isLoaded={isLoaded} />
			{isLoaded && (
				<Switch>
					<Route path="/login">
						<LoginFormPage />
					</Route>
					<Route path="/signup">
						<SignupFormPage />
					</Route>
					<Route path="/businesses/:business_id/reviews">
						<Review />
					</Route>
					<Route path="/businesses/:id">
						<BusinessPage />
					</Route>
					<Route path="/businesses">
						<Businesses />
					</Route>
				</Switch>
			)}
		</>
	);
}

export default App;
