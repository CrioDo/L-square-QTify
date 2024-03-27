
import React from 'react';
import {StyledEngineProvider} from '@mui/material/styles';
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/homePage.jsx";



function App() {
  



  return (
    <div>
      {/* StyledEngineProvider give more priority for material ui css then add the custom css */}
       <StyledEngineProvider injectFirst> 
       <Navbar/>
       <HomePage/>
       
       
      </StyledEngineProvider>

    
    </div>
  );
}

export default App;
