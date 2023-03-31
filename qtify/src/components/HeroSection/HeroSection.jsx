import React from "react";
import styles from "./HeroSection.module.css";

export const HeroSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero_message}>
        <p>100 Thousand Songs, ad-free</p>
        <p>Over thousands podcast episodes</p>
      </div>
      <img
        src={require("../../assets/hero_image.png")}
        alt="qtify"
        className={styles.hero_image}
      />
    </div>
  );
};
