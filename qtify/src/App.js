import NavBar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Section from "./Components/Section/Section";
import { fetchTopAlbum, fetchNewAlbum } from "./api/api";
import styles from "./App.module.css";
import { useEffect, useState } from "react";
function App() {
  const [topAlbumData, setTopAlbumData] = useState([]);
  const [newAlbumData , setNewAlbumData]=useState([]);
//top Album
  const generateTopAlbumData = async () => {
    try {
      const data = await fetchTopAlbum();
      setTopAlbumData(data);
    } catch (err) {
      console.error(err);
    }
  };

  

  //new Album
  const generateNewAlbumData = async ()=>{
      try{
        const data=await fetchNewAlbum();
          setNewAlbumData(data);
      }catch(err){
        console.error(err)
      }
  }
  useEffect(() => {
    generateTopAlbumData();
    generateNewAlbumData();
  }, []);
  return (
    <>
      <NavBar />
      <Hero />
      <div className={styles.sectionWrapper}>
        <Section type="album" title="Top Album" data={topAlbumData} />
        <Section type="album" title="New Album" data={newAlbumData} />
      </div>
    </>
  );
}
export default App;

// return (
//   <>
//     <NavBar/>
//     <Hero />
//     {
//       topAlbumData.map(elem => {
//         return(
//         <Cards data={elem} type="album"/>
//         )
//       })
//     }

//   </>
// );

// topAlbumData && topAlbumData.length > 0 && topAlbumData.map(elem => (
//   <Cards data={elem} type="album" />
// ))

// topAlbumData.length > 0 ?
// topAlbumData.map((item)=>{
// return(
//   <Cards data={item} type="album" />
// )
// }):""
