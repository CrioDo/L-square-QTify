import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import Section from './Section/Section';
import Faq from './Faq/Faq';
import './colorVar.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  }
});

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [allSongs, setAllSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [genrevalue, setGenreValue] = useState('all');
  useEffect(() => {
    axios.get('https://qtify-backend.labs.crio.do/albums/top').then((response) => {
      setTopAlbums(response.data);
    })
    axios.get('https://qtify-backend.labs.crio.do/albums/new').then((response) => {
      setNewAlbums(response.data);
    })
    axios.get('https://qtify-backend.labs.crio.do/songs').then((response) => {
      setSongs(response.data);
      setAllSongs(response.data);
    })
    axios.get('https://qtify-backend.labs.crio.do/genres').then((response) => {
      setGenres(response.data.data);
    })
    axios.get('https://qtify-backend.labs.crio.do/faq').then((response) => {
      setFaqs(response.data.data);
    })
  }, []);
  const handleGenreChange = (event, newValue) => {
    setGenreValue(newValue)
    if (newValue === 'all') {
      setSongs(allSongs);
    } else {
      const filteredSongs = allSongs.filter(song => song.genre.key === newValue);
      setSongs(filteredSongs);
    }

  };
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Hero />
          <Section label="Top Albums" albums={topAlbums} />
          <hr />
          <Section label="New Albums" albums={newAlbums} />
          <hr />
          <Section label="Songs" albums={songs} isSongs={true} genres={genres} genrevalue={genrevalue} handleGenreChange={handleGenreChange} />
          <hr />
          <Faq faqs={faqs} />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
