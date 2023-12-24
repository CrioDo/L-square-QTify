// import Swiper core and required modules
import React, { useEffect } from 'react';
import { Navigation} from 'swiper/modules';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import styles from './Carousel.module.css';

// Import Swiper styles
import 'swiper/css';
import LeftNavigation from './CarouselLeftNavigation/LeftNavigation';
import RightNavigation from './CarouselRightNavigation/RightNavigation';

const Controls = ({data}) => {
    const swiper = useSwiper();
    useEffect(() => {
        swiper.slideTo(0);
        // eslint-disable-next-line
    },[data]);
    return <></>
}


function Carousel ({data, renderComponent}){
  return (
    <div className={styles.wrapper}>
        <Swiper 
        // install Swiper modules
        style={{padding: '0px 20px'}}
        initialSlide={0}
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={'auto'}
        allowTouchMove
        >
            <Controls data={data} />
            <LeftNavigation />
            <RightNavigation />
            {
                data.map((ele) => (
                    <SwiperSlide>{renderComponent(ele)}</SwiperSlide>
                ))
            }
        </Swiper>
    </div>
  );
};

export default Carousel;

// import React, { useEffect, useState } from 'react';
// import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// import {Navigation} from "swiper/modules";
// import Card from '../Card/Card';
// import LeftNavigation from './LeftNavigation';
// import RightNavigation from './RightNavigation';
// import styles from './Carousel.module.css';
// import 'swiper/css';


// function Carousel({data, type}) {


//     const Controls = ({data}) => {
//         const swiper = useSwiper();
//         console.log(swiper);
//         useEffect(() => {
//             swiper.slideTo(0);
//         },[data]);
//         return <></>
//     }

//     return (

//         <div className={styles.wrapper}>
//             <Swiper 
//                 modules={Navigation}
//                 initialSlide={0}
//                 slidesPerView={7}
//                 spaceBetween={40}
//                 allowTouchMove
//             >   
                
//                 <Controls data={data} />
//                 <LeftNavigation />
//                     {
//                         data.map((item) => 
//                             <SwiperSlide key=".3: 1"> <Card data={item} type={type} key={item.id}/> </SwiperSlide>
//                         )
//                     }
//                 <RightNavigation />
//             </Swiper>
//         </div>
//     )
// }

// export default Carousel