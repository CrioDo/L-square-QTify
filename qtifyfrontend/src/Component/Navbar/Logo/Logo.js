import React from "react";
import LogoImage from "../../../assests/Logo.png";
import styles from "./Logo.module.css";
function Logo() {
  return <img className={styles.image} src={LogoImage} alt="logo" width={67} />;
}

export default Logo;
