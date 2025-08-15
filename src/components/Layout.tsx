import React from "react";
import {  CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";
import TopBar from "../components/TopBar";

type DarkModeChild = React.ReactElement<{ darkMode: boolean }>;

export default function Layout({ children }: { children: DarkModeChild | DarkModeChild[] }) {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({ palette: { mode: darkMode ? "dark" : "light" } });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TopBar darkMode={darkMode} setDarkMode={setDarkMode} />
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { darkMode })
      )}
    </ThemeProvider>
  );
}