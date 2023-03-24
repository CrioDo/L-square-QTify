import React, { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import { CarouselComponent } from "../Carousel/CarouselComponent";
import { Filter } from "../Filter/Filter";
import styles from "./Section.module.css";

export const Section = ({
  title,
  dataSourse,
  dataType,
  sectionType,
  filterSource,
}) => {
  const [cards, setCards] = useState([]);
  const [isShowAll, setisShowAll] = useState(false);
  const [filters, setFilters] = useState([{ key: "all", label: "All" }]);
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);
  useEffect(() => {
    dataSourse(dataType).then((data) => {
      setCards(data);
    });

    if (filterSource) {
      filterSource().then((data) => {
        // console.log(data.data);
        setFilters([...filters, ...data.data]);
      });
    }
  }, []);

  const handleToggle = () => {
    setisShowAll((prevState) => !prevState);
  };

  const filteredCardList = cards.filter((card) =>
    selectedFilterIndex !== 0
      ? card.genre.key === filters[selectedFilterIndex].key
      : card
  );
  console.log("filter data -", filteredCardList);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h4>{title}</h4>
        {!filterSource ? (
          <div className={styles.show_all} onClick={handleToggle}>
            {!isShowAll ? "Show All" : "Collapse"}
          </div>
        ) : null}
      </div>
      {isShowAll ? (
        <div className={styles.card_wrapper}>
          {cards.map((card) => (
            <Card cardDetails={filteredCardList} type={sectionType} />
          ))}
        </div>
      ) : (
        <div>
          {filterSource && (
            <Filter
              filters={filters}
              selectedFilterIndex={selectedFilterIndex}
              setSelectedFilterIndex={setSelectedFilterIndex}
            />
          )}
          <div className={styles.card_wrapper}>
            <CarouselComponent
              dataList={filteredCardList}
              renderComponetent={(item) => (
                <Card cardDetails={item} type={sectionType} />
              )}
            />
          </div>
        </div>
      )}
    </div>
  );
};
