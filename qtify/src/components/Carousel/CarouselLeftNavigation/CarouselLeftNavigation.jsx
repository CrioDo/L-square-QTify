import React, { useEffect, useState } from "react";
import styles from "./CarouselLeftNavigation.module.css";
import { useSwiper } from "swiper/react";
import {ReactComponent as LeftArrow }  from "../../../assets/LeftArrow.svg";

const CarouselLeftNavigation = () => {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsBeginning(swiper.isBeginning);
    });
  }, []);

  return (
    <div className={styles.leftNavigation}>
        {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()}/>}
    </div>
  )
};

export default CarouselLeftNavigation;
