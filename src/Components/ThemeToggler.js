import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import Themes from "../Themes";
import { BsLightbulbFill, BsLightbulbOffFill } from "react-icons/bs";

const ThemeToggler = () => {
  // using context to change theme
  const [currentTheme, setCurrentTheme] = useContext(ThemeContext);


  return (
    <div>
      <button
        onClick={() => {
          setCurrentTheme(currentTheme === "light" ? "dark" : "light");
        }}
        style={{
          border: "none",
          color: `${currentTheme.textColor}`,
          backgroundColor: `${currentTheme.backgroundColor}`,
          fontSize: "20px",
          textAlign: "center",
          padding: "10px 50px",
        }}
      >
        {currentTheme === "light" ? (
          <BsLightbulbFill
            style={{
              color: `${!currentTheme.textColor}`,
              backgroundColor: `${!currentTheme.backgroundColor}`,
            }}
          />
        ) : (
          <BsLightbulbOffFill
            style={{
              color: `${!currentTheme.textColor}`,
              backgroundColor: `${!currentTheme.backgroundColor}`,
            }}
          />
        )}
      </button>
    </div>
  );
};

export default ThemeToggler;
