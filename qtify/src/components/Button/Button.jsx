import React from "react";
import styles from "../Button/Button.module.css";

export const Button = ({ children, type = "btn" }) => {
  return (
    <button className={`${styles.btn} ${styles[type]}`}>{children}</button>
  );
};
