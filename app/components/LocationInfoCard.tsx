// app/components/LocationInfoCard.tsx

import React from 'react';

interface LocationInfoCardProps {
  name: string;
  country: string;
  region: string;
  lat: string;
  lon: string;
  timezone_id: string;
  localtime: string;
}

const LocationInfoCard: React.FC<LocationInfoCardProps> = ({ name, country, region, lat, lon, timezone_id, localtime }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-2">Location Information</h3>
      <p className="text-sm mb-2"><strong>City:</strong> {name}</p>
      <p className="text-sm mb-2"><strong>Country:</strong> {country}</p>
      <p className="text-sm mb-2"><strong>Region:</strong> {region}</p>
      <p className="text-sm mb-2"><strong>Coordinates:</strong> {lat}, {lon}</p>
      <p className="text-sm mb-2"><strong>Timezone:</strong> {timezone_id}</p>
      <p className="text-sm mb-2"><strong>Local Time:</strong> {localtime}</p>
    </div>
  );
};

export default LocationInfoCard;
