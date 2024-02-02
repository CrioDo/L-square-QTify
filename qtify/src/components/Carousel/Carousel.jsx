import React, { useEffect } from 'react'
import 'swiper/swiper.css'
import {Navigation} from 'swiper'
import {Swiper,useSwiper,SwiperSlide} from 'swiper/react'
import styles from './Carousel.module.css'
import CarouselLeftNav from './CarouselLeftNav'
import CarouselRightNav from './CarouselRightNav'

const Controls = ({data}) => {
    let swiper = useSwiper();
    console.log(swiper)
    useEffect(() => {
        // swiper.slideTo(0)
    },[data])

    return <></>
}

const Carousel = ({data,renderCardComponent}) => {
    
    return (
        <div className={styles.wrapper}>
            <Swiper initialSlide = {0} modules={{Navigation}} slidesPerView={"auto"} spaceBetween={40} allowTouchMove>
                <Controls data={data} />
                <CarouselLeftNav />
                {data.map(item => (
                    <SwiperSlide>{renderCardComponent(item)}</SwiperSlide>
                ))}
                <CarouselRightNav />
                
            </Swiper>
        </div>
      )
}

export default Carousel