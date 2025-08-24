import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useFetch from "./hooks/useFetch";

const theme = createTheme({
  palette: {
    primary: {
      main: '#34C94B'
    }
  }
})

function App() {

  const { response: genres } = useFetch('/genres')

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <Outlet context={{genres: genres}} />
      </div>
    </ThemeProvider>
  );
}

export default App;
