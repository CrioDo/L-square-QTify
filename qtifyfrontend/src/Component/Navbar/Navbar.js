import React from "react";
import styles from "./Navbar.module.css";
import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import Button from "./Button/Button";
function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <nav className={styles.navbar}>
        <a href="/">
          <Logo />
        </a>
        <Search placeHolder="Search a album of your choice" />
        <Button>Give Feedback</Button>
      </nav>
    </div>
  );
}

export default Navbar;
