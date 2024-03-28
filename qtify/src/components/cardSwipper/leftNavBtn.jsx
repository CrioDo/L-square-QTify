import React, { useState, useEffect } from "react";
import { useSwiper } from "swiper/react";
import { ReactComponent as LeftArrow } from "../../assets/LeftArrow.svg";
import styles from "./leftBtn.module.css";
export function LeftNavigationBtn() {
  const swiper = useSwiper();
  let [isBeginning, setIsBeginning] = useState(swiper.isBeginning);
  useEffect(() => {
    console.log(isBeginning);
    swiper.on("slideChange", function () {
      // console.log(isBeginning);
      setIsBeginning(swiper.isBeginning);
    });
  }, []);
  return (
    <div className={styles.leftBtn}>
      {!isBeginning && (
        <LeftArrow
          onClick={() => {
            // setIsBeginning(swiper.isBeginning);
            swiper.slidePrev();
          }}
        />
      )}
      {/* {
        <LeftArrow
          onClick={() => {
            swiper.slidePrev();
          }}
        />
      } */}
    </div>
  );
}