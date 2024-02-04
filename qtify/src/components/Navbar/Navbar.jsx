import React from "react";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";
import styles from "./Navbar.module.css"

function Navbar({searchData}){
    return (
        <div className={styles.wrapper}> 
            <a href="/"> 
                <Logo />
            </a>
            <Search placeholder={"Search a album of your choice"} searchData={searchData}></Search>
            <Button>Give Feedback</Button>
        </div>
    )
}

export default Navbar