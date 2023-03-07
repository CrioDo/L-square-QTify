import React from "react";
import { Button } from "../Button/Button";
import { Logo } from "../Logo/Logo";
import { Search } from "../Search/Search";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Logo />
      <Search placeholder="Search a song of your choice" />
      <Button>Give Feedback</Button>
    </div>
  );
};

//cafc rafc
