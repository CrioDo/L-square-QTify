import React from "react";
import {Button} from "@mui/material";
import {ReactComponent as SearchIcon} from "../../assets/searchicon.svg"
import searchstyle from "./Searchbar.module.css";
const searchbar = ({ placeholder }) => {
  return (
    <div>
      <input className={searchstyle.search} placeholder={placeholder} />
     <Button className={searchstyle.searchbutton}>
         <SearchIcon/>
        </Button>

    </div>
  );
};
export default searchbar;
