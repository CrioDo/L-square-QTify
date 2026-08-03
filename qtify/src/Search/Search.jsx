import React, { useState } from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../assets/search-icon.svg";
import { useNavigate } from "react-router-dom";

function Search({ placeholder = "Search a song of your choice" }) {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        const value = query.trim();

        if (value) {
            navigate(`/album/${value.toLowerCase().replace(/\s+/g, "-")}`);
        }
    };

    return (
        <div className={styles.maindiv}>
            <form className={styles.wrapper} onSubmit={onSubmit}>
                <input
                    name="album"
                    className={styles.search}
                    placeholder={placeholder}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    required
                />
                <div>
                    <button className={styles.searchButton} type="submit">
                        <SearchIcon />
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Search;
