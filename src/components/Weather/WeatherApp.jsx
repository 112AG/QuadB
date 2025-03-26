import { useState, useEffect } from "react";
import axios from "axios";

const WeatherComponent = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get("https://freetestapi.com/api/v1/weathers");
        // setWeather(response.data[0]);
        console.log(response);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Weather Information</h2>
      {/* <p>Temperature: {weather.temperature}°C</p>
      <p>Condition: {weather.condition}</p> */}
    </div>
  );
};

export default WeatherComponent;
