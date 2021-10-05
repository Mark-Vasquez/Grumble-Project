import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { updateReview } from "../../store/review";
import styles from "./EditReview.module.css";
import Navigation from "../Navigation";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { fetchReviews } from "../../store/review";

const Ratings = [1, 2, 3, 4, 5];

const EditReview = () => {
	const history = useHistory();
	const { business_id } = useParams();
	const { review_id } = useParams();
	const user_Id = useSelector((state) => state.session.user?.id);
	// const business = useSelector((state) => state.businesses);
	const review = useSelector((state) => state.review);
	const dispatch = useDispatch();
	const reviewObj = review[review_id];

	const [rating, setRating] = useState(Ratings[0]);
	const [answer, setAnswer] = useState(reviewObj?.answer);
	const [errors, setErrors] = useState([]);

	useEffect(() => {
		dispatch(fetchReviews(business_id));
		const validationErrors = [];
		if (answer.length > 255)
			validationErrors.push("Review must be 255 characters or less");
		setErrors(validationErrors);
	}, [dispatch, answer, business_id, user_Id]);

	const onSubmit = async (e) => {
		e.preventDefault();
		await dispatch(
			updateReview(business_id, review_id, { rating, answer })
		);
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
				<h2 className={styles.wav}>Edit your Review</h2>
				<form className={styles.form} onSubmit={onSubmit}>
					<ul>
						{errors.map((error) => (
							<li key={error}>{error}</li>
						))}
					</ul>
					<label className={styles.label_rating}>Rating ⭐️</label>
					<select
						value={rating}
						onChange={(e) => setRating(e.target.value)}>
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
						onChange={(e) => setAnswer(e.target.value)}>
						{answer}
					</textarea>
					<button
						className={styles.review_btn}
						type="submit"
						disabled={errors.length > 0}>
						Submit Review
					</button>
				</form>
			</div>
			<Footer />
		</div>
	);
};

export default EditReview;
