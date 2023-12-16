import React from "react";
import styles from "./Button.module.css";

const Button = ({ children }) => {
	return <button className={styles.feedback_btn}>{children}</button>;
};

export default Button;
