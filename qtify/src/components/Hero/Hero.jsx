import React from 'react';
import styles from "./Hero.module.css";
import headphone from "../../assets/headphone.png";

function Hero() {
    return (
        <div className={styles.hero}>
            <div className={styles.head}>
                <h1>100 Thousand Songs, ad-free</h1>
                <h1>Over thousands podcast episodes</h1>
            </div>
            <img src={headphone} alt="head" className={styles.img} />
        </div>
    )
}

export default Hero