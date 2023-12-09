import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import {
  fetchTopAlbums,
  fetchNewAlbums,
  fetchSongs,
  fetchFilters,
  fetchAlbumSongs,
} from "./api/api";
import { useEffect, useState } from "react";
import { StyledEngineProvider } from "@mui/material";

function App() {
  const [data, setData] = useState({});
  const generateData = (key, source) => {
    source().then((data) => {
      setData((prevData) => ({ ...prevData, [key]: data }));
    });
  };
  useEffect(() => {
    generateData("topAlbums", fetchTopAlbums);
    generateData("newAlbums", fetchNewAlbums);
  }, []);

  const { topAlbums = [], newAlbums = [] } = data;

  return (
    <>
      <StyledEngineProvider>
        <Navbar />
        <Outlet context={{ data: { topAlbums, newAlbums } }} />
      </StyledEngineProvider>
    </>
  );
}

export default App;
