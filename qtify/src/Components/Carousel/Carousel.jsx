import React, { useEffect } from 'react';
import {Swiper, SwiperSlide,useSwiper} from "swiper/react";
import "swiper/css";
import styles from "./Carousel.module.css";
import {Navigation} from "swiper/modules";
import CarouselLeftNavigation from './CarouselLeftNavigation/CarouselLeftNavigation';
import CarouselRightNavigation from './CarouselRightNavigation/CarouselRightNavigation';

const Controls=({data})=>{
    const swiper=useSwiper();
    
    // console.log(swiper);

    useEffect(()=>{
        swiper.slideTo(0,null)
    }, [data])
   
   return <></>;
}


const Carousel = ({data,renderCardComponent}) => {
   
  return (
    <div className={styles.carouselWrapper}>
        <Swiper initialSlide={0} modules={{Navigation}} slidesPerView={"auto"} spaceBetween={40} allowTouchMove>
            <Controls data={data}/>
            <CarouselLeftNavigation/>
            <CarouselRightNavigation/>
            {data.map((elem ,index)=>(
                <SwiperSlide key={index+1}>{renderCardComponent(elem)}</SwiperSlide>
            ))}
        </Swiper> 
    </div>
  );
}

export default Carousel;
