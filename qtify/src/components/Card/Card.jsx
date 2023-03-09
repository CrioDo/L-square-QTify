import React from "react";
import styles from "./Card.module.css";

export const Card = ({ cardDetails }) => {
  console.log(cardDetails);
  //   const [title, img_url, no_of_follower, type_of_follower] = cardDetails;
  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <img
          src={`${cardDetails.img_url}`}
          alt="card"
          className={styles.image}
        />
        {/* <div className={styles.image}></div> */}
        <div className={styles.followers}>
          <span className={styles.Follower_text}>
            {" "}
            {cardDetails.no_of_follower} {cardDetails.type_of_follower}
          </span>
        </div>
      </div>
      <p className={styles.title}>{cardDetails.title}</p>
    </div>
  );
};
