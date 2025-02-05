import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import WeatherSelector from "./components/WeatherSelector";
import WeatherDisplay from "./components/WeatherDisplay";

function App() {
  const [weather, setWeather] = useState(null);
  const weatherOptions = [
    {
      label: "Sunny",
      message: "It's a bright and sunny day!",
      image: "sunny.jpg",
    },
    {
      label: "Rainy",
      message: "Don't forget your umbrella!",
      image: "rainy.jpg",
    },
    {
      label: "Cloudy",
      message: "A bit gloomy, but manageable.",
      image: "cloudy.jpg",
    },
    { label: "Windy", message: "Hold on to your hat!", image: "windy.jpg" },
  ];
  const resetWeather = () => setWeather(null);
  console.log("weather", weather);
  return (
    <>
      <Header title="Weather Mood App" />
      {!weather ? (
        <WeatherSelector
          weatherOptions={weatherOptions}
          setWeather={setWeather}
        />
      ) : (
        <WeatherDisplay weather={weather} resetWeather={resetWeather} />
      )}
    </>
  );
}

export default App;
