import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./configuration/themes/theme";
import Router from "./router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
