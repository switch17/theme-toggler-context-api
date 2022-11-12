import React, { useState } from "react";
import Jumbotron from "./Components/Jumbotron";
import ThemeContext from "./Context/ThemeContext";

const App = () => {
  const themeHook = useState("light");

  return (
    <ThemeContext.Provider value={themeHook}>
      <Jumbotron />
    </ThemeContext.Provider>
  );
};

export default App;
