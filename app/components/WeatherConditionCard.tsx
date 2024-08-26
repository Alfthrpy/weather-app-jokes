// app/components/WeatherConditionCard.tsx

import Image from 'next/image';
import React from 'react';

interface WeatherConditionCardProps {
  temperature: number;
  weather_description: string;
  weather_icon: string;
}

const WeatherConditionCard: React.FC<WeatherConditionCardProps> = ({ temperature, weather_description, weather_icon }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-2">Current Condition</h3>
      <div className="flex items-center mb-4">
        <img src={weather_icon} alt={weather_description} className="w-16 h-16 mr-4" />
        <div>
          <h4 className="text-xl font-semibold">{temperature}°C</h4>
          <p>{weather_description}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherConditionCard;
