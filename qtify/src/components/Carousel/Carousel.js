import React, { useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import CarouselLeft from "./CarouselLeft/CarouselLeft";
import CarouselRight from "./CarouselRight/CarouselRight";
import style from "../Carousel/Carousel.module.css";
// const Control=({data})=>{
//     const swiper =useSwiper();
//     useEffect(()=>{
//         swiper.slideTo(0);
//     },[data]);
// }
const Carousel = ({ data, CardComponent }) => {
 // console.log(data);
 // console.log(CardComponent);
  return (
    <div className={style.container}>
      {/* <div> {data.map((ele, index)=>{return <div className={style.container}> {CardComponent(ele)}</div>})}</div> */}
    
      <Swiper
        style={{ padding: "0px 20px",position:"relative !important" }}
        
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
      >
        {/* <Control data={data}/> */}
        {/* to make the slides to begining when we are moving to new albums carousel */}
        <div className={style.arrow}>
          <CarouselLeft />
          <CarouselRight />
        </div>
         {/* card component render */}
        <div>
          {data.map((ele, index) => (
            <SwiperSlide className={style.container} key={index}>
              {CardComponent(ele)}
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};
export default Carousel;