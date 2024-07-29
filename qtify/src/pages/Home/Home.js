import styles from "./Home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";

export default function Home() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbum, setNewAlbum] = useState([]);
  const [songs, setSongs] = useState([]);
  const [topAlbumCollapse, setTopAlbumCollapse] = useState(true);
  const [newAlbumCollapse, setNewAlbumCollapse] = useState(true);

  const fetchFilters = async () => {
    try {
      const res = await axios.get("https://qtify-backend-labs.crio.do/genres");
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    axios
      .get("https://qtify-backend-labs.crio.do/albums/top")
      .then((response) => {
        setTopAlbums(response.data);
      });
    axios
      .get("https://qtify-backend-labs.crio.do/albums/new")
      .then((response) => {
        setNewAlbum(response.data);
      });
    axios.get("https://qtify-backend-labs.crio.do/songs").then((response) => {
      setSongs(response.data);
    });
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>

      <div className={styles.section}>
        <div className={styles.title}>
          <p>Top Albums</p>
          <Button onClick={() => setTopAlbumCollapse(!topAlbumCollapse)}>
            {topAlbumCollapse ? "Show all" : "Collapse"}
          </Button>
        </div>
        <Section data={topAlbums} collapsed={topAlbumCollapse} type="album" />
      </div>
      <div className={styles.section}>
        <div className={styles.title}>
          <p>New Albums</p>
          <Button onClick={() => setNewAlbumCollapse(!newAlbumCollapse)}>
            {newAlbumCollapse ? "Show all" : "Collapse"}
          </Button>
        </div>
        <Section data={newAlbum} collapsed={newAlbumCollapse} type="album" />
      </div>
      <div className={styles.section}>
        <div className={styles.title}>
          <p>Songs</p>
        </div>
        <Section
          data={songs}
          collapsed={true}
          type="song"
          filterSource={fetchFilters}
        />
      </div>
    </div>
  );
}
