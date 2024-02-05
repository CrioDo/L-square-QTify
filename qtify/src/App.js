// import logo from './logo.svg';
import './App.css';
import { Outlet } from "react-router-dom"; 
import Navbar from "./components/Navbar/Navbar";
import { fetchNewAlbums, fetchSongs, fetchTopAlbums } from "./api/api";
import { useEffect, useState } from "react";


function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

//   const [searchData, useSearchData] = useState();
  const [data, setData] = useState({});
  
  const generateData = (key, source) => {
      source().then((data) => {
          setData((prevData) =>{
              return {...prevData, [key]:data};
          })
      })
  }

  useEffect(() => {
      generateData("topAlbums", fetchTopAlbums);
      generateData("newAlbums", fetchNewAlbums);
      generateData("songs", fetchSongs);
  }, [])
  const {topAlbums = [], newAlbums = [], songs = []} = data;
  return (
      <>
      <div>
         <Navbar />
         <Outlet context={{ data: {topAlbums, newAlbums, songs}}} />
      </div>       
      </>
  );
}

export default App;
