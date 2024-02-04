import { useEffect , useState} from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import { fetchTopAlbums } from './api/api';
import Section from './components/Section/Section';

function App() {
  
  const [topAlbums, setTopAlbums] = useState([])

  const generateTopAlbums = async() => {
    try{
      const data = await fetchTopAlbums()
      setTopAlbums(data)
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
      <Section data={topAlbums} title="Top Albums" type="album"/>
    </>
  );
}

export default App;
