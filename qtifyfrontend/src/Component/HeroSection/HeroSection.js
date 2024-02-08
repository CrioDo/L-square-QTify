import React from "react";
import styles from "./HeroSection.module.css";
import Image from "../../assests/HeroSectionImage.png";

function HeroSection() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.items}>
        <div>
          <h1>100 Thousand Songs, ad-free</h1>
          <h1>Over thousands podcast episodes</h1>
        </div>
        <div>
          <img src={Image} alt="Hero Section" className={styles.heroImage} />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
