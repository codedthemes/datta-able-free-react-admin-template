import React from 'react';
import { GoogleMap, Marker, useJsApiLoader, MarkerClusterer } from '@react-google-maps/api';

const MapWithAMarkerClusterer = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY
  });

  const center = {
    lat: 40.7128,
    lng: -74.006
  };

  const markers = [
    { position: { lat: 40.7128, lng: -74.006 } },
    { position: { lat: 40.7128, lng: -74.002 } },
    { position: { lat: 40.7128, lng: -74.01 } }
    // Add more markers as needed
  ];

  return isLoaded ? (
    <GoogleMap mapContainerStyle={{ width: '100%', height: '400px' }} center={center} zoom={10}>
      <MarkerClusterer gridSize={60}>
        {(cluserer) => markers.map((marker, index) => <Marker key={index} position={marker.position} clusterer={cluserer} />)}
      </MarkerClusterer>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default MapWithAMarkerClusterer;
