import React from 'react'
import styles from "./Search.module.css"
import {ReactComponent as SearchIcon} from '../../assets/SearchIcon.svg'

const Search = () => {
  return (
    <form className={styles.wrapper}>
        <input className={styles.search} placeholder='Search a album of your choice'/>
        <button className={styles.searchButton} type='submit'>
            <SearchIcon />
        </button>
    </form>
  )
}

export default Search