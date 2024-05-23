import React from 'react';
import { GoogleMap, StreetViewPanorama, useJsApiLoader } from '@react-google-maps/api';

const StreetViewMap = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY
  });

  const center = {
    lat: 49.28590291211115,
    lng: -123.1119202
  };

  const position = {
    lat: 49.28590291211115,
    lng: -123.1119202
  };

  return isLoaded ? (
    <GoogleMap mapContainerStyle={{ width: '100%', height: '400px' }} center={center} zoom={8}>
      <StreetViewPanorama
        position={position}
        visible
        options={{
          addressControl: false,
          enableCloseButton: false,
          fullscreenControl: false,
          linksControl: false,
          panControl: false,
          zoomControl: false
        }}
      />
    </GoogleMap>
  ) : (
    <></>
  );
};

export default StreetViewMap;
