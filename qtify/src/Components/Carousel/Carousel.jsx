import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import CarouselLeftButton from "../CarouselLeftButton/CarouselLeftButton";
import CarouselRightButton from "../CarouselRightButton/CarouselRightButton";
import styles from "./Carousel.module.css";
import "swiper/css";
import "swiper/css/navigation";

export default function Carousel({ data, renderItem }) {
  const swiperRef = useRef(null);

  return (
    <div className={styles.carouselContainer}>
      <CarouselLeftButton
        onClick={() => swiperRef.current?.swiper.slidePrev()}
        disabled={swiperRef.current?.swiper.isBeginning}
      />
      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        spaceBetween={24}
        slidesPerView="auto"
        breakpoints={{
          320: { slidesPerView: 2 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
        className={styles.swiper}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} className={styles.slide}>
            {renderItem(item)}
          </SwiperSlide>
        ))}
      </Swiper>
      <CarouselRightButton
        onClick={() => swiperRef.current?.swiper.slideNext()}
        disabled={swiperRef.current?.swiper.isEnd}
      />
    </div>
  );
}
