import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import Cards from "../Cards/Cards";
import styles from "../Section/Section.module.css";
const Section = ({ title, data, type }) => {
  const [carouselToggel, setCarouselToggle] = useState(true);

  const handleToggle = () => {
    setCarouselToggle(!carouselToggel);
  };
  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {carouselToggel ? "Show All" : "Collapse All"}
        </h4>
      </div>
      {data?.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardsWrapper}>
          {!carouselToggel ? (
            <div className={styles.wrapper}>
              {data.map((ele) => (
                <Cards data={ele} type={type} key={ele.id} />
              ))}
            </div>
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  );
};

export default Section;
