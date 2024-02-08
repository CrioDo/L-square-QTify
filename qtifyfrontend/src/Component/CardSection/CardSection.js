import React, { useState } from "react";
import styles from "./CardSection.module.css";
import Card from "./Card/Card";
import Carousel from "./Carousel/Carousel";
import Tab from "./Tab/Tab";

function CardSection({ data, type, title }) {
  console.log("data from the card section", data);
  console.log("type from the card section==>", type);

  const [toggle, setToggle] = useState(true);

  if (type === "album") {
    return (
      <div className={styles.cardSectionWrapper}>
        <div className={styles.topContainer}>
          <h3 className={styles.title}>{title}</h3>
          <h3
            className={styles.button}
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            {toggle ? "Show All" : "Collapse All "}
          </h3>
        </div>
        <div className={styles.cardContainer}>
          {/** */}
          {toggle ? (
            <>
              <Carousel data={data} type={type} />
            </>
          ) : (
            <>
              {" "}
              <div className={styles.cardWrapper}>
                {data &&
                  data.map((ele, index) => (
                    // console.log(index, ele, type)
                    <Card key={index} data={ele} type={type} />
                  ))}
              </div>
            </>
          )}
        </div>
      </div>
    );
  } else if (type === "songs") {
    return (
      <>
        <div className={styles.cardSectionWrapper}>
          <div className={styles.topContainer}>
            <h3 className={styles.title}>{title}</h3>
          </div>
          <div className={styles.tabWrapper}>{/* <Tab /> */}</div>
          <div className={styles.cardContainer}>
            <Carousel data={data} type={type} />
          </div>
        </div>
      </>
    );
  }
  return <></>;
}

export default CardSection;
