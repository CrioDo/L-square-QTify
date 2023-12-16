import React from 'react';
import './App.css';
import Search from './Components/Search/Search';
import Button from './Components/Button/Button';
function App() {


  return (
    <>
      <Button>Give Feedback</Button>
      <Search placeholder='Search a song of your choice' />
    </>
  );
}

export default App;
