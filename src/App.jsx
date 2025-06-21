import { useEffect, useState } from "react";
import "./App.css";
const API_KEY = "df073e127fe6302da756049d86eb8bc1";

function App() {
  const [city, setcity] = useState("");
  const [search, setsearch] = useState("Mumbai");

  const getWeather = () => {
    const fetchapi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=df073e127fe6302da756049d86eb8bc1`;
      const responce = await fetch(url);
      const resjson = await responce.json();
      setcity(resjson);
      console.log(resjson);
    };

    fetchapi();
  };

  // useEffect(()=>{

  //   const fetchapi = async ()=>{
  //     const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=df073e127fe6302da756049d86eb8bc1`
  //     const responce = await fetch(url);
  //     const resjson = await responce.json();
  //     setcity(resjson)
  //     console.log(resjson);
  //   }

  //   fetchapi();

  // },[search])

  return (
    <div className="app-box">
      <div className="input">
      <h2>Weather App ☀️</h2>

      <input
        type="text"
        placeholder="Enter city..."
        value={search}
        onChange={(e) => setsearch(e.target.value)}
      />

      <button onClick={getWeather}>Get Weather</button>
      </div>

      <div className="info">
        {city ? (
          <div className="weather-box">
            <h2 className="city-name">🌍 {city.name}</h2>

            <div className="weather-main">
              <div className="temperature">
                <h1>{(city.main.temp - 273.15).toFixed(1)}°C</h1>
                <p>Feels like {(city.main.feels_like - 273.15).toFixed(1)}°C</p>
              </div>

              <div className="condition">
                <h3>{city.weather[0].main}</h3>
                <p>{city.weather[0].description}</p>
              </div>
            </div>

            <div className="extras">
              <p>💨 Wind: {city.wind.speed} m/s</p>
              <p>🌡️ Humidity: {city.main.humidity}%</p>
            </div>
          </div>
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    </div>
  );
}

export default App;