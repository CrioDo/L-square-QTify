import React, { useEffect, useState } from "react";
import { StyledEngineProvider } from "@mui/material/styles";

import { Navbar } from "./components/Navbar/Navbar";
import { FAQSection } from "./components/AccordianFAQ/FAQSection";
import { Outlet } from "react-router-dom";
import { fetchAlbumData, fetchSongsData } from "./api/api";

function App() {
  const [data, setData] = useState({});

  const generateData = (getMethod, type, title) => {
    getMethod(type).then((responseData) => {
      setData((prevState) => {
        return { ...prevState, [title]: responseData };
      });
    });
  };

  useEffect(() => {
    generateData(fetchAlbumData, "top", "topAlbum");
    generateData(fetchAlbumData, "new", "newAlbum");
    generateData(fetchSongsData, "songs", "songs");
  }, []);
  // const { topAlbum = [], newAlbum = [], songsAlbum = [] } = data; destructure data
  return (
    <StyledEngineProvider injectFirst>
      <>
        {Object.keys(data).length > 0 && (
          <Navbar searchData={[...data.topAlbum, ...data.newAlbum]} />
        )}

        <Outlet context={{ outletContextData: { data } }} />
      </>
    </StyledEngineProvider>
  );
}

export default App;
