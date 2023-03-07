import React from "react";
import styles from "../Button/Button.module.css";

export const Button = ({ children }) => {
  return <button className={styles.btn}>{children}</button>;
};
