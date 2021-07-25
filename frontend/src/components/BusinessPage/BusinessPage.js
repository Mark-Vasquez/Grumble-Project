// Component for single page
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import styles from "./BusinessPage.module.css";
import { fetchBusinessPage } from "../../store/business";
import { fetchReviews } from "../../store/review";
import { deleteReview } from "../../store/review";
import { Link } from "react-router-dom";
import Navigation from "../Navigation";
import BusinessPageAlbum from "../BusinessPageAlbum";

const BusinessPage = () => {
	const history = useHistory();
	const { business_id } = useParams();
	const dispatch = useDispatch();
	const businessPage = useSelector((state) => state.businesses);
	const reviews = useSelector((state) => Object.values(state.review));
	const user_id = useSelector((state) => state.session.user.id);

	console.log("bizzzSelectorId", businessPage);
	console.log("bizzzParamzz", +business_id);
	console.log("reviezuh", reviews);

	useEffect(() => {
		dispatch(fetchBusinessPage(business_id));
		dispatch(fetchReviews(business_id));
	}, [dispatch, business_id]);

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
			<BusinessPageAlbum pics={businessPage?.imgURL} />
			<div className={styles.under_pics_container}>
				<div className={styles.left_container}>
					<div className={styles.title_div}>
						<h2 className={styles.title}>{businessPage?.title}</h2>
						<br />
						<p className={styles.address}>
							{businessPage?.address}, {businessPage?.city},{" "}
							{businessPage?.state}
						</p>
						<p className={styles.zip}>{businessPage?.zipCode}</p>
					</div>
					<div className={styles.description_div}>
						<p className={styles.about}>About the Business</p>
						<br />
						<p className={styles.description}>{businessPage?.description}</p>
					</div>
					<div className={styles.reviewbtn_div}>
						<Link
							to={`/businesses/${businessPage?.id}/reviews/new`}
							className={styles.reviewbtn}
						>
							Write a review!
						</Link>
					</div>
					<div className={styles.review_caption}>
						<p className={styles.review_container}>Reviews</p>
					</div>
					{reviews.map((review) => {
						if (
							user_id === review.userId &&
							+business_id === review.businessId
						) {
							return (
								<div key={review.id} className={styles.reviewDiv}>
									<div className={styles.left_review}>
										<div className={styles.username}>
											{review?.User?.username}
										</div>
										<div>{review?.rating} ⭐️ Review</div>
									</div>
									<div className={styles.user_middle}>
										<div className={styles.review_answer}>{review?.answer}</div>
									</div>
									<div className={styles.user_right}>
										<Link
											to={`/review/${review.id}/edit/${business_id}`}
											className={styles.user_edit}
										>
											Edit
										</Link>
										<Link
											className={styles.user_delete}
											onClick={async () => {
												console.log("look her");
												console.log("yououuou", review.id);
												await dispatch(deleteReview(review?.id));
												history.push(`/businesses/${business_id}`);
											}}
										>
											Delete
										</Link>
									</div>
								</div>
							);
						} else {
							return;
						}
					})}
					{reviews.map((review) => {
						// eslint-disable-next-line no-lone-blocks
						if (
							user_id !== review.userId &&
							review.userId !== undefined &&
							+business_id === review.businessId
						) {
							return (
								<div key={review.id} className={styles.reviewDiv}>
									<div className={styles.left_review}>
										<div className={styles.username}>
											{review?.User?.username}
										</div>
										<div>{review?.rating} ⭐️ Review</div>
									</div>
									<div className={styles.right_review}>
										<div className={styles.review_answer}>{review?.answer}</div>
									</div>
									<div className={styles.user_right}>
										<Link
											to={`/review/edit/${business_id}`}
											className={styles.hidden_edit}
										></Link>
										<Link className={styles.hidden_delete}></Link>
									</div>
								</div>
							);
						} else {
							return;
						}
					})}
				</div>
				<div className={styles.right_container}></div>
			</div>
		</div>
	);
};

export default BusinessPage;
