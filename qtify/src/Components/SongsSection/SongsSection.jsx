import React, { useState, useEffect } from "react";
import { Tabs, Tab } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import styles from "./SongsSection.module.css";

export default function SongsSection() {
  const [genres, setGenres] = useState([]);
  const [songs, setSongs] = useState([]);
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch genres
        const genresRes = await fetch(
          "https://qtify-backend.labs.crio.do/genres"
        );
        if (!genresRes.ok) throw new Error("Failed to fetch genres");
        const genresData = await genresRes.json();
        console.log("Genres Data:", genresData);
        setGenres(genresData.data || []);

        // Fetch songs
        const songsRes = await fetch(
          "https://qtify-backend.labs.crio.do/songs"
        );
        if (!songsRes.ok) throw new Error("Failed to fetch songs");
        const songsData = await songsRes.json();
        setSongs(songsData || []);

        setError(null);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load songs and genres");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleTabChange = (event, newValue) => {
    setSelectedTabIndex(newValue);
    if (newValue > 0) {
      const selectedGenre = genres[newValue - 1];
      console.log("Selected Genre:", selectedGenre);
      console.log("Songs with this genre:", songs.filter((song) => {
        if (!song.genre) return false;
        return (
          song.genre.id === selectedGenre.id ||
          song.genre.id === selectedGenre.key ||
          song.genre.key === selectedGenre.key ||
          song.genre.key === selectedGenre.id
        );
      }));
    }
  };

  const getFilteredSongs = () => {
    if (selectedTabIndex === 0) {
      // "All" tab - show all songs
      return songs;
    }
    
    // Get the selected genre
    const selectedGenre = genres[selectedTabIndex - 1];
    if (!selectedGenre) return [];
    
    // Filter songs by matching genre key (case-insensitive)
    const selectedGenreKey = (selectedGenre.key || selectedGenre.label).toLowerCase();
    
    const filtered = songs.filter((song) => {
      if (!song.genre) return false;
      const songGenreKey = (song.genre.key || song.genre.label).toLowerCase();
      return songGenreKey === selectedGenreKey;
    });
    
    console.log(`Filtered songs for genre "${selectedGenre.label}":`, filtered.length, "songs");
    return filtered;
  };

  const filteredSongs = getFilteredSongs();

  const renderSongCard = (song) => (
    <Card
      image={song.image}
      title={song.title}
      likes={song.likes}
    />
  );

  return (
    <section className={styles.songsSection}>
      <h2 className={styles.title}>Songs</h2>

      {loading && <p className={styles.loading}>Loading songs...</p>}
      {error && <p className={styles.error}>{error}</p>}

      {!loading && genres.length > 0 && songs.length > 0 && (
        <>
          <Tabs
            value={selectedTabIndex}
            onChange={handleTabChange}
            className={styles.tabs}
            variant="scrollable"
            scrollButtonsDisplay="auto"
          >
            <Tab label="All" className={styles.tab} />
            {genres.map((genre) => (
              <Tab
                key={genre.key}
                label={genre.label}
                className={styles.tab}
              />
            ))}
          </Tabs>

          {filteredSongs.length > 0 && (
            <Carousel data={filteredSongs} renderItem={renderSongCard} />
          )}
          {filteredSongs.length === 0 && (
            <p className={styles.noSongs}>No songs found for this genre</p>
          )}
        </>
      )}
    </section>
  );
}
