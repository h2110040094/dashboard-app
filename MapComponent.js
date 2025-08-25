import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Set a custom marker icon (optional)
const vehicleIcon = new L.Icon({
  iconUrl: 'https://example.com/vehicle-icon.png', // URL to your vehicle icon
  iconSize: [30, 30], // Size of the icon
});

const MapComponent = ({ gpsCoordinates }) => {
  const [position, setPosition] = useState([gpsCoordinates.lat, gpsCoordinates.lng]);

  useEffect(() => {
    // Update the map position when new GPS data comes in
    if (gpsCoordinates.lat && gpsCoordinates.lng) {
      setPosition([gpsCoordinates.lat, gpsCoordinates.lng]);
    }
  }, [gpsCoordinates]);

  return (
    <MapContainer center={position} zoom={15} scrollWheelZoom={true} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={vehicleIcon}>
        <Popup>
          Vehicle is here: [{gpsCoordinates.lat}, {gpsCoordinates.lng}]
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
