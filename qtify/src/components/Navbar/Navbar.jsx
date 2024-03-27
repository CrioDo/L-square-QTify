import React from "react";
import Logo from "../Logo/Logo";
import Searchbar from "../Searchbar/Searchbar";
import Button from "../Button/Button";
import styles from "./Navbar.module.css"





const Navbar=()=>{
    return(
        <nav className={styles.navbar}>
            <Logo/>
            <Searchbar placeholder="Search a album of your choice"/>
            <Button feedbackbut="Give Feedback"/>
        </nav>
        
    );

}
export default Navbar;