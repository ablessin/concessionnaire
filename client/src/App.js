import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import theme from "./configuration/themes/theme";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <Header />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
