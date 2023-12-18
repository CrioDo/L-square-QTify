import React from 'react';
import styles from "./Logo.module.css";
import headphone from "../../assets/qtify.png";

function Logo({ qtify, headphone }) {

    // return (<div className={styles.icon}>
    //     <img src={qtify} alt="logo" className={styles.qtifyicon} />
    //     <img src={headphone} alt="" className={styles.headicon} />
    // </div>
    // )

    return <>
        <img src={headphone} alt="logo" />
    </>
}

export default Logo;