import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import styles from "./CarasoulRightNavigation.module.css";
import { ReactComponent as RightArrow } from "../../../../assests/RightArrow.svg";
function CarasoulRightNavigation() {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);
  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsEnd(swiper.isEnd);
    });
  }, [swiper]);
  return (
    <div className={styles.rightNavigation}>
      {!isEnd && (
        <RightArrow
          onClick={() => {
            swiper.slideNext();
          }}
        />
      )}
    </div>
  );
}

export default CarasoulRightNavigation;
