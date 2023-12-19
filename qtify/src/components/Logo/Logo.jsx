import React from 'react';
import styles from "./Logo.module.css";
import logo from "../../assets/logo.png";

function Logo() {

    return <>
        <img src={logo} alt="logo" width={67} />
    </>
}

export default Logo;