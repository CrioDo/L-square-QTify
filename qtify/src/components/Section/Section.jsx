import React, { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import { CarouselComponent } from "../Carousel/CarouselComponent";
import styles from "./Section.module.css";

export const Section = ({ title, dataSourse, type }) => {
  const [cards, setCards] = useState([]);
  const [isShowAll, setisShowAll] = useState(false);
  useEffect(() => {
    dataSourse(type).then((data) => {
      setCards(data);
    });
  }, []);
  const handleToggle = () => {
    setisShowAll((prevState) => !prevState);
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h4>{title}</h4>
        <div className={styles.show_all} onClick={handleToggle}>
          {!isShowAll ? "Show All" : "Collapse"}
        </div>
      </div>
      {isShowAll ? (
        <div className={styles.card_wrapper}>
          {cards.map((card) => (
            <Card cardDetails={card} type="album" />
          ))}
        </div>
      ) : (
        <CarouselComponent
          dataList={cards}
          renderComponetent={(item) => <Card cardDetails={item} type="album" />}
        />
      )}
    </div>
  );
};
