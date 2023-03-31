import React from "react";
import styles from "./Logo.module.css";

export const Logo = () => {
  return (
    <img
      src={require("../../assets/logo.png")}
      alt="logo"
      className={styles.logo}
    />
  );
};
