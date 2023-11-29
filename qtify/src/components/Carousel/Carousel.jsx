import React from "react";
import styles from "./Carousel.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { useSwiper } from "swiper/react";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";
import { useEffect } from "react";

const Controls = ({ data }) => {
	const { swiper } = useSwiper();

	useEffect(() => {
		swiper?.slideTo(0);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);

	return <></>;
};

const Carousel = ({ data, renderCardComponent }) => {
	return (
		<div className={styles.wrapper}>
			<Swiper
				initialSlide={0}
				modules={{ Navigation }}
				slidesPerView={"auto"}
				spaceBetween={10}
				allowTouchMove>
				<Controls data={data} />
				<CarouselLeftNavigation />
				<CarouselRightNavigation />
				{data?.map((item) => (
					<SwiperSlide key={item?.id}>{renderCardComponent(item)}</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Carousel;
