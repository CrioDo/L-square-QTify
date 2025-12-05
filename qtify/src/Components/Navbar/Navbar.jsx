import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import Search from "../Search/Search"
import styles from "./Navbar.module.css";
import { Button } from "@mui/material";

function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.leftArea}>
        <Link to="/" className={styles.logoLink}>
          <Logo />
        </Link>
      </div>

      <div className={styles.searchContainer}>
        <Search
          placeholder="Search a album of your choice"
          searchData={searchData}
        />
      </div>

      <div className={styles.rightArea}>
        <Button className={styles.feedbackButton}>Give Feedback</Button>
      </div>
    </nav>
  );
}

export default Navbar;
