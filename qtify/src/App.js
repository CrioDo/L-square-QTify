
import React from 'react';
import {StyledEngineProvider} from '@mui/material/styles';
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/homePage.jsx";
import { useState } from "react";
import Player from "./components/musicPlayer/Player";
import { Outlet } from "react-router-dom";


function App() {
  let [songData, setSongData] = useState({
    id: 11111,
    img: "https://picsum.photos/200/200",
    duration: 0,
    songName: "",
    albumName: "",
    songURL: "",
  });



  return (
    <div>
      {/* StyledEngineProvider give more priority for material ui css then add the custom css */}
       <StyledEngineProvider injectFirst> 
       <Navbar/>
       <HomePage/>
       <Outlet context={[songData, setSongData]} />
        <Player data={songData} />
       
      </StyledEngineProvider>

    
    </div>
  );
}

export default App;
