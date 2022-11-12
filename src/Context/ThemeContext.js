import { createContext } from "react";

// created a context for theme with "light theme" as default theme
const ThemeContext = createContext(["light"]);

export default ThemeContext;
