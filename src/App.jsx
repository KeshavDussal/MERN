import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MovieInput from "./components/MovieInput";
import FavoritesList from "./components/FavoritesList";

function App() {
  const addMovie = () => {
    console.log("Add Movie function called");
  };
  return (
    <>
      <Header appTitle="Favourite Movies List" />
      <MovieInput addMovie={addMovie} />
      <FavoritesList />
    </>
  );
}

export default App;
