import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { updateReview } from "../../store/review";

const Ratings = [1, 2, 3, 4, 5];

const EditReview = () => {
	const history = useHistory();
	const { business_id } = useParams();
	const { review_id } = useParams();
	const user_Id = useSelector((state) => state.session.user.id);
	const business = useSelector((state) => state.businesses);
	// const review = useSelector((state) => state.review);
	const dispatch = useDispatch();
	console.log("bidnessParam", business_id);
	console.log("bidnessSelector", business);
	console.log("revs", review_id);

	const [rating, setRating] = useState(Ratings[0]);
	const [answer, setAnswer] = useState("");
	const [errors, setErrors] = useState([]);

	useEffect(() => {
		const validationErrors = [];
		if (answer.length > 255)
			validationErrors.push("Review must be 255 characters or less");
		setErrors(validationErrors);
	}, [answer, business_id, user_Id]);

	const onSubmit = async (e) => {
		e.preventDefault();
		await dispatch(updateReview(business_id, review_id, { rating, answer }));
		history.push(`/businesses/${business_id}`);
	};

	return (
		<div>
			<h2>Write a Review</h2>
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
				<label>Share your experience!</label>
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

export default EditReview;
