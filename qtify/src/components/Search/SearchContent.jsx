import React from "react";
import styles from "./SearchContent.module.css";

export const SearchContent = ({ option, song }) => {
  console.log("in search Content -", song.artists);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img src={song.image} className={styles.image} alt={song.title}></img>
        <div className={styles.title_container}>
          <span className={styles.title}>{option.title}</span>
          <div>
            {song.artists.map((val, index) => (
              <span className={styles.descreption}>
                {val} {index < song.artists.length - 1 && ","}
              </span>
            ))}
          </div>
        </div>
      </div>
      <span className={styles.title}>{option.follows} Follows</span>
    </div>
  );
};
