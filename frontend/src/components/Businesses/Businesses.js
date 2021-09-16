// import hooks from react and react-redux
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navigation from "../Navigation";

//import thunk creator from store
import { fetchBusinesses } from "../../store/business";
import styles from "./Businesses.module.css";
import Footer from "../Footer/Footer";

const Businesses = () => {
	// Declare variables from hooks
	const dispatch = useDispatch();
	const businesses = useSelector((state) => Object.values(state?.businesses)); // use key used in root reducer
	console.log("SHIT", businesses);

	// Use a react hook and cause side effect
	useEffect(() => {
		dispatch(fetchBusinesses());
	}, []);

	return (
		<div>
			<div className={styles.navbar}>
				<div className={styles.right_nav}></div>
				<Navigation />
				{/* <div className={styles.mid_nav}>
					<div className={styles.search}></div>
				</div> */}
				<div className={styles.left_nav}>
					<Link to="/">
						<div className={styles.logo}></div>
					</Link>
				</div>
			</div>
			<div className={styles.page_container}>
				<div className={styles.left_side_container}>
					{console.log("biznesSSSS", businesses)}
					{businesses?.map((business) => {
						{
							console.log("dabiz", business);
						}
						return (
							<div className={styles.restaurant_container}>
								<div className={styles.pic_container}>
									<Link to={`/businesses/${business?.id}`}>
										<img
											className={styles.picZero}
											src={business?.Images[1]?.imageURL}
											alt="pic"
										/>
									</Link>
								</div>
								<div className={styles.info_container}>
									<div className={styles.title}>
										{business?.title}
									</div>
									<div className={styles.rating}>
										{/* {businesses[0]?.rating} ⭐️⭐️⭐️⭐️ */}
									</div>
									<div className={styles.description}>
										{business?.description}
									</div>
								</div>
								<div className={styles.address_container}>
									<div className={styles.address}>
										{business?.address}
									</div>
									<div className={styles.address}>
										{business?.city}
									</div>
									<div className={styles.address}>
										{business?.zipCode}
									</div>
								</div>
							</div>
						);
					})}
					{/* <div className={styles.restaurant_container}>
						<div className={styles.pic_container}>
							<Link to={`/businesses/${businesses[1]?.id}`}>
								<div className={styles.picOne}></div>
							</Link>
						</div>
						<div className={styles.info_container}>
							<div className={styles.title}>
								{businesses[1]?.title}
							</div>
							<div className={styles.rating}>
								{businesses[1]?.rating} ⭐️
							</div>
							<div className={styles.description}>
								{businesses[1]?.description}
							</div>
						</div>
						<div className={styles.address_container}>
							<div className={styles.address}>
								{businesses[1]?.address}
							</div>
							<div className={styles.address}>
								{businesses[1]?.city}
							</div>
							<div className={styles.address}>
								{businesses[1]?.zipCode}
							</div>
						</div>
					</div>
					<div className={styles.restaurant_container}>
						<div className={styles.pic_container}>
							<Link to={`/businesses/${businesses[2]?.id}`}>
								<div className={styles.picTwo}></div>
							</Link>
						</div>
						<div className={styles.info_container}>
							<div className={styles.title}>
								{businesses[2]?.title}
							</div>
							<div className={styles.rating}>
								{businesses[2]?.rating} ⭐️⭐️⭐️
							</div>
							<div className={styles.description}>
								{businesses[2]?.description}
							</div>
						</div>
						<div className={styles.address_container}>
							<div className={styles.address}>
								{businesses[2]?.address}
							</div>
							<div className={styles.address}>
								{businesses[2]?.city}
							</div>
							<div className={styles.address}>
								{businesses[2]?.zipCode}
							</div>
						</div>
					</div>
					<div className={styles.restaurant_container}>
						<div className={styles.pic_container}>
							<Link to={`/businesses/${businesses[3]?.id}`}>
								<div className={styles.picThree}></div>
							</Link>
						</div>
						<div className={styles.info_container}>
							<div className={styles.title}>
								{businesses[3]?.title}
							</div>
							<div className={styles.rating}>
								{businesses[3]?.rating} ⭐️⭐️⭐️⭐️
							</div>
							<div className={styles.description}>
								{businesses[3]?.description}
							</div>
						</div>
						<div className={styles.address_container}>
							<div className={styles.address}>
								{businesses[3]?.address}
							</div>
							<div className={styles.address}>
								{businesses[3]?.city}
							</div>
							<div className={styles.address}>
								{businesses[3]?.zipCode}
							</div>
						</div>
					</div>
					<div className={styles.restaurant_container}>
						<div className={styles.pic_container}>
							<Link to={`/businesses/${businesses[4]?.id}`}>
								<div className={styles.picFour}></div>
							</Link>
						</div>
						<div className={styles.info_container}>
							<div className={styles.title}>
								{businesses[4]?.title}
							</div>
							<div className={styles.rating}>
								{businesses[4]?.rating} ⭐️⭐️⭐️
							</div>
							<div className={styles.description}>
								{businesses[4]?.description}
							</div>
						</div>
						<div className={styles.address_container}>
							<div className={styles.address}>
								{businesses[4]?.address}
							</div>
							<div className={styles.address}>
								{businesses[4]?.city}
							</div>
							<div className={styles.address}>
								{businesses[4]?.zipCode}
							</div>
						</div>
					</div>
					<div className={styles.restaurant_container}>
						<div className={styles.pic_container}>
							<Link to={`/businesses/${businesses[5]?.id}`}>
								<div className={styles.picFive}></div>
							</Link>
						</div>
						<div className={styles.info_container}>
							<div className={styles.title}>
								{businesses[5]?.title}
							</div>
							<div className={styles.rating}>
								{businesses[5]?.rating} ⭐️⭐️⭐️⭐️⭐️
							</div>
							<div className={styles.description}>
								{businesses[5]?.description}
							</div>
						</div>
						<div className={styles.address_container}>
							<div className={styles.address}>
								{businesses[5]?.address}
							</div>
							<div className={styles.address}>
								{businesses[5]?.city}
							</div>
							<div className={styles.address}>
								{businesses[5]?.zipCode}
							</div>
						</div>
					</div>
					<div className={styles.restaurant_container}>
						<div className={styles.pic_container}>
							<Link to={`/businesses/${businesses[6]?.id}`}>
								<div className={styles.picSix}></div>
							</Link>
						</div>
						<div className={styles.info_container}>
							<div className={styles.title}>
								{businesses[6]?.title}
							</div>
							<div className={styles.rating}>
								{businesses[6]?.rating} ⭐️⭐️
							</div>
							<div className={styles.description}>
								{businesses[6]?.description}
							</div>
						</div>
						<div className={styles.address_container}>
							<div className={styles.address}>
								{businesses[6]?.address}
							</div>
							<div className={styles.address}>
								{businesses[6]?.city}
							</div>
							<div className={styles.address}>
								{businesses[6]?.zipCode}
							</div>
						</div>
					</div>
					<div className={styles.restaurant_container}>
						<div className={styles.pic_container}>
							<Link to={`/businesses/${businesses[7]?.id}`}>
								<div className={styles.picSeven}></div>
							</Link>
						</div>
						<div className={styles.info_container}>
							<div className={styles.title}>
								{businesses[7]?.title}
							</div>
							<div className={styles.rating}>
								{businesses[7]?.rating} ⭐️⭐️⭐️
							</div>
							<div className={styles.description}>
								{businesses[7]?.description}
							</div>
						</div>
						<div className={styles.address_container}>
							<div className={styles.address}>
								{businesses[7]?.address}
							</div>
							<div className={styles.address}>
								{businesses[7]?.city}
							</div>
							<div className={styles.address}>
								{businesses[7]?.zipCode}
							</div>
						</div>
					</div>
					<div className={styles.restaurant_container}>
						<div className={styles.pic_container}>
							<Link to={`/businesses/${businesses[8]?.id}`}>
								<div className={styles.picEight}></div>
							</Link>
						</div>
						<div className={styles.info_container}>
							<div className={styles.title}>
								{businesses[8]?.title}
							</div>
							<div className={styles.rating}>
								{businesses[8]?.rating} ⭐️⭐️⭐️⭐️
							</div>
							<div className={styles.description}>
								{businesses[8]?.description}
							</div>
						</div>
						<div className={styles.address_container}>
							<div className={styles.address}>
								{businesses[8]?.address}
							</div>
							<div className={styles.address}>
								{businesses[8]?.city}
							</div>
							<div className={styles.address}>
								{businesses[8]?.zipCode}
							</div>
						</div>
					</div>
					<div className={styles.restaurant_container}>
						<div className={styles.pic_container}>
							<Link to={`/businesses/${businesses[9]?.id}`}>
								<div className={styles.picNine}></div>
							</Link>
						</div>
						<div className={styles.info_container}>
							<div className={styles.title}>
								{businesses[9]?.title}
							</div>
							<div className={styles.rating}>
								{businesses[9]?.rating} ⭐️⭐️⭐️⭐️⭐️
							</div>
							<div className={styles.description}>
								{businesses[9]?.description}
							</div>
						</div>
						<div className={styles.address_container}>
							<div className={styles.address}>
								{businesses[9]?.address}
							</div>
							<div className={styles.address}>
								{businesses[9]?.city}
							</div>
							<div className={styles.address}>
								{businesses[9]?.zipCode}
							</div>
						</div>
					</div> */}
				</div>
				<div className={styles.mapDiv}></div>
			</div>
			<Footer />
		</div>
	);
};

export default Businesses;

{
	/* <ul>
  {businesses.map((business) => (
    <li>
      <Link to={`/businesses/${business.id}`} key={business.id}>
        {business.title}
      </Link>
      <p>{business.description}</p>
    </li>
  ))}
</ul> */
}
