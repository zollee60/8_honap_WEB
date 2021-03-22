import "./App.css";
import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ShowDisplay from "./components/ShowDisplay/ShowDisplay";
import FavTile from "./components/Favourites/FavTile";
import FavouritesDisplay from "./components/Favourites/FavouritesDisplay";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/">
          <NavBar />
          <SearchBar />
          <ShowDisplay />
        </Route>
        <Route exact path="/favourites">
          <NavBar />
          <FavouritesDisplay />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
