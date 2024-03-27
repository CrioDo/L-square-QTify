
import React from 'react';
import {StyledEngineProvider} from '@mui/material/styles';
import Navbar from "./components/Navbar/Navbar";




function App() {
  



  return (
    <div>
      {/* StyledEngineProvider give more priority for material ui css then add the custom css */}
       <StyledEngineProvider injectFirst> 
       <Navbar/>
      </StyledEngineProvider>

    
    </div>
  );
}

export default App;
