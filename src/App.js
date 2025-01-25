import "./App.css";
import RecipeList from "./components/RecipeList";
import Header from "./components/Header";
const recipes = [
  {
    id: 1,
    name: "Spaghetti Carbonara",
    description: "A classic Italian pasta dish.",
  },
  {
    id: 2,
    name: "Chicken Tikka Masala",
    description: "A popular Indian curry dish.",
  },
  {
    id: 3,
    name: "Veggie Stir-Fry",
    description: "A healthy mix of stir-fried vegetables.",
  },
];

function App() {
  return (
    <div className="App">
      <Header
        title="Swad Cloud Kitchen"
        slogon="Where every flavor tells a story."
      />
      <RecipeList recipesList={recipes} />
    </div>
  );
}

export default App;
