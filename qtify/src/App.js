import React, { useEffect } from "react";
import { fetchTopSongs } from "./api/api";
import { fetchAlbumData } from "./api/api";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { Navbar } from "./components/Navbar/Navbar";
import { Section } from "./components/Section/Section";
function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Section title="Top Album" dataSourse={fetchAlbumData} type="top" />
      <Section title="New Album" dataSourse={fetchAlbumData} type="new" />
    </>
  );
}

export default App;
