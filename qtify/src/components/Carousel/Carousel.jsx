import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Carousel.module.css";
import LeftNavButton from "./LeftNav";
import RightNavButton from "./RightNav";

export default function Carousel({ items, renderItem }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);
  useEffect(() => {
    setSwiperReady(true);
  }, []);

  return (
    <div className={styles.carouselWrapper}>
      {swiperReady && (
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            // Assign navigation elements to the swiper instance
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 6 },
          }}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>{renderItem(item)}</SwiperSlide>
          ))}
        </Swiper>
      )}
      {/* Navigation Buttons */}
      <div ref={prevRef} className={styles.leftNav}>
        <LeftNavButton />
      </div>
      <div ref={nextRef} className={styles.rightNav}>
        <RightNavButton />
      </div>
    </div>
  );
}
