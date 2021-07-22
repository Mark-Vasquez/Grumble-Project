import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";
import Navigation from "../Navigation";

const HomePage = () => {
	return (
		<>
			<Navigation />
			<div className={styles.banner}>
				<div className={styles.inner_middle_banner}>
					<Link to="/">
						<div className={styles.logo_div}></div>
					</Link>
					<div>Search Bar</div>
				</div>
			</div>
			<div className={styles.mid_page}></div>
			<div className={styles.footer_div}>
				<div className={styles.footer_image}></div>
			</div>
		</>
	);
};

export default HomePage;
