import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { createReview } from "../../store/review";
import styles from "./ReviewForm.module.css";
import { Link } from "react-router-dom";
import Navigation from "../Navigation";

const Ratings = [1, 2, 3, 4, 5];

const Review = () => {
	const history = useHistory();
	const { business_id } = useParams();
	const user_Id = useSelector((state) => state.session.user.id);
	const dispatch = useDispatch();

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
		await dispatch(createReview(business_id, user_Id, { rating, answer }));
		history.push(`/businesses/${business_id}`);
	};

	return (
		<div>
			<div className={styles.navbar}>
				<div className={styles.right_nav}></div>
				<Navigation />
				<div className={styles.mid_nav}>
					<div className={styles.search}></div>
				</div>
				<div className={styles.left_nav}>
					<Link to="/">
						<div className={styles.logo}></div>
					</Link>
				</div>
			</div>
			<div className={styles.under_nav_container}>
				<h2 className={styles.wav}>Write a Review</h2>
				<form className={styles.form} onSubmit={onSubmit}>
					<ul>
						{errors.map((error) => (
							<li key={error}>{error}</li>
						))}
					</ul>
					<label className={styles.label_rating}>Rating ⭐️</label>
					<select value={rating} onChange={(e) => setRating(e.target.value)}>
						{Ratings.map((rating) => (
							<option key={rating} value={rating}>
								{rating}
							</option>
						))}
					</select>
					<label>Share your experience! ⭐️</label>
					<textarea
						required
						name="name"
						value={answer}
						onChange={(e) => setAnswer(e.target.value)}
					>
						{answer}
					</textarea>
					<button
						className={styles.review_btn}
						type="submit"
						disabled={errors.length > 0}
					>
						Submit Review
					</button>
				</form>
			</div>
		</div>
	);
};

export default Review;
