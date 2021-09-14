import styles from "./Footer.module.css";
import linkedinLogo from "../../images/icons8-linkedin-64.png";
import githubLogo from "../../images/icons8-github-192.png";

const Footer = () => {
	return (
		<>
			<div className={styles.footer_div}>
				{/* <div className={styles.footer_image}></div> */}
				<div className={styles.about_links_container}>
					<div className={styles.about_links_inner_top}>
						<div className={styles.linkedin_container}>
							<a
								className={styles.linked_in_text}
								target="_blank"
								rel="noopener noreferrer"
								href="https://www.linkedin.com/in/mark-vasquez-439858212/">
								Linkedin
								<img
									className={styles.linked_in_logo}
									src={linkedinLogo}
									alt="LinkedIn"
								/>
							</a>
						</div>
						<div className={styles.github_container}>
							{" "}
							<a
								className={styles.github_text}
								target="_blank"
								rel="noopener noreferrer"
								href="https://github.com/Mark-Vasquez/Grumble-Project">
								GitHub
								<img
									className={styles.github_logo}
									src={githubLogo}
									alt="GitHub"
								/>
							</a>
						</div>
					</div>
				</div>
				<div className={styles.name_container}>
					<span className={styles.name_text}>
						Foodlewd developed by Mark Vasquez
					</span>
				</div>
			</div>
		</>
	);
};

export default Footer;
