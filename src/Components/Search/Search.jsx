import React from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../Assests/Search icon.svg";
const Search = ({ placeholder }) => {
	return (
		<>
			<form
				className={styles.searchbar}
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<input type={styles.search} placeholder={placeholder} />
				<button type="submit" className={styles.searchicon}>
					<SearchIcon />
				</button>
			</form>
		</>
	);
};
export default Search;
