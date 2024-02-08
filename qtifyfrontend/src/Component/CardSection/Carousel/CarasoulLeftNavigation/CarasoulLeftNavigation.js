import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import styles from "./CarasoulLeftNavigation.module.css";

import { ReactComponent as LeftArrow } from "../../../../assests/LeftArrow.svg";
function CarasoulLeftNavigation() {
  const swiper = useSwiper();
  const [isBegining, setIsBegining] = useState(swiper.isBeginning);
  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsBegining(swiper.isBeginning);
    });
  }, []);
  return (
    <div className={styles.leftNavigation}>
      {!isBegining && (
        <LeftArrow
          onClick={() => {
            swiper.slidePrev();
          }}
        />
      )}
    </div>
  );
}

export default CarasoulLeftNavigation;
