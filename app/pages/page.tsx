// app/page.tsx
'use client'
import { useState } from 'react';
import AdditionalInfoCard from '../components/AdditionalInfoCard';
import LocationInfoCard from '../components/LocationInfoCard';
import WeatherConditionCard from '../components/WeatherConditionCard';
import SearchBar from '../components/search_bar';
import GajeCard from '../components/gajeCard';

export default function Home() {
  const [weatherData, setWeatherData] = useState<any>(null);

  const fetchWeatherData = async (query: string) => {
    try {
      const response = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const isNotFound = weatherData && weatherData.success === false;

  return (
    <div className="bg-gray-100 min-h-screen p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6 text-center">Weather App</h1>
      <div className="mb-6">
        <SearchBar onSearch={fetchWeatherData} />
      </div>
      {isNotFound ? (
        <p className="text-center text-red-500">Not Found</p>
      ) : (
        weatherData && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-3">
            <WeatherConditionCard 
              temperature={weatherData.current.temperature}
              weather_description={weatherData.current.weather_descriptions[0]}
              weather_icon={weatherData.current.weather_icons[0]} 
            />
            <LocationInfoCard 
              name={weatherData.location.name}
              country={weatherData.location.country}
              region={weatherData.location.region}
              lat={weatherData.location.lat}
              lon={weatherData.location.lon}
              timezone_id={weatherData.location.timezone_id}
              localtime={weatherData.location.localtime}
            />
            <AdditionalInfoCard 
              wind_speed={weatherData.current.wind_speed}
              pressure={weatherData.current.pressure}
              humidity={weatherData.current.humidity}
              cloudcover={weatherData.current.cloudcover}
              feelslike={weatherData.current.feelslike}
              uv_index={weatherData.current.uv_index}
              visibility={weatherData.current.visibility}
            />
            <GajeCard />
          </div>
        )
      )}
    </div>
  );
}
