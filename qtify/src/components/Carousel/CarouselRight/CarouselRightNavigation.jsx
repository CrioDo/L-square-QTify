import React ,{useEffect,useState} from 'react';
import { useSwiper } from 'swiper/react';
import { ReactComponent as RightArrow } from '../../../assets/rightArrow.svg';
import styles from './CarouselRight.module.css'


const CarouselRightNavigation = () => {
    const swiper = useSwiper();
    const [isEnd, SetIsEnd] = useState(swiper.End);

    useEffect(() => {
        swiper.on("slideChange", function(){
            SetIsEnd  (swiper.isEnd);
        })
    },[])
  return (
    <div className={styles.rightNavigation}>
        {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
    </div>
  )
}

export default CarouselRightNavigation