// Component for single page
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./BusinessPage.module.css";

import { fetchBusinessPage } from "../../store/business";

const BusinessPage = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const businessPage = useSelector((state) => state.businesses);
	console.log(businessPage);

	useEffect(() => {
		dispatch(fetchBusinessPage(id));
	}, [dispatch, id]);

	return (
		<div>
			<h2>{businessPage.title}</h2>
			<p>{businessPage.description}</p>
		</div>
	);
};

export default BusinessPage;
