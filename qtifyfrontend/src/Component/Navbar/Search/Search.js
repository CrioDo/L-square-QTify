import React from "react";
import { ReactComponent as SearchLogo } from "../../../assests/SearchIcon.svg";

import styles from "./Search.module.css";
function Search({ placeHolder }) {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={onSubmitHandler} className={styles.searchContainer}>
      <input type="text" className={styles.search} placeholder={placeHolder} />
      <button type="submit" className={styles.searchButton}>
        <SearchLogo />
      </button>
    </form>
  );
}

export default Search;
