import React from "react";
import { useSwiper } from "swiper/react";
import styles from "./CarouselRightSwiper.module.css";

export const CarouselRightSwiper = () => {
  const swiper = useSwiper();
  const handleSwipe = () => {
    swiper.slideNext();
  };

  return (
    <div onClick={handleSwipe} className={styles.container}>
      <img
        src={require("../../assets/right_slide_logo.png")}
        alt="right Slide"
      />
    </div>
  );
};
