import React, { useEffect } from "react";
import { fetchTopSongs } from "./api/api";
import { CarouselComponent } from "./components/Carousel/CarouselComponent";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { Navbar } from "./components/Navbar/Navbar";
import { Section } from "./components/Section/Section";
function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Section title="Top Album" dataSourse={fetchTopSongs} />
    </>
  );
}

export default App;
