// import styles from './App.module.css';
import React from 'react';
import Navbar from "./components/Navbar";
import Hero from './components/Hero/Hero';
import { useState , useEffect } from 'react';
import { fetchTopAlbums ,fetchNewAlbums} from './api/api';
import Section from './components/Section/Section';
import  styles from './App.module.css';
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
      <div className={styles.sectionWrapper}>
      <Section data = {topAlbumData} title="Top Albums" type="album"/>
      <Section data = {newAlbumData} title="New Albums" type="album"/>
      </div>
      {/* <AlbumGrid data={topAlbumData} title="Top Album"/>
      <AlbumGrid data={newAlbumData} title="New Album"/> */}
    </div>
  );
}

export default App;
//this
