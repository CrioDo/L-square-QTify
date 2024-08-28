import React, { useState, useEffect } from "react";
import { useSwiper } from "swiper/react";
import { ReactComponent as LeftArrow } from '../../assets/left-arrow.svg';
import styles from './CarouselLeftNavigation.module.css';

export default function CarouselLeftNavigation() {
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

    useEffect(() => {

        function handleChange() {
            setIsBeginning(swiper.isBeginning);
        }

        swiper.on("slideChange", handleChange);
        // return swiper.off("slideChange", handleChange());
    }, []);

    return (
        <div className={styles.left_navigation}>
            { !isBeginning && <LeftArrow onClick={() => swiper.slidePrev()} /> }
        </div>
    );
}