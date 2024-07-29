import { Box, Link } from "@mui/material";
import styles from "./Navbar.module.css";
import SearchIcon from "@mui/icons-material/Search";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <img src="logo.png" className={styles.logo} alt="Logo" />
      </Link>

      <Box className={styles.searchbar}>
        <input placeholder="Search a album of your choice" name="search" />
        <button>
          <SearchIcon fontSize="large" />
        </button>
      </Box>

      <button className={styles.feedbackButton}>Give Feedback</button>
    </nav>
  );
}
