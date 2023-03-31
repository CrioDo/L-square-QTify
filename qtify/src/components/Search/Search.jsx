import React from "react";
import styles from "../Search/Search.module.css";
// import { ReactComponent as SearchIcon } from "../../assets/Search_icon.png";
import useAutocomplete from "@mui/base/useAutocomplete";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { SearchContent } from "./SearchContent";

const Listbox = styled("ul")(({ theme }) => ({
  width: "100%",
  margin: 0,
  padding: 0,
  zIndex: 10,
  position: "absolute",
  borderRadius: "0px 0px 10px 10px",
  listStyle: "none",
  backgroundColor: "var(--color-black)",
  overflowY: "scroll",
  maxHeight: "200px",
  border: "1px solid var(--color-primary)",
  "& li.Mui-focused": {
    backgroundColor: "#4a8df6",
    color: "white",
    cursor: "pointer",
  },
  "& li:active": {
    backgroundColor: "#2977f5",
    color: "white",
  },
}));

export const Search = ({ placeholder, searchData }) => {
  // console.log("in search -", searchData);
  const navigate = useNavigate();
  const {
    getRootProps,
    getInputProps,
    value,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: "use-autocomplete-demo",
    options: searchData || [],
    getOptionLabel: (album) => album.title,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/album/${value.slug}`);
  };
  return (
    <div style={{ position: "relative" }}>
      <form className={styles.search_box} onSubmit={handleSubmit}>
        <div {...getRootProps()}>
          <input
            className={styles.search_input}
            placeholder={placeholder}
            required
            {...getInputProps()}
          />
        </div>
        <button className={styles.search_button} type="submit">
          <img src={require("../../assets/Search_icon.png")} alt="search" />
          {/* <SearchIcon /> */}
        </button>
      </form>
      {groupedOptions.length > 0 ? (
        // <Listbox {...getListboxProps()}>
        //   {groupedOptions.map((option, index) => (
        //     <li
        //       {...getOptionProps({ option, index })}
        //       className={styles.listElement}
        //     >
        //       <SearchContent option={option} />
        //     </li>
        //   ))}
        // </Listbox>
        <>
          {console.log("groupedOptions -", groupedOptions)}
          <Listbox {...getListboxProps()}>
            {groupedOptions.map((album, index) => (
              <>
                {album.songs.map((option) => (
                  <li
                    {...getOptionProps({ option, index })}
                    className={styles.listElement}
                    key={option.id + album.id}
                  >
                    {/* {option.title} */}
                    <SearchContent song={option} option={album} />
                  </li>
                ))}
              </>
            ))}
          </Listbox>
        </>
      ) : null}
    </div>
  );
};
