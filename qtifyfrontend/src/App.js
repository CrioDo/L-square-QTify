import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from "./api/api";
function App() {
  const [data, setData] = useState({});
  const generateData = (key, source) => {
    source().then((res) => {
      // console.log(res);
      setData((prevState) => {
        return { ...prevState, [key]: res };
      });
    });
  };
  useEffect(() => {
    generateData("topAlbum", fetchTopAlbums);
    generateData("newAlbum", fetchNewAlbums);
    generateData("songs", fetchSongs);
  }, []);
  // useEffect(() => {
  //   console.log(`Data ==>`, data);
  // });
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
      </Routes>
    </div>
  );
}

export default App;
