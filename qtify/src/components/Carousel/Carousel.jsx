import React, { useEffect } from 'react'
import styles from './Carousel.module.css'
import  {Swiper,useSwiper, SwiperSlide} from 'swiper/react'
import { Navigation } from 'swiper/modules'
import CarouselRightNavigation from './CarouselRightNavigation'
import CarouselLeftNavigation from './CarouselLeftNavigation'




const Controls = ({data}) => {
    const swiper = useSwiper();
    useEffect(() => {
        swiper.slideTo(0,300)
    },[data]);
    return <></>
}
export const Carousel = ({data, renderComponent}) => {
  return (
    <div className={styles.wrapper}>
        <Swiper
        style={{padding: "0px 20px"}}
        intialSlide={0}
        modules={[Navigation]}
        slidesPerView="auto"
        spaceBetween={40}
        allowTouchMove
        >
        <Controls />
        <CarouselLeftNavigation />
        <CarouselRightNavigation />
         {
         data.map((ele) => {
          return (
            <SwiperSlide>
              {renderComponent(ele)}
            </SwiperSlide>
          )
         })  
         }
        </Swiper>
    </div>
  )
}
