import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import axios from "axios";
import Section from "./components/Section/Section";

function App() {
  const url = 'https://qtify-backend-labs.crio.do/albums/';

  const [topAlbum, setTopAlbum] = useState([]);
  const [newAlbum, setNewAlbum] = useState([]);

  const topAlbumData = async () => {
    try{
      await axios.get(`${url}/top`)
      .then(resp => {
        setTopAlbum(resp.data);
      })
    }catch(err){
      console.log(err.message);
    }
  }

  const newAlbumData = async () => {
    try{
      await axios.get(`${url}/new`)
      .then(resp => {
        setNewAlbum(resp.data);
      })
    }catch(err){
      console.log(err.message);
    }
  }

  useEffect(() => {
    topAlbumData();
    newAlbumData();
    console.log('top ->',topAlbum);
    console.log('new ->',newAlbum);
  },[]);

  return (
    <div>
      <Navbar />
      <Hero />
      <Section title='Top Album' data={topAlbum}  type='album'/>
      <Section title='New Album' data={newAlbum}  type='album'/>
    </div>
  );
}

export default App;
