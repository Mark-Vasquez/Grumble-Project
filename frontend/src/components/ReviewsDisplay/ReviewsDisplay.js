// Component for single page
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./ReviewsDisplay.module.css";

import { fetchReviews } from "../../store/review";

const ReviewsDisplay = () => {
	const { business_id } = useParams();
	const dispatch = useDispatch();
	const reviews = useSelector((state) => Object.values(state.review));

	// reviews into array and map through in jsx to show each review

	useEffect(() => {
		dispatch(fetchReviews(business_id));
	}, [dispatch, business_id]);

	return (
		<div className={styles.review_container}>
			{reviews.map((review) => (
				<div key={review.id}>
					<div className={styles.name_div}>
						<div className={styles.name}>{review?.User?.username}</div>
						<div className={styles.rating}>{review.rating}</div>
					</div>
					<div className={styles.review_div}>{review.answer}</div>
				</div>
			))}
			{/* <ul>
				{reviews.map((review) => (
					<li key={review.id}>{review.answer}</li>
				))}
			</ul> */}
		</div>
	);
};

export default ReviewsDisplay;
