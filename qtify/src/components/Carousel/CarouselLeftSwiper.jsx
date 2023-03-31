import React from "react";
import { useSwiper } from "swiper/react";
import styles from "./CarouselLeftSwiper.module.css";

export const CarouselLeftSwiper = () => {
  const swiper = useSwiper();
  const handleSwipe = () => {
    swiper.slidePrev();
  };

  return (
    <div onClick={handleSwipe} className={styles.container}>
      <img src={require("../../assets/left_slide_logo.png")} alt="left Slide" />
    </div>
  );
};
