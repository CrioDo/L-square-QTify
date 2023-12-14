import React, { useEffect } from "react";
import styles from "./Carousel.module.css";
import  { Navigation } from "swiper";
import {Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";

const Controls = ({ data }) => {
  const swiper = useSwiper();
  useEffect(() => {
    swiper.slideTo(0);
  }, [data]);
  return <></>;
};

const Carousel = ({ data, renderComponent }) => {
  return (
    <div className={styles.wrapper}>
      <Swiper
        style={{ padding: "0px 20px" }}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
      >
        <Controls data={data} />
        <CarouselLeftNavigation />
        <CarouselRightNavigation />
        {data.map((ele) => (
          <SwiperSlide>{renderComponent(ele)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;

// import React, { useEffect } from "react";
// import styles from "./Carousel.module.css";
// import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// import SwiperCore, { Navigation } from "swiper";
// import "swiper/css";
// import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
// import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";

// const Controls = ({ data }) => {
//  const swiper = useSwiper();
//  useEffect(() => {
//     swiper.slideTo(0);
//  }, [data]);
//  return <></>;
// };

// const Carousel = ({ data, renderComponent }) => {
//  return (
//     <div className={styles.wrapper}>
//       <Swiper
//         style={{ padding: "0px 20px" }}
//         initialSlide={0}
//         modules={[Navigation]}
//         slidesPerView={"auto"}
//         spaceBetween={40}
//         allowTouchMove
//       >
//         <Controls data={data} />
//         <CarouselLeftNavigation />
//         <CarouselRightNavigation />
//         {data.map((ele) => (
//           <SwiperSlide>{renderComponent(ele)}</SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//  );
// };

// // SwiperCore.use([Navigation]);

// export default Carousel;