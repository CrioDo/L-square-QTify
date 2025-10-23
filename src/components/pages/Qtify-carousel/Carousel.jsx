
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Carousel = ({ data = [], renderItem }) => {
    const swiperRef = useRef(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    return (
        <div style={{ position: "relative" }}>
            {!isBeginning && (
                <button
                    onClick={() => swiperRef.current.slidePrev()}
                    style={{
                        position: "absolute",
                        left: 0,
                        top: "40%",
                        transform: "translateY(-50%)",
                        zIndex: 10,
                        background: "#34c94b",
                        borderRadius: "100%",
                        border: "none",
                        padding: "10px",
                        cursor: "pointer",
                        color: "#ffffff"
                    }}
                >
                    ◀
                </button>
            )}

            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={(swiper) => {
                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
                }}
                breakpoints={{
                    320: { slidesPerView: 2, spaceBetween: 10 },
                    640: { slidesPerView: 2.5, spaceBetween: 15 },
                    1024: { slidesPerView: 5, spaceBetween: 20 },
                    1280: { slidesPerView: 7, spaceBetween: 25 },
                }}
            >
                {data?.map((item) => (
                    <SwiperSlide key={item.id || item.key || item._id}>{renderItem(item)}</SwiperSlide>
                ))}
            </Swiper>

            {!isEnd && (
                <button
                    onClick={() => swiperRef.current.slideNext()}
                    style={{
                        position: "absolute",
                        right: 0,
                        top: "40%",
                        transform: "translateY(-50%)",
                        zIndex: 10,
                        background: "#34c94b",
                        alignContent: "center",
                        borderRadius: "100%",
                        border: "none",
                        padding: "10px",
                        cursor: "pointer",
                        color: "#ffffff"
                    }}
                >

                    ▶
                </button>
            )}
        </div>
    );
};

export default Carousel;
