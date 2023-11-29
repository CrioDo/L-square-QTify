import React, { useEffect } from "react";
import { useSwiper } from "swiper/react";
import { useState } from "react";
import styles from "../Carousel.module.css";
import { ReactComponent as RightArrow } from "../../../assets/RightArrow.svg";

const CarouselRightNavigation = () => {
	const swiper = useSwiper();

	const [isEnd, setIsEnd] = useState(swiper.isEnd);

	useEffect(() => {
		swiper.on("slideChange", () => {
			setIsEnd(swiper.isEnd);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className={styles.rightNavigation}>
			{!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
		</div>
	);
};

export default CarouselRightNavigation;
