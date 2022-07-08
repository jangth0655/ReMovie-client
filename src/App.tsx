import React from "react";
import { ApolloProvider } from "@apollo/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import client from "./apollo";
import Home from "./screen/Home";
import { GlobalStyles } from "./styles";
import { theme } from "./theme";
import AboutMovie from "./screen/movie/MovieDetail";
import TVScreen from "./screen/tv/TV";
import TVDetail from "./screen/tv/TVDetail";
import SearchPage from "./screen/SearchPage";
import ActorDetail from "./screen/actor/ActorDetail";

function App() {
  return (
    <ApolloProvider client={client}>
      <HelmetProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tv" element={<TVScreen />} />
              <Route path="/movies/:id" element={<AboutMovie />} />
              <Route path="/tvs/:id" element={<TVDetail />} />
              <Route path="/search/:keyword" element={<SearchPage />} />
              <Route path="/actors/:id" element={<ActorDetail />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </HelmetProvider>
    </ApolloProvider>
  );
}

export default App;
