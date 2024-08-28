import React from "react";
import Box from "@mui/material/Box";
import styles from './Logo.module.css';
import logo from "../../assets/logo.png";

const Logo = () => {
    return (
        <Box className={styles.logo}>
            <img src={logo} alt="Qtify-logo"></img>
        </Box>
    );
};

export default Logo;