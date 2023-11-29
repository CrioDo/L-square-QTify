import React from "react";
import styles from "./MenuItem.module.css";
import { useNavigate } from "react-router-dom";

const MenuItem = ({ item }) => {
	const navigate = useNavigate();

	return (
		<>
			<div
				className={styles.wrapper}
				onClick={() => navigate(`/album/${item?.slug}`)}>
				<div className={styles.imgTextWrapper}>
					<div className={styles.thumbnailWrapper}>
						<img src={item?.image} alt="albumImage" width="66" height="71" />
					</div>
					<h4>{item?.title}</h4>
				</div>

				<div className={styles.followWrapper}>
					<h4>{item?.follows} Follows</h4>
				</div>
			</div>
		</>
	);
};

export default MenuItem;
