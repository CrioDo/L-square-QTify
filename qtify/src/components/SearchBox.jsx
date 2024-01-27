import React from 'react'
import styles from "./SearchBox.module.css";
import {ReactComponent as SearchIcon} from "../assets/Search icon.svg";
const SearchBox = ({placeholder}) => {
  return (
    <form className={styles.wrapper}>
<div>
    <input className={styles.search} placeholder={placeholder}/>
</div>
<div>
    <button className={styles.searchButton} type='submit'>
<SearchIcon />
    </button>
</div>
    </form>
  )
}

export default SearchBox