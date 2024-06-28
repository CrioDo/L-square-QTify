import React from "react";
// The imported PNG file is treated as a React component, and you can use it just like any other React component in your application.
import {ReactComponent as SearchIcon} from  "../../assets/search-icon.svg"
import styles from "./SearchBar.module.css";

const SearchBar = ({search}) => {

    return (
        <form className={styles.wrapper}>
            <input
                className={styles.search}
                placeholder={search}
            />
            <button className={styles.searchButton} type="submit"><SearchIcon /></button>
        </form>
    );
}

export default SearchBar;