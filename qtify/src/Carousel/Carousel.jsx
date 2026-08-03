import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import SectionCard from "../SectionCard/SectionCard";
import "./Carousel.css";
// Import Swiper styles
// import "swiper/css";
// import 'swiper/css/navigation';
// import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';

export default function Carousel({ albums, isSongs }) {
    return (
        <>
            <Swiper
                slidesPerView={7}
                slidesPerGroup={4}
                spaceBetween={30}
                navigation
                mousewheel
                keyboard
                modules={[Navigation, Keyboard]}
                breakpoints={{
                    390: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        slidesPerGroup: 4,
                        spaceBetween: 50,
                    },
                }}
            >
                {albums.map((album) => (
                    <SwiperSlide key={album.id}>
                        {isSongs ? <SectionCard title={album.title} image={album.image} chipLabel={`${album.likes} Likes`} /> : <SectionCard title={album.title} image={album.image} chipLabel={`${album.follows} Follows`} />}
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
