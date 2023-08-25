import NavBar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Section from "./Components/Section/Section";
import { fetchTopAlbum } from "./api/api";
import styles from "./App.module.css";
import { useEffect, useState } from "react";
function App() {
  const [topAlbumData, setTopAlbumData] = useState([]);

  const generateTopAlbumData = async () => {
    try {
      const data = await fetchTopAlbum();
      setTopAlbumData(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    generateTopAlbumData();
  }, []);

  return (
    <>
      <NavBar />
      <Hero />
      <div className={styles.sectionWrapper}>
        <Section type="album" title="Top Album" data={topAlbumData} />
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
