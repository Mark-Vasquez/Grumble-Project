// Component for single page
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./BusinessPage.module.css";

import { fetchBusinessPage } from "../../store/business";
import { fetchReviews } from "../../store/review";
import { Link } from "react-router-dom";
import Navigation from "../Navigation";

const BusinessPage = () => {
	const { business_id } = useParams();
	const dispatch = useDispatch();
	const businessPage = useSelector((state) => state.businesses);

	console.log(businessPage);

	useEffect(() => {
		dispatch(fetchBusinessPage(business_id));
		dispatch(fetchReviews(business_id));
	}, [dispatch, business_id]);
	// dispatch get reviews businessId

	return (
		<div>
			<div className={styles.navbar}>
				<div className={styles.left_nav}>
					<Link to="/">
						<div className={styles.logo}></div>
					</Link>
				</div>
				<div className={styles.mid_nav}>
					<div className={styles.search}></div>
				</div>
				<div className={styles.right_nav}>
					<Navigation className={styles.nav} />
				</div>
			</div>
			<h2>{businessPage.title}</h2>
			<p>{businessPage.description}</p>
		</div>
	);
};

export default BusinessPage;
