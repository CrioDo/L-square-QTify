import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { StyledEngineProvider } from "@mui/material";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </StyledEngineProvider>
  );
}

export default App;
