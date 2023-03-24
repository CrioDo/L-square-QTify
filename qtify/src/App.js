import React from "react";
import { StyledEngineProvider } from "@mui/material/styles";

import { HeroSection } from "./components/HeroSection/HeroSection";
import { Navbar } from "./components/Navbar/Navbar";
import { Sections } from "./components/Sections/Sections";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <>
        <Navbar />
        <HeroSection />
        <Sections />
      </>
    </StyledEngineProvider>
  );
}

export default App;
