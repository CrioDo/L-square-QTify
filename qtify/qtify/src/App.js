import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import styles from './App.module.css';
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from '../src/api/api';
import Section from '../src/Components/Section/Section';
import FilterSection from './Components/FilterSection/FilterSection';

function App() {
  const [topAlbumSongs, setTopAlbumSongs] = useState([]);
  const [newAlbumSongs, setNewAlbumSongs] = useState([]);
  const [filteredDataValues, setFilteredDataValues] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState(0);

  const generateSongsData = (value) => {
    let songData = newAlbumSongs[0]?.songs || [];

    let key;
    if (value === 0) {
      setFilteredDataValues(songData);
      return;
    }

    switch (value) {
      case 1: key = 'rock'; break;
      case 2: key = 'pop'; break;
      case 3: key = 'jazz'; break;
      case 4: key = 'blues'; break;
      default: key = ''; break;
    }

    const data = songData.filter(item => item.genre.key === key);
    setFilteredDataValues(data);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    generateSongsData(newValue);
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const generateTopAlbumSongs = async () => {
    try {
      const topAlbums = await fetchTopAlbums();
      setTopAlbumSongs(topAlbums);
    } catch (error) {
      console.error('Error fetching top albums:', error);
    }
  };

  const generateNewAlbumSongs = async () => {
    try {
      const newAlbums = await fetchNewAlbums();
      setNewAlbumSongs(newAlbums);
    } catch (error) {
      console.error('Error fetching new albums:', error);
    }
  };

  const generateFilterSongs = async () => {
    try {
      const songs = await fetchSongs();
      setFilteredDataValues(songs);
    } catch (error) {
      console.error('Error fetching songs:', error);
    }
  };

  useEffect(() => {
    generateTopAlbumSongs();
    generateNewAlbumSongs();
    generateFilterSongs();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <div className={styles.sectionWrapper}>
        <Section title="Top Albums" apiEndpoint="https://qtify-backend-labs.crio.do/albums/top" />
        <Section title="New Albums" apiEndpoint="https://qtify-backend-labs.crio.do/albums/new" />
        <FilterSection
          data={newAlbumSongs}
          type="songFilter"
          title="Songs"
          filteredData={generateSongsData}
          filteredDataValues={filteredDataValues}
          value={value}
          handleChange={handleChange}
          handleToggle={handleToggle}
        />
      </div>
    </>
  );
}

export default App;
