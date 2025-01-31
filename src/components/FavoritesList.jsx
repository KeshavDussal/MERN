import React from "react";

function FavoritesList(props) {
  return (
    <div>
      <h5>FavoritesList</h5>
      {props.favMovies.length === 0 ? (
        <span>No Movies Added yet.</span>
      ) : (
        <ul>
          {props.favMovies.map((favMovie, index) => (
            <>
              <li key={index}>
                {favMovie}{" "}
                <button onClick={() => props.removeMovie(favMovie)}>
                  Remove Movie
                </button>
              </li>
            </>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FavoritesList;
