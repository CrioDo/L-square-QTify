import React, { useEffect, useState } from 'react';
import {ReactComponent as LeftArrow} from "../../../assets/LeftArrow.svg"
import { useSwiper, Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from "./CarouselLeft.module.css";


const CarouselLeft = () => {
  let swiper =useSwiper();
  const[isBeginning, setIsBeginning]=useState(swiper.isBeginning);

  useEffect(()=>{
    swiper.on("slideChange", () => {
      // to set the state when ever we change the slide, to control conditional rendering of left arrow button
      setIsBeginning(swiper.isBeginning)
  })
  },[swiper]);

  return (
    <div className={styles.leftNavigation}>
      {/* don't show left arrow when we are on the left most card */}
      {!isBeginning && <LeftArrow onClick={()=>swiper.slidePrev()}/>}
    </div>
  )
}

export default CarouselLeft


/*
notes:

1. Swiper React provides useSwiper hook to easliy get the Swiper instance in components inside of Swiper, eg: swiper.isBeginning
   swiper.isBeginning	is a boolean	and it will be true if slider on most "left"/"top" position

2.  The on() method in Swiper.js is used to attach event listeners to Swiper instance events. 
    It allows you to execute custom code when certain events occur, such as when the slide changes or when the swiper is initialized.
*/