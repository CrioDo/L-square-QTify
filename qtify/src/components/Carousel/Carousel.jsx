import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import {Navigation} from "swiper/modules";
import 'swiper/css';
import Card from '../Card/Card';
import LeftNavigation from './LeftNavigation';
import RightNavigation from './RightNavigation';
import styles from './Carousel.module.css';


function Carousel({data, type}) {


    const Controls = ({data}) => {
        const swiper = useSwiper();
        console.log(swiper);
        useEffect(() => {
            swiper.slideTo(0);
        },[data]);
        return <></>
    }

    return (

        <div className={styles.wrapper}>
            <Swiper 
                modules={Navigation}
                initialSlide={0}
                slidesPerView={7}
                spaceBetween={40}
                allowTouchMove
            >   
                
                <Controls data={data} />
                <LeftNavigation />
                    {
                        data.map((item) => 
                            <SwiperSlide key=".3: 1"> <Card data={item} type={type} key={item.id}/> </SwiperSlide>
                        )
                    }
                <RightNavigation />
            </Swiper>
        </div>
    )
}

export default Carousel