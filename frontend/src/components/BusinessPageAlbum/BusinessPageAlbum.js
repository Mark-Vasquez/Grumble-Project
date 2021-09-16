import styles from "./BusinessPageAlbum.module.css";

const BusinessPageAlbum = ({ pics }) => {
	return (
		<>
			<div className={styles.pic_container}>
				{pics.map((pic) => {
					return (
						<img className={styles.pic} src={pic.imageURL} alt="" />
					);
				})}
			</div>
		</>
	);
};

export default BusinessPageAlbum;
