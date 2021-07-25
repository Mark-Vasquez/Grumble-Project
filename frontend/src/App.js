import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
// import Navigation from "./components/Navigation";
import Businesses from "./components/Businesses";
import BusinessPage from "./components/BusinessPage";
import ReviewForm from "./components/ReviewForm";
import HomePage from "./components/HomePage";
import EditReview from "./components/EditReview";
import ReviewsDisplay from "./components/ReviewsDisplay";

function App() {
	const dispatch = useDispatch();
	const [isLoaded, setIsLoaded] = useState(false);
	useEffect(() => {
		dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
	}, [dispatch]);

	return (
		<>
			{isLoaded && (
				<Switch>
					<Route exact path="/">
						<HomePage />
					</Route>
					<Route path="/login">
						<LoginFormPage />
					</Route>
					<Route path="/signup">
						<SignupFormPage />
					</Route>
					<Route exact path="/businesses/:business_id/reviews">
						<ReviewsDisplay />
					</Route>
					<Route path="/businesses/:business_id/reviews/new">
						<ReviewForm />
					</Route>
					<Route path="/review/:review_id/edit/:business_id">
						<EditReview />
					</Route>
					<Route path="/businesses/:business_id">
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
