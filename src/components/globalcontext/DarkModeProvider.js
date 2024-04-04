import React, { createContext, useState, useContext } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Create the Theme Context
const DarkModeContext = createContext();

// Provider Component
 const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Theme configuration
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </DarkModeContext.Provider>
  );
};

// Custom hook to access the Dark Mode context
 const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
};

export { DarkModeProvider, useDarkMode };
