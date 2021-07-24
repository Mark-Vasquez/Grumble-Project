import styles from "./BusinessPageAlbum.module.css";

const BusinessPageAlbum = () => {
	return (
		<div>
			<div className={styles.pic_container}>
				<div className={styles.picOne}></div>
				<div className={styles.picTwo}></div>
				<div className={styles.picThree}></div>
				<div className={styles.picFour}></div>
			</div>
		</div>
	);
};

export default BusinessPageAlbum;
