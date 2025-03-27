import axios from 'axios';
import React, { useEffect, useState } from 'react'

function WeatherApp() {
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState('')
    const [loading, setLoading] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "7d88b436f0d35d241ab5217c2093a0e0";

    const getWeatherInfo = async (city) => {
        setLoading(true);
            let {data} = await axios.get(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
            console.log(data);
            setWeather(data);
            setLoading(false);
    }

    const getWeatherByLocation = async (lat, long) => {
        setLoading(true);
        try {
            let { data } = await axios.get(`${API_URL}?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`);
            setWeather(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleGetCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                getWeatherByLocation(latitude, longitude);
            }, (error) => {
                console.error("Error getting location: ", error);
            });
        } else {
            alert("Geolocation is not supporting.");
        }
    };

    useEffect(() => {
        if (city) {
            getWeatherInfo(city);
        }
    }, [city]);


    
  return (
    <div>
        <h1>Check Current weather of your City : </h1>
        <div className='flex gap-3 justify-between my-2'>
        <input type="text" onChange={ (event) => setCity(event.target.value)} className='border p-1 rounded' placeholder='Enter City name' />
        <button onClick={handleGetCurrentLocation} className="bg-blue-500 text-white px-4 py-2 rounded">
            Current <i className="ri-map-pin-line"></i>
        </button>
        </div>
        {loading ? (
            <div className="text-center">Loading...</div>
        ) : (
            weather && (
                <div className='flex flex-col w-full bg-blue-100 rounded shadow-md p-2'>
                    <h2>City Name :{weather.name}</h2>
                    <p>City Temperature: {weather.main.temp} °C</p>
                    <p>Weather: {weather.weather[0].description}</p>
                </div>
            )
        )}
    </div>
  )
}

export default WeatherApp