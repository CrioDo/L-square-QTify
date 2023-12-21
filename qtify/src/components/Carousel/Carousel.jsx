import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import {Navigation} from "swiper/modules";
import 'swiper/css';
import Card from '../Card/Card';
import LeftNavigation from './LeftNavigation';
import RightNavigation from './RightNavigation';


function Carousel({data, component}) {


    // const Control = ({data}) => {
    //     const swiper = useSwiper();
    //     console.log(swiper);
    //     // useEffect(() => {
    //     //     swiper.slideTo(1);
    //     // },[data]);
    // }

    return (

        <div>
            <Swiper spaceBetween={50}
                slidesPerView={3}
                modules={Navigation}
            >   
                
                {/* <Control data={data} /> */}
                <LeftNavigation />
                    {
                        data.map((item) => {
                            <SwiperSlide>{component(item)}</SwiperSlide>
                        })
                    }
                <RightNavigation />
            </Swiper>
        </div>
    )
}

export default Carousel