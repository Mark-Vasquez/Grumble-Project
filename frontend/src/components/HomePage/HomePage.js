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
				<div className={styles.mid_page}>hello, Earl!</div>
				<div className={styles.footer_div}>
					<div className={styles.footer_image}></div>
				</div>
			</div>
		</>
	);
};

export default HomePage;
