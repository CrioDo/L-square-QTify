import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <Logo />
      </Link>

      <Search placeholder="Search a song of your choice" />

      <Button>Give Feedback</Button>
    </nav>
  );
}

export default Navbar;