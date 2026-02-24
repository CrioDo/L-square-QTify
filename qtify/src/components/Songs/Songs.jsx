import { useEffect, useState } from "react";
import axios from "axios";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";
import styles from "./Songs.module.css";

function Songs() {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selected, setSelected] = useState("all");

  useEffect(() => {
    axios
      .get("https://qtify-backend.labs.crio.do/songs")
      .then((res) => setSongs(res.data));

    axios
      .get("https://qtify-backend.labs.crio.do/genres")
      .then((res) => setGenres(res.data.data));
  }, []);

  const filteredSongs =
    selected === "all"
      ? songs
      : songs.filter((song) => song.genre.key === selected);

  return (
    <div className={styles.section}>
      <h2>Songs</h2>

      <Tabs
        value={selected}
        onChange={(e, val) => setSelected(val)}
        textColor="inherit"
        indicatorColor="primary"
        className={styles.tabs}
      >
        <Tab label="All" value="all" />
        {genres.map((genre) => (
          <Tab
            key={genre.key}
            label={genre.label}
            value={genre.key}
          />
        ))}
      </Tabs>

      <Carousel
        data={filteredSongs}
        renderCard={(song) => (
          <Card key={song.id} data={song} type="songs" />
        )}
      />
    </div>
  );
}

export default Songs;