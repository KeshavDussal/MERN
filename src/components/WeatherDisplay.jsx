import React from "react";

function WeatherDisplay({ weather, resetWeather }) {
  return (
    <>
      <h5>{weather.label}</h5>
      <img
        src={weather.image}
        alt={weather.label}
        width="500px"
        height="300px"
      />
      <p>{weather.message}</p>
      <button onClick={() => resetWeather()}>Reset Weather</button>
    </>
  );
}

export default WeatherDisplay;
