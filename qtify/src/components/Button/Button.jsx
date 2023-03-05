import React from "react";
import styles from "../Button/Button.module.css";

export const Button = ({ text }) => {
  return <button className={styles.btn}>{text}</button>;
};
