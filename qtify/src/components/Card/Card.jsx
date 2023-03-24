import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

export const Card = ({ cardDetails, type }) => {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        return (
          // <Link to={`/`}>
          <div className={styles.container}>
            <div className={styles.image_container}>
              <img
                src={`${cardDetails.image}`}
                alt="card"
                className={styles.image}
              />
              {/* <div className={styles.followers}> */}
              <div className={styles.Follower_text}>
                {cardDetails.follows} Follows
              </div>
              {/* </div> */}
            </div>
            <p className={styles.title}>{cardDetails.title}</p>
          </div>
          // </Link>
        );
      }
      case "song": {
        return (
          // <Link to={`/`}>
          <div className={styles.container}>
            <div className={styles.image_container}>
              <img
                src={`${cardDetails.image}`}
                alt="card"
                className={styles.image}
              />
              <div className={styles.followers}>
                <span className={styles.Follower_text}>
                  {cardDetails.likes} Likes
                </span>
              </div>
            </div>
            <p className={styles.title}>{cardDetails.title}</p>
          </div>
          // </Link>
        );
      }
      default: {
        return <></>;
      }
    }
  };

  return getCard(type);
};
