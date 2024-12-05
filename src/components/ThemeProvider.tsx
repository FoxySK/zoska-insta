"use client";

import React, { createContext, useContext, useState } from "react";
import { createTheme, ThemeProvider, Theme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

// Define context to handle theme toggling
interface ThemeContextProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

// Light and Dark themes
const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

// ThemeProvider that wraps the app
export const CustomThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false); // Track dark mode state

  const toggleTheme = () => setIsDarkMode((prev) => !prev); // Toggle dark/light theme

  const theme: Theme = isDarkMode ? darkTheme : lightTheme; // Choose theme based on state

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDarkMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* This applies the correct background color and styles */}
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme context in any component
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};
