import React, { useState } from "react";
import styles from "./Section.module.css";
import Card from "../../components/Card/Card";
import Carousel from "../Carousel/Carousel";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";

const Section = ({ title, data, type, header, loadingState }) => {
	const [carouselToggle, setCarouselToggle] = useState(true);
	const _handleToggle = () => {
		setCarouselToggle(!carouselToggle);
	};

	return (
		<div className={styles.sectionWrapper}>
			{header === "all" ? (
				<></>
			) : (
				<div className={styles.header}>
					<h3>{title}</h3>
					<h4 className={styles.toggleText} onClick={_handleToggle}>
						{carouselToggle ? "Show all" : "Collapse"}
					</h4>
				</div>
			)}

			{data?.length ? (
				<div className={styles.cardWrapper}>
					{!carouselToggle ? (
						<div className={styles.wrapper}>
							{data?.map((item) => (
								<Card data={item} type={type} key={item.id} />
							))}
						</div>
					) : (
						<Carousel
							data={data}
							renderCardComponent={(item) => <Card data={item} type={type} />}
						/>
					)}
				</div>
			) : loadingState ? (
				<SkeletonLoader name={"card"} count={5} />
			) : (
				<p>No Data found</p>
			)}
		</div>
	);
};

export default Section;
