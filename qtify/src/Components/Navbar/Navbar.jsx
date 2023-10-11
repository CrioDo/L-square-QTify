import React from "react";
import Logo from "../Logo/Logo";
import Button from '../Button/Button';
import styles from './Navbar.module.css'
import Search from "../Search/Search";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
           <Logo />
            <Search/>
            <Button children="Give Feedback"/>
        </nav>
    )
}

export default Navbar;