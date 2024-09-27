import React, { useEffect , useState} from 'react'
import { useSwiper } from 'swiper/react'
import { ReactComponent as LeftArrow } from '../../../assets/leftArrow.svg'
import styles from './CarouselLeft.module.css'

const CarouselLeftNavigation = () => {
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

    useEffect(() => {
        swiper.on("slideChange", function(){
            setIsBeginning(swiper.isBeginning);
        })
    },[])
  return (
    <div className={styles.leftNavigation}>
        {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()} />}
    </div>
  )
}

export default CarouselLeftNavigation