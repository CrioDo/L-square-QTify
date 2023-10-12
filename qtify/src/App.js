import { useEffect, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Card from './Components/Card/Card'
import './App.css';
import { fetchTopAlbums } from './api/api';

function App() {
  const [topAlbumsData, setTopAlbumsData] = useState([]);

  const generateTopAlbumsData = async () => {
    const data = await fetchTopAlbums();
    // console.log(data);'
    setTopAlbumsData(data);
  }

  useEffect(() =>{
    generateTopAlbumsData();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      {
        topAlbumsData.map((item) =>{
          return (
            <Card key={item.id} data={item} type="album" />
          )
        })
      }
    </div>
  );
}

export default App;
