import axios from "axios";
import AlbumCard from "../Card/AlbumCard";
import Carousel from "../Carousel/Carousel";
import { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import styles from "./CardSection.module.css";
import { capitalize, Tabs, Tab } from "@mui/material";

export default function CardSection(props) {
  const [albums, setAlbums] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [selectedTab, setSelectedTab] = useState("All");
  const [filteredAlbums, setFilteredAlbums] = useState([]);
  const [genres, setGenre] = useState([]);


  useEffect(() => {
    async function fetchData() {
      try {
        if (props.type === "songs") {
          const response = await axios.get( `https://qtify-backend-labs.crio.do/songs`);
          setAlbums(response.data);
          setFilteredAlbums(response.data);
        } else {
          const response = await axios.get(`https://qtify-backend-labs.crio.do/albums/${props.type}`);
          setAlbums(response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    async function fetchGenres() {
      try {
        const response = await axios.get( `https://qtify-backend-labs.crio.do/genres`);
        const genreList = response.data.data.map((genre) => genre.key);
        setGenre(['All', ...genreList]);

      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    }
    fetchData();
    fetchGenres()
  }, []);

  // Handle Show All toggle for non-songs types.
  const handleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  // Handle tab change for songs filtering.
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
    if (newValue === "All") {
      setFilteredAlbums(albums);
    } else {
      const filtered = albums.filter((album) => 
        album.genre && album.genre.key.toLowerCase() === newValue.toLowerCase()
      );
      setFilteredAlbums(filtered);
    }
  };

  return (
    <section className={styles.Cardcontainer}>
      <header className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>
          {capitalize(props.type)} {props.type !== "songs" ? "Albums" : null}
        </h2>
        {(props.type === "top" || props.type === "new") && (
          <button className={styles.seeAllButton} onClick={handleShowAll}>
            {showAll ? "Collapse" : "Show All"}
          </button>
        )}
      </header>

      <div className={styles.albumContainer}>
        {props.type === "songs" ? (
          <>
            <Tabs
              value={selectedTab}
              onChange={handleTabChange}
              indicatorColor="secondary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              className={styles.tabContainer}
              sx={{
                ".MuiTab-textColorPrimary":{
                  color: `white !important`,
                  fontWeight: 600,
                },
                ".Mui-selected": {
                  color: `white !important`,
                  fontWeight: 600,
                },
                ".MuiTabs-indicator":{
                  backgroundColor: `#34C94B !important`,
                },
                "button": {
                  minWidth: '40px !important', 
                },
              }}
            >
              {genres.map((genre) => (
                <Tab key={genre} label={genre} value={genre}/>
              ))}
            </Tabs>
            <Carousel
              items={filteredAlbums}
              renderItem={(album) => (
                <AlbumCard
                  albumArt={album.image}
                  albumName={album.title}
                  countOfFollowers={album.likes} // For songs, use likes.
                  isSong={true}
                />
              )}
            />
          </>
        ) : (
          <>
            {showAll ? (
              <div className={styles.cardGrid}>
                {albums.map((album) => (
                  <AlbumCard
                    key={album.id}
                    albumArt={album.image}
                    albumName={album.title}
                    countOfFollowers={album.follows}
                  />
                ))}
              </div>
            ) : (
              <Carousel
                items={albums}
                renderItem={(album) => (
                  <AlbumCard
                    albumArt={album.image}
                    albumName={album.title}
                    countOfFollowers={album.follows}
                  />
                )}
              />
            )}
          </>
        )}
      </div>
    </section>
  );
}
