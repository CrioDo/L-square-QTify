import React from "react";
import styles from "../Search/Search.module.css";

export const Search = ({ placeholder }) => {
  return (
    <div className={styles.search_box}>
      <input className={styles.search_input} placeholder={placeholder} />
      <button className={styles.search_button}>
        <img src={require("../../assets/Search_icon.png")} alt="search" />
      </button>
    </div>
  );
};
