import React, { useState } from "react";

function MovieInput({ addMovie }) {
  const [movie, setMovie] = useState("");
  const handleAdd = () => {
    addMovie(movie.trim());
    setMovie("");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter movie name"
        value={movie}
        onChange={(e) => setMovie(e.target.value)}
      />
      <button onClick={handleAdd}>Add Movie</button>
    </div>
  );
}

export default MovieInput;
