import styles from "./Search.module.css";
import searchIcon from "../../assets/search.png";

function Search({ placeholder }) {
  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        className={styles.search}
        placeholder={placeholder}
      />
      <button className={styles.searchButton}>
        <img src={searchIcon} alt="search" />
      </button>
    </div>
  );
}

export default Search;