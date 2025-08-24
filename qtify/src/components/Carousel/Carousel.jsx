import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import styles from './Carousel.module.css'
import 'swiper/css'
import CarouselNavigation from './CarouselNavigation'

export default function Carousel({ children }) {

    return (
        <Swiper
            modules={[Navigation]}
            slidesPerView={'auto'}
            spaceBetween={24}
            navigation = {{prevEl: '.prev', nextEl:'.next'}}
        >

            {children.map((child, index) => (
                <SwiperSlide className={styles.slide} key={index}>
                    {child}
                </SwiperSlide>
            ))}

            <CarouselNavigation />
        </Swiper>
    )
}