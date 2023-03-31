import React, { useEffect } from "react";
import styles from "./Carousel.module.css";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { CarouselLeftSwiper } from "./CarouselLeftSwiper";
import { CarouselRightSwiper } from "./CarouselRightSwiper";

export const CarouselComponent = ({ dataList, renderComponetent }) => {
  const swiper = useSwiper();
  useEffect(() => {
    // swiper.slideTo(0, 0, 0);
  }, []);

  return (
    <Swiper
      spaceBetween={40}
      slidesPerView={"auto"} //overwrite swiper-slide css in index.js if sliderperview is auto
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      initialSlide={1}
    >
      <CarouselLeftSwiper />
      {dataList.map((data) => (
        <SwiperSlide>{renderComponetent(data)}</SwiperSlide>
      ))}
      <CarouselRightSwiper />
    </Swiper>
  );
};
