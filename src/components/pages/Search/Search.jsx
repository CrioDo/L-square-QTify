// src/components/Search/Search.jsx
import React, { useState, useEffect, useRef, useMemo } from "react";
import axios from "axios";
import styles from "./Search.module.css";
import {
  TextField,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Popper,
  ClickAwayListener,
  InputAdornment,
} from "@mui/material";
import debounce from "lodash/debounce";
import { useNavigate } from "react-router";

const SONGS_API = "https://qtify-backend.labs.crio.do/songs";

function Search() {
  const navigate = useNavigate()
  const [query, setQuery] = useState("");
  const [songs, setSongs] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  // fetch all songs once
  useEffect(() => {
    axios
      .get(SONGS_API)
      .then((res) => setSongs(res.data))
      .catch((err) => console.error("Error fetching songs:", err));
  }, []);

  // debounce filtering
  const debouncedFilter = useMemo(
    () =>
      debounce((searchTerm) => {
        if (!searchTerm.trim()) {
          setFiltered([]);
          return;
        }
        const lower = searchTerm.toLowerCase();
        const result = songs.filter(
          (song) =>
            song.title?.toLowerCase().includes(lower) ||
            song.artist?.toLowerCase().includes(lower)
        );
        setFiltered(result);
      }, 300), // 300ms debounce
    [songs]
  );

  // handle query change
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setOpen(true);
    debouncedFilter(value);
  };

  const handleSelect = (song) => {
    console.log("Selected song:", song);
    setQuery(song.title);
    setOpen(false);
    navigate(`/albums/${song.id}`);
  };

  useEffect(() => {
    return () => {
      debouncedFilter.cancel();
    };
  }, [debouncedFilter]);

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div className={styles.searchWrapper}>
        <TextField
          fullWidth
          placeholder="Search songs..."
          value={query}
          onChange={handleChange}
          onFocus={() => query && setOpen(true)}
          inputRef={anchorRef}
          size="small"
          sx={{
            backgroundColor: "#fff",
            borderRadius: "5px",
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <img
                  src="/Search.png"
                  alt="Search"
                  className={styles.icon}
                />
              </InputAdornment>
            ),
          }}
        />

        <Popper
          open={open && filtered.length > 0}
          anchorEl={anchorRef.current}
          style={{ zIndex: 1300, width: anchorRef.current?.offsetWidth || 400 }}
          placement="bottom-start"
        >
          <Paper
            style={{
              maxHeight: 400,
              overflowY: "auto",
              width: "422px",
              background: "#0a0a0aff",
              color: "#fff",
              marginTop: "0px"
            }}
          >
            <List dense>
              {filtered?.map((song) => (
                <ListItemButton
                  key={song.id}
                  onClick={() => handleSelect(song)}
                  sx={{
                    mb: 0.5,
                    "&:hover": {
                      backgroundColor: "#007BFF",
                      color: "#fff",
                    },
                  }}
                >
                  <ListItemText
                    primary={song.title}
                    secondary={`${song.artists.join(", ")} • ${song.genre.label}`}
                    primaryTypographyProps={{ color: "#fff" }} // primary text white
                    secondaryTypographyProps={{ color: "#fff" }} // secondary text white
                  />
                </ListItemButton>
              ))}
            </List>
          </Paper>

        </Popper>
      </div>
    </ClickAwayListener>
  );
}

export default Search;
