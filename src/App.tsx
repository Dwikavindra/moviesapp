import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import MovieCards from "./MovieCards";
import { uid } from "uid";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Details from "./Details";
import Header from "./Header";
import Nav from "./Nav";
import requests from "./requests";
function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    requests.fetchActionMovies
  );

  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Nav setSelectedCategory={setSelectedCategory}></Nav>

        <Routes>
          <Route
            path="/"
            element={<Home selectedCategory={selectedCategory} />}
          ></Route>
          <Route path="/details/:id/*" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
