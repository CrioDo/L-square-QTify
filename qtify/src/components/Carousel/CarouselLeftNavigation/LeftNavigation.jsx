import React, { useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react'
import styles from "../Carousel.module.css"
import {ReactComponent as LeftArrow} from "../../../assets/leftArrow.svg";

function LeftNavigation() {
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);
    useEffect(() => {
        swiper.on('slideChange', () => {
            setIsBeginning(swiper.isBeginning);
        })
        // eslint-disable-next-line
    },[])


  return (
    <div className={styles.leftNavigation}>
        {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()} />}
    </div>
  )
}

export default LeftNavigation