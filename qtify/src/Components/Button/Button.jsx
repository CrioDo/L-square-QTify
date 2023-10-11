import React from "react";
import styles from './Button.module.css';

const Button = ({children}) => {
    return (
        <div className={styles.btn}>
            {children}
        </div>
    )
}

export default Button;