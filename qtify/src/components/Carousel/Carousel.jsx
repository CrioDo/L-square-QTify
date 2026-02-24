import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

function Carousel({ data, renderCard }) {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={20}
      breakpoints={{
        0: { slidesPerView: 2 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 6 },
      }}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          {renderCard(item)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;