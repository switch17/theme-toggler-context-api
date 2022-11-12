import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import Themes from "../Themes";
import ThemeToggler from "./ThemeToggler";

const Jumbotron = () => {
  // theme variable to be assigned values coming up from ThemeContext
  const theme = useContext(ThemeContext)[0];
  //   accessing and storing the theme from AppTheme as per ThemeContext
  const currentTheme = Themes[theme];

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "1rem",
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`,
        textAlign: "center",
      }}
    >
      <h1>Context API theme toggler</h1>
      <p>lorem ipsum dolor sit.</p>
      <ThemeToggler />
    </div>
  );
};

export default Jumbotron;
