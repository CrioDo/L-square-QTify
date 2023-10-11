import React from 'react';
import styles from './Search.module.css';
import {ReactComponent as SearchIcon} from "../../Assests/Search-icon.svg";

const Search = () => {
    return (
        <>
            <form className={styles.wrapper}>
                <input className={styles.search}/>
                <button className={styles.searchButton}>
                    <SearchIcon />
                </button>
            </form>
        </>
    )
}

export default Search;