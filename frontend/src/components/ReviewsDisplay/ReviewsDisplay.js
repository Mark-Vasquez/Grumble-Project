// Component for single page
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./ReviewsDisplay.module.css";

import { fetchReviews } from "../../store/review";

const ReviewsDisplay = () => {
	const { business_id } = useParams();
	const dispatch = useDispatch();
	const reviews = useSelector((state) => state.review);

	// reviews into array and map through in jsx to show each review

	// console.log(reviews.rating);
	console.log("reviews!!", reviews);
	// compare 2 ids

	useEffect(() => {
		dispatch(fetchReviews(business_id));
	}, [dispatch, business_id]);
	// dispatch get reviews businessId

	return (
		<div>
			<h2>hello</h2>
			<h2>{reviews.rating}</h2>
			<p>{reviews.answer}</p>
		</div>
	);
};

export default ReviewsDisplay;
