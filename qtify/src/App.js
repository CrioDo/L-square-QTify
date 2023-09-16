import NavBar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Section from "./Components/Section/Section";
import { fetchTopAlbum,fetchSongsData } from "./api/api";
import styles from "./App.module.css";
import React, { useEffect, useState } from "react";
import  Accordion  from "./Components/Accordion/Accordion";

function App() {
  const [data, setData] = useState([]);
  const [filteredDataValues , setFilterDataValues]=useState([]);
  const [songsData ,setSongsData] =useState([]);
  const [toggle, setToggle]=useState(false);
  const [value,setValues]= React.useState(0);

  const toggleHandle=()=>{
      setToggle(!toggle);
  }
  const handleChange=(event,newValue)=>{
    setValues(newValue);
  }
  //songs 
  const generateSongsData = (value) =>{
      let key;
      if(value ===0){
        filterData(songsData);
        return;
      }
      else if(value === 1){
        key ="rock";
      }
      else if(value === 2){
        key= "pop";
      }
      else if(value ===3){
        key="jazz";
      }else if(value ===4){
        key="blues"
      }
      const res=songsData.filter((item) => item.genre.key ===key)
      filterData(res)
  }
  useEffect(()=>{
    generateSongsData(value);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[value])

  const generateData= async () =>{
    try{
      const res=await fetchTopAlbum()
      setData(res)
    }catch(err){
      console.err(err)
    }
  }

  const generateAllSongsData= async () =>{
    try {
      const res=await fetchSongsData()
      setSongsData(res)
      setFilterDataValues(res)
    } catch (err) {
      console.error(err)
    }
  }
const filterData=(val)=>{
  setFilterDataValues(val)
}
  useEffect(() => {
   generateData();
    generateAllSongsData();
  }, []);
  return (
    <>
      <NavBar data={data}/>
      <Hero />
      <div className={styles.sectionWrapper}>
        <Section  data={data} type="album" title="Top Album" filteredDataValues={data} />
        <Section data={data} type="album" title="New Album" filteredDataValues={data} />
        <Section data={songsData} type="song" title="Songs" filterData={filterData} filteredDataValues={filteredDataValues} value={value} toggleHandle={toggleHandle} handleChange={handleChange} />
      </div>
      <Accordion />
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
  // const generateTopAlbumData = async () => {
  //   try {
  //     const data = await fetchTopAlbum();
  //     setTopAlbumData(data);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  

  // //new Album
  // const generateNewAlbumData = async ()=>{
  //     try{
  //       const data=await fetchNewAlbum();
  //         setNewAlbumData(data);
  //     }catch(err){
  //       console.error(err)
  //     }
  // }