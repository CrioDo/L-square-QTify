import styles from './Search.module.css';


const Search = () => {
    return (
        <input 
            className={styles.search}
            type='text'
            placeholder='Search a song of your choice'
        >
        </input>
    );
};

export default Search;