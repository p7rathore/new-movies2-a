import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import Tvshows from "./Pages/Tvshows";
import MoviesPageResult from "./Commponents/MoviesPageResult";
import Searchpage from "./Commponents/Searchpage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/TV" element={<Tvshows />} />
          <Route path="/search" element={<Searchpage />} />
          <Route path="/:id" element={<MoviesPageResult/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
