import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Box from "@mui/material/Box";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper";
import { Navigation } from "swiper";
// import generateCardsList from "../albums/genrateCardList";
import AlbumCard from "../cards/albumCard";
// import styles from "./swiper.module.css";
import "swiper/css/navigation";
// import "./swiperBtn.css";

export default function CardSwipers({ list, type = "" }) {
  let [cardsList, setCardsList] = useState([]);
  let [slids, setSlides] = useState([]);
  console.log(list);
  console.log("type", type);
  useEffect(() => {
    let arr = [];

    arr = list.map((ele) => {
      return (
        <SwiperSlide key={ele.id} className={"swiperContainer"}>
          <AlbumCard
            image={ele.image}
            title={ele.title}
            likes={ele.likes}
            id={ele.id}
            slug={ele.slug}
            type={"songs"}
            key={ele.id}
          />
        </SwiperSlide>
      );
    });
    setCardsList(arr);
  }, [list]);

  console.log("Card List ", cardsList);
  useEffect(() => {});

  return (
    <>
      <Swiper
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
        navigation={true}
        className="mySwiper"
      >
        {cardsList}
      </Swiper>
    </>
  );
}