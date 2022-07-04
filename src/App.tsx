import React from "react";
import { ApolloProvider } from "@apollo/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import client from "./apollo";
import Home from "./screen/Home";
import TV from "./screen/tv/TV";
import { GlobalStyles } from "./styles";
import { theme } from "./theme";
import AboutMovie from "./screen/movie/MovieDetail";

function App() {
  return (
    <ApolloProvider client={client}>
      <HelmetProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tv" element={<TV />} />
              <Route path="/movies/:id" element={<AboutMovie />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </HelmetProvider>
    </ApolloProvider>
  );
}

export default App;
