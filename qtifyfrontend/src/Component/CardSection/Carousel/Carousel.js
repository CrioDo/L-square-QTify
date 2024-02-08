import React, { useEffect } from "react";
import "swiper/css";
import { useSwiper, Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import CarasoulRightNavigation from "./CarasoulRightNavigation/CarasoulRightNavigation";
import CarasoulLeftNavigation from "./CarasoulLeftNavigation/CarasoulLeftNavigation";
import Card from "../Card/Card";
function Carousel({ data, type }) {
  const Controls = ({ data }) => {
    let swiper = useSwiper();
    console.log(swiper);
    useEffect(() => {
      // swiper.slideTo(0);
    }, [data]);

    return <></>;
  };
  return (
    <div>
      <Swiper
        initialSlide={0}
        modules={{ Navigation }}
        slidesPerView={7}
        spaceBetween={0}
        allowTouchMove
      >
        <Controls data={data} />
        <CarasoulLeftNavigation />
        <CarasoulRightNavigation />
        {data &&
          data.map((ele, index) => {
            // console.log("DATA from carasoul slide ==>", ele);
            return (
              <SwiperSlide>
                <Card key={index} data={ele} type={type} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}

export default Carousel;
