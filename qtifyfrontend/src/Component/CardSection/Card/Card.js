import * as React from "react";
import Chip from "@mui/material/Chip";
import styles from "./Card.module.css";
import { Tooltip } from "@mui/material";
function Card({ data, type }) {
  // console.log("Data from Card", data);
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { songs, title, follows, image, slug } = data;
        // ${songs.length}
        return (
          <Tooltip title={`${songs.length} Songs`} placement="top" arrow>
            <a href={`/album/${slug}`}>
              <div className={styles.wrapper}>
                <div className={styles.card}>
                  <div className={styles.cardImg}>
                    <img src={image} alt={title} loading="lazy" />
                  </div>
                  <div className={styles.banner}>
                    <Chip
                      label={`${follows} Follows`}
                      size="small"
                      className={styles.chip}
                    />
                  </div>
                </div>
                <div className={styles.titleWrapper}>
                  <p>{title} </p>
                </div>
              </div>
            </a>
          </Tooltip>
        );
      }
      case "songs": {
        const { title, likes, image } = data;
        return (
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <img src={image} alt="song" loading="lazy" />
              <div className={styles.banner}>
                <Chip
                  label={` ${likes} Likes`}
                  size="small"
                  className={styles.chip}
                />
              </div>
            </div>
            <div className={styles.titleWrapper}>
              <p>{title} </p>
            </div>
          </div>
        );
      }
      default:
        return <></>;
    }
  };
  return getCard(type);
}

export default Card;
