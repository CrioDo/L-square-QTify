import React from "react";
import Button from "./components/Button/Button";
import Search from "./components/Search/Search";

function App() {
  return (
    <div>
      <Button>Give Feedback</Button>
      <Search placeholder={"Search a album of your choice"} />
    </div>
  );
}

export default App;
