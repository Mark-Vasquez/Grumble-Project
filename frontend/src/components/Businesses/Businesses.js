// import hooks from react and react-redux
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

//import thunk creator from store
import { fetchBusinesses } from "../../store/business";
import styles from "./Businesses.module.css";

const Businesses = () => {
	// Declare variables from hooks
	const dispatch = useDispatch();
	const businesses = useSelector((state) => Object.values(state.businesses)); // use key used in root reducer
	console.log(businesses);

	console.log("Log");

	// Use a react hook and cause side effect
	useEffect(() => {
		dispatch(fetchBusinesses());
	}, [dispatch]);

	return (
		<div>
			<ul>
				{businesses.map((business) => (
					<li>
						<Link to={`/businesses/${business.id}`} key={business.id}>
							{business.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Businesses;
