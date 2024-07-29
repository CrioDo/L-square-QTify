import Card from "../Card/Card";
import styles from "./Section.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./Section.module.css";
import SwiperNavigationButtons from "../SwiperNavigationButtons/SwiperNavigationButtons";
import { Tooltip, useScrollTrigger } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import Filters from "../Filters/Filters";
export default function Section({ data, type, collapsed, filterSource }) {
  const [filters, setFilters] = useState([{ key: "all", label: "All" }]);
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);

  useEffect(() => {
    if (filterSource) {
      filterSource().then((response) => {
        const { data } = response;
        setFilters([...filters, ...data]);
      });
    }
  }, []);

  const showFilters = filters.length > 1;
  const cardsToRender = data.filter((ele) => {
    return showFilters && selectedFilterIndex !== 0
      ? ele.genre.key === filters[selectedFilterIndex].key
      : ele;
  });
  return (
    <div>
      {showFilters && (
        <div className={styles.filterSection}>
          <Filters
            filters={filters}
            selectedFilterIndex={selectedFilterIndex}
            setSelectedFilterIndex={setSelectedFilterIndex}
          />
        </div>
      )}
      {collapsed ? (
        <>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
              1400: {
                slidesPerView: 8,
                spaceBetween: 50,
              },
            }}
            className="mySwiper"
          >
            {cardsToRender.map((ele) => {
              return (
                <SwiperSlide>
                  <Card data={ele} type={type} />
                </SwiperSlide>
              );
            })}
            <SwiperNavigationButtons />
          </Swiper>
        </>
      ) : (
        <div className={styles.section}>
          {cardsToRender.map((ele) => {
            return <Card data={ele} type={type} />;
          })}
        </div>
      )}
    </div>
  );
}
