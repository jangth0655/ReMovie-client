import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Home from "./screen/Home";
import TV from "./screen/tv/TV";
import { GlobalStyles } from "./styles";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tv" element={<TV />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
