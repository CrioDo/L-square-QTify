import React, { useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import { CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel";

const Section = ({ title, data, type }) => {
  // console.log('Data:', data);
  const [carouselToggle, setCarouselToggle] = useState(true);

  const handleToggle = () => {
    setCarouselToggle(prevToggle => !prevToggle);
  };

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 
          className={styles.toggleText} 
          onClick={handleToggle} 
          role="button"
          tabIndex="0"
          onKeyPress={(e) => { if (e.key === 'Enter') handleToggle(); }}
        >
          {carouselToggle ? "Show All" : "Collapse All"}
        </h4>
      </div>
      {data.length === 0 ? (
        <div className={styles.loader}>
          <CircularProgress />
        </div>
      ) : (
        <div className={styles.cardWrapper}>
          {!carouselToggle ? (
            <div className={styles.wrapper}>
              {data.map((card) => (
                <Card data={card} type={type} key={card.id} />
              ))}
            </div>
          ) : (
            <Carousel 
              data={data} 
              renderCardComponent={(data) => <Card data={data} type={type} />} 
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Section;
