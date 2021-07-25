import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";
import Navigation from "../Navigation";

const HomePage = () => {
	return (
		<>
			<Navigation className={styles.navbar} />
			<div className={styles.page_container}>
				<div className={styles.banner}>
					<div className={styles.inner_middle_banner}>
						<Link to="/">
							<div className={styles.logo_div}></div>
						</Link>
						<div>
							<p className={styles.motto}>We have the eats.</p>
						</div>
					</div>
				</div>
				<div className={styles.mid_page}>
					<Link className={styles.flexer} to="/businesses">
						<div className={styles.restaurant_text}>Restaurants</div>
						<div>
							<img
								src={
									require("../../images/outline_flatware_black_48dp.png")
										.default
								}
								alt="silverware"
							/>
						</div>
					</Link>
				</div>
				<div className={styles.footer_div}>
					<div className={styles.footer_image}></div>
				</div>
			</div>
		</>
	);
};

export default HomePage;
