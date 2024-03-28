import React, { useState, useEffect } from "react";
import { useSwiper } from "swiper/react";
import { ReactComponent as RightArrow } from "../../assets/RightArrow.svg";
import styles from "./rightBtn.module.css";

export function RightNavigationBtn() {
  const swiper = useSwiper();
  let [isEnd, setIsEnd] = useState(swiper.isEnd);
  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsEnd(swiper.isEnd);
    });
  }, []);
  return (
    <div className={styles.RightBtn}>
      {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
      {/* {<RightArrow onClick={() => swiper.slideNext()} />} */}
    </div>
  );
}