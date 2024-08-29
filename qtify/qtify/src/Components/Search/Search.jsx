import './Search.css';
import searchIcon from '../assets/Searchicon.svg'; 

const Search = () => {
  return (
    <div className="search-box">
      <input placeholder="Search a album of your choice" className="text-box" />
      <div className="search-icon-box">
        <img src={searchIcon} alt="search" />
      </div>
    </div>
  );
};

export default Search;