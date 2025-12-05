import React from "react";
import styles from "./CarouselRightButton.module.css";

export default function CarouselRightButton({ onClick, disabled }) {
  return (
    <button
      className={styles.rightButton}
      onClick={onClick}
      disabled={disabled}
      aria-label="Next"
    >
      &#62;
    </button>
  );
}
