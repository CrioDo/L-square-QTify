// import styles from './App.module.css';
import React from 'react';
import Navbar from "./components/Navbar";
import Hero from './components/Hero/Hero';
import { useState , useEffect } from 'react';
import { fetchTopAlbums ,fetchNewAlbums} from './api/api';
import AlbumGrid from './components/AlbumGrid/AlbumGrid';

function App() {
  const [topAlbumData,setTopAlbumData]=useState([]);
  const [newAlbumData,setNewAlbumData] = useState([]);

  const genrateTopAlbum=async () => {
    try{
      const data = await fetchTopAlbums();
      setTopAlbumData(data);
    }catch(err){
      console.log(err)
    }
  }

  const genrateNewAlbum=async () => {
    try{
      const data = await fetchNewAlbums();
      setNewAlbumData(data);
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    genrateTopAlbum();
    genrateNewAlbum();
  },[]);
  return (
    <div >
      <Navbar/>
      <Hero/>
      <AlbumGrid data={topAlbumData} title="Top Album"/>
      <AlbumGrid data={newAlbumData} title="New Album"/>
    </div>
  );
}

export default App;
