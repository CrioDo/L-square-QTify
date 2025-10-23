import React from "react";
import "./App.css";
import Navbar from "./components/pages/Navbar/Navbar";
import Home from "./components/pages/Home/Home";
import { Route, Routes } from "react-router";
import AlbumDetails from "./components/pages/albumDetails/AlbumDetails";




function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/albums/:id" element={<AlbumDetails />} />
      </Routes>
    </div>
  );
}

export default App;
