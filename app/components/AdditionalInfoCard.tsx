// app/components/AdditionalInfoCard.tsx

import React from 'react';

interface AdditionalInfoCardProps {
  wind_speed: number;
  pressure: number;
  humidity: number;
  cloudcover: number;
  feelslike: number;
  uv_index: number;
  visibility: number;
}

const AdditionalInfoCard: React.FC<AdditionalInfoCardProps> = ({ wind_speed, pressure, humidity, cloudcover, feelslike, uv_index, visibility }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-2">Additional Information</h3>
      <p className="text-sm mb-2"><strong>Wind Speed:</strong> {wind_speed} km/h</p>
      <p className="text-sm mb-2"><strong>Pressure:</strong> {pressure} hPa</p>
      <p className="text-sm mb-2"><strong>Humidity:</strong> {humidity}%</p>
      <p className="text-sm mb-2"><strong>Cloud Cover:</strong> {cloudcover}%</p>
      <p className="text-sm mb-2"><strong>Feels Like:</strong> {feelslike}°C</p>
      <p className="text-sm mb-2"><strong>UV Index:</strong> {uv_index}</p>
      <p className="text-sm mb-2"><strong>Visibility:</strong> {visibility} km</p>
    </div>
  );
};

export default AdditionalInfoCard;
