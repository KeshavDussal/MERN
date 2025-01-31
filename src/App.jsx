import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MovieInput from "./components/MovieInput";
import FavoritesList from "./components/FavoritesList";

function App() {
  const [movies, setMovies] = useState([]);
  const addMovie = (movie) => {
    if (movie) {
      if (movies.includes(movie)) {
        alert("Movie already present");
      } else {
        setMovies([...movies, movie]);
      }
    }
  };
  const removeMovie = (movie) => {
    setMovies(movies.filter((m) => m !== movie));
  };
  return (
    <>
      <Header appTitle="Favourite Movies List" />
      <MovieInput addMovie={addMovie} />
      <FavoritesList favMovies={movies} removeMovie={removeMovie} />
    </>
  );
}

export default App;
