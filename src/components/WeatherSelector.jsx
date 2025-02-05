import React from "react";

function WeatherSelector({ weatherOptions, setWeather }) {
  return (
    <div>
      <h2>Select Weather</h2>
      {weatherOptions.map((woption, index) => (
        <button key={index} onClick={() => setWeather(woption)}>
          {woption.label}
        </button>
      ))}
    </div>
  );
}

export default WeatherSelector;
