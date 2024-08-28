import { Box } from "@mui/material";
import styles from './SearchBar.module.css';
import Search from "./Search";
import SearchButton from "./SearchButton";

const SearchBar = () => {
    return (
        <Box className={styles.search_bar}>
            <Search />
            <SearchButton />
        </Box>
    );
};

export default SearchBar;