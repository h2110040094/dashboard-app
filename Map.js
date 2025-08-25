import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Set the map container style
const mapContainerStyle = {
    height: '400px', // You can adjust the height as needed
    width: '800px',  // You can adjust the width as needed
};

// Set the initial center of the map
const center = {   
    lat: 17.601631, // Example latitude (San Francisco)
    lng: -78.126897, // Example longitude (San Francisco)
};

// Create the Map component
const Map = () => {
    return (
        <LoadScript googleMapsApiKey="AIzaSyARB5rPE1jfI7orUDtcEZb9_GG_8XDnJEA">
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={10}
            >
                {/* You can add markers or other components here */}
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;
