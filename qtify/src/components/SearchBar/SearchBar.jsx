import React, { useEffect, useState } from "react";
import styles from "./SearchBar.module.css";
import { ReactComponent as SearchIcon } from "../../assets/Search icon.svg";
// import Menu from "../Menu/Menu";
import useComponentVisible from "../../hooks/useComponentVisible";

const SearchBar = (props) => {
	const { placeholder, data } = props;
	const [inputValue, setInputValue] = useState("");
	const [filteredOptions, setFilteredOptions] = useState([]);

	const { ref, isComponentVisible, setIsComponentVisible } =
		useComponentVisible(true);

	const _filterData = (data) => {
		if (!inputValue) {
			setFilteredOptions([]);
			return;
		}

		const filteredOptions = data?.filter((albumsData) =>
			albumsData?.title?.toLowerCase()?.includes(inputValue.toLowerCase())
		);

		setFilteredOptions(filteredOptions);
	};

	useEffect(() => {
		_filterData(data);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [inputValue]);

	return (
		<div>
			<div onClick={() => setIsComponentVisible(true)}>
				<form className={styles.wrapper}>
					<input
						className={styles.search}
						placeholder={placeholder}
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
					/>
					<button className={styles.searchButton} type="submit">
						<SearchIcon className={styles.searchIcon} />
					</button>
				</form>
			</div>

			{isComponentVisible && (
				<div className={styles.dropdownWrapper} ref={ref}>
				</div>
			)}
		</div>
	);
};

export default SearchBar;
