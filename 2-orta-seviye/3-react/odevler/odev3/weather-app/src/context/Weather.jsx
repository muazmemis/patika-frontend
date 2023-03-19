import axios from "axios";
import { createContext, useState, useEffect, useContext } from "react";

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState("İstanbul");
  const [weather, setweather] = useState([]);
  const [current, setcurrent] = useState([]);
  const values = { weather, setweather, city, setCity, current };

  useEffect(() => {
    const key = process.env.REACT_APP_API_KEY;
    axios(
      `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=7&aqi=no&alerts=no&lang=tr`
    ).then((res) => {
      setweather(res.data.forecast.forecastday);
      setcurrent(res.data.current);
    });
  }, [city]);
  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

const useWeather = () => useContext(WeatherContext);

export { WeatherProvider, useWeather };
