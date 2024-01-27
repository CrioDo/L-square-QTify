import React from "react";
import styles from "./Navbar.module.css";
import Logo from "./Logo";
import ButtonFeedBack from "./ButtonFeedBack";
import SearchBox from "./SearchBox";
// import { IoSearchSharp } from "react-icons/io5";

const Navbar=()=>{
    return (
        <nav className={styles.navbar}> 
        <div>
        <Logo />
        </div>
            <SearchBox placeholder="Search a album of your choice"/>
            <ButtonFeedBack text="Give Feedback"/>
        </nav>
    )
}

export default Navbar;