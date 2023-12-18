import React from 'react';
import styles from "./Icon.module.css";
import qtify from "../../assets/qtify.png";
import headphone from "../../assets/headphone.png"

function Icon({ source }) {

    return (<div className={styles.icon}>
        <img src={qtify} alt="" className={styles.qtifyicon} />
        <img src={headphone} alt="" className={styles.headicon} />
    </div>
    )
}

export default Icon