import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";


// import required modules
import { useSwiper } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import { Navigation } from "swiper";
// import generateCardsList from "../albums/genrateCardList";

import styles from "./swiper.module.css";

import { LeftNavigationBtn } from "./leftNavBtn";
import { RightNavigationBtn } from "./rightNavBtn";

const Controls = ({ data }) => {
  let swiper = useSwiper();
  useEffect(() => {
    swiper.slideTo(0);
  }, [data]);
  return <></>;
};

export default function CardSwiper({ list = [], listOfCards }) {
  let [cardsList, setCardsList] = useState([]);
  let [slids, setSlides] = useState([]);

  useEffect(() => {
    let slids = listOfCards.map((ele) => {
      return (
        <SwiperSlide className={styles.swiperContainer} key={ele.key}>
          {ele}
        </SwiperSlide>
      );
    });
    setSlides([...slids]);
  }, [list]);

  // console.log("Card List ", cardsList);
  //   useEffect(()=>{});

  return (
    <div className={styles.container}>
      <Swiper
        style={{ padding: "0px 20px" }}
        slidesPerView={7}
        spaceBetween={30}
        freeMode={true}
        breakpoints={{
          "@0.00": {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          "@1.50": {
            slidesPerView: 7,
            spaceBetween: 30,
          },
        }}
        modules={[FreeMode, Navigation]}
        // navigation={true}
        className="mySwiper"
      >
        {/* <Controls data={[...list]} /> */}
        <LeftNavigationBtn />
        <RightNavigationBtn />
        {slids}
      </Swiper>
    </div>
  );
}