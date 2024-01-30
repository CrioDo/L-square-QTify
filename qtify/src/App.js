// import styles from './App.module.css';
import React from 'react';
import Navbar from "./components/Navbar";
import Hero from './components/Hero/Hero';
import { useState , useEffect } from 'react';
import { fetchTopAlbums ,fetchNewAlbums} from './api/api';
import AlbumGrid from './components/AlbumGrid/AlbumGrid';
import Section from './components/Section/Section';
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
      <Section data = {topAlbumData} title="Top Albums" type="album"/>
      <Section data = {newAlbumData} title="New Albums" type="album"/>
      {/* <AlbumGrid data={topAlbumData} title="Top Album"/>
      <AlbumGrid data={newAlbumData} title="New Album"/> */}
    </div>
  );
}

export default App;
