import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Button } from "@mui/material";
import theme from "./configuration/themes/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
