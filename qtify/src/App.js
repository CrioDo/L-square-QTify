import { useEffect , useState} from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import { fetchTopAlbums } from './api/api';
import Section from './components/Section/Section';

function App() {
  
  const [topAlbumsData, setTopAlbumsData] = useState([])

  const generateTopAlbums = async() => {
    try{
      const data = await fetchTopAlbums()
      setTopAlbumsData(data)
    }catch(err){
      console.log(err.message)
    }
  }


  useEffect(() => {
    generateTopAlbums()
  }, [])


  return (
    <>
      <Navbar/>
      <Hero/>
      <Section data={topAlbumsData} title="Top Albums" type="album"/>
    </>
  );
}

export default App;
