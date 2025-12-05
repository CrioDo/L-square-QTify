import React from "react";
import styles from "./CarouselLeftButton.module.css";

export default function CarouselLeftButton({ onClick, disabled }) {
  return (
    <button
      className={styles.leftButton}
      onClick={onClick}
      disabled={disabled}
      aria-label="Previous"
    >
      &#60;
    </button>
  );
}
