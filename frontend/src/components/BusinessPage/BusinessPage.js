// Component for single page
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./BusinessPage.module.css";

import { fetchBusinessPage } from "../../store/business";
import { fetchReviews } from "../../store/review";
import { Link } from "react-router-dom";
import Navigation from "../Navigation";
import BusinessPageAlbum from "../BusinessPageAlbum";

const BusinessPage = () => {
	const { business_id } = useParams();
	const dispatch = useDispatch();
	const businessPage = useSelector((state) => state.businesses);
	const reviews = useSelector((state) => state.review);

	console.log("bizzz", businessPage);
	console.log("reviwwzzz", reviews);

	useEffect(() => {
		dispatch(fetchBusinessPage(business_id));
		dispatch(fetchReviews(business_id));
	}, [dispatch, business_id]);
	// dispatch get reviews businessId

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
			<BusinessPageAlbum pics={businessPage.imgURL} />
			<div className={styles.under_pics_container}>
				<div className={styles.left_container}>
					<h2>{businessPage.title}</h2>
					<p>{businessPage.description}</p>
				</div>
				<div className={styles.right_container}></div>
			</div>
		</div>
	);
};

export default BusinessPage;
