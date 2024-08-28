import searchIcon from '../../assets/Search icon.svg';
import styles from './SearchButton.module.css';

const SearchButton = () => {
    return (

        <button 
            className={styles.icon_button}
        >
            <img src={searchIcon} alt='search-icon'></img>
        </button>
    );
};

export default SearchButton;