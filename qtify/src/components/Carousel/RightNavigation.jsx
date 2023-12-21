import React, { useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react'
import styles from "./Carousel.module.css"
import {ReactComponent as RightArrow} from "../../assets/rightArrow.svg";

function RightNavigation() {
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(swiper.isEnd);
    useEffect(() => {
        swiper.on('slideChange', () => {
            setIsEnd(swiper.isEnd);
        })
    },[])


  return (
    <div>
        {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
    </div>
  )
}

export default RightNavigation