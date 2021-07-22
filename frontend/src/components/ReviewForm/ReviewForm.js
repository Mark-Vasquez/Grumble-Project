import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";

import { createReview } from "../../store/review";

const Ratings = [1, 2, 3, 4, 5];

const Review = () => {
	const history = useHistory();
	const { business_id } = useParams();
	const userId = useSelector((state) => state.session.user.id);
	const dispatch = useDispatch();

	const [rating, setRating] = useState(Ratings[4]);
	const [answer, setAnswer] = useState("");
	const [errors, setErrors] = useState([]);

	useEffect(() => {
		const validationErrors = [];
		if (answer.length > 255)
			validationErrors.push("Review must be 255 characters or less");
		setErrors(validationErrors);
	}, [answer, business_id, userId]);

	const onSubmit = (e) => {
		e.preventDefault();
		dispatch(createReview(business_id, userId, { rating, answer }));
		history.push(`/businesses/${business_id}`);
	};

	return (
		<div>
			<h2>Write a review</h2>
			<form onSubmit={onSubmit}>
				<ul>
					{errors.map((error) => (
						<li key={error}>{error}</li>
					))}
				</ul>
				<label>Rating</label>
				<select value={rating} onChange={(e) => setRating(e.target.value)}>
					{Ratings.map((rating) => (
						<option key={rating} value={rating}>
							{rating}
						</option>
					))}
				</select>
				<label>Write a Review!</label>
				<textarea
					required
					name="name"
					value={answer}
					onChange={(e) => setAnswer(e.target.value)}
				>
					{answer}
				</textarea>
				<button type="submit" disabled={errors.length > 0}>
					Submit Review
				</button>
			</form>
		</div>
	);
};

export default Review;
