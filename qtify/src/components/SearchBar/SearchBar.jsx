import s from "./SearchBar.module.css";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";

export const SearchBar = ({ onSearch, searchText="" }) => {
  return (
    <div className={s.root}>
      <input
        placeholder="Search an album of your choice"
        value={searchText}
        onChange={onSearch}
      />
      <button >
        <SearchIcon />
      </button>
    </div>
  );
};
