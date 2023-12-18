import React from 'react';
import styles from "./Logo.module.css";
// import logo from "../../assets/logo.png";

function Logo({qtify, logo}) {

    return (<div className={styles.icon}>
        <img src={qtify} alt="logo" className={styles.qtifyicon} />
        <img src={logo} alt="" className={styles.headicon} />
    </div>
    )

    // return <>
    //     <img src={logo} alt="logo" className={styles.qtifyicon}/>
    // </>
}

export default Logo;