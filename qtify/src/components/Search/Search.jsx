import React from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";

function Search({placeholder, searchData}) {

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form className={styles.wrapper} onSubmit={onSubmit}>
            <input className={styles.search} required placeholder={placeholder} />
            <button className={styles.searchButton} type="submit">
                <SearchIcon/>
            </button>
        </form>
    )
}

export default Search