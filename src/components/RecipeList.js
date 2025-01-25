import React from "react";

const RecipeList = (props) => {
  return (
    <div>
      <h1 style={{ textAlign: "left", marginLeft: "50px" }}>RecipeList</h1>
      <ul>
        {props.recipesList.map((receipe) => (
          <li
            style={{
              listStyleType: "none",
              textAlign: "left",
              border: "1px solid gray",
              margin: "10px",
              padding: "5px",
              paddingLeft: "10px",
            }}
          >
            <h3>{receipe.name}</h3>
            <p>{receipe.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
