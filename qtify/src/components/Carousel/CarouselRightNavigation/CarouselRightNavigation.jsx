import React, { useEffect, useState } from "react";
import styles from "./CarouselRightNavigation.module.css";
import { useSwiper } from "swiper/react";
 import { ReactComponent as RightArrow }  from "../../../assets/RightArrow.svg";

const CarouselRightNavigation = () => {
    const swiper = useSwiper();
    const [isLast, setIsLast] = useState(swiper.isLast);
  
    useEffect(() => {
      swiper.on("slideChange", () => {
        setIsLast(swiper.isLast);
      });
    }, []);
  
    return (
      <div className={styles.rightNavigation}>
          {!isLast && <RightArrow onClick={() => swiper.slideNext()}/>}
      </div>
    )
}

export default CarouselRightNavigation;
