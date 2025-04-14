import './App.css';
import HomePage from "./pages/homepage"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" Component={HomePage} />{" "}
    </Routes>
    </>
  );
}

export default App;
