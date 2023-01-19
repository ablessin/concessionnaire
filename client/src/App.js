import React from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./configuration/themes/theme";
import Router from "./router";
import Footer from "../src/components/footer/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
