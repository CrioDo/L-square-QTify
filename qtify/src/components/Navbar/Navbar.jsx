import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";

function Navbar({searchData}){
    return (
        <nav className = {styles.navbar}>
            <Link to="/">
                <Logo/>
            </Link>
            <Search placeholder="Search a album of your choice" />
            <Button>Give Feedback</Button>
        </nav>
    )
}

export default Navbar;
