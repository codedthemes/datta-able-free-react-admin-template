import React, { useState } from 'react';
import { GoogleMap, Marker, InfoWindow, useJsApiLoader } from '@react-google-maps/api';

const StyledMapWithAnInfoBox = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY
  });

  const [selectedMarker, setSelectedMarker] = useState(null);

  const center = {
    lat: 28.5274851,
    lng: 77.1389452
  };

  const markers = [
    {
      position: { lat: 22.309425, lng: 72.4396583 },
      title: 'India',
      content: 'Hello Gujarat!'
    }
  ];

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  return isLoaded ? (
    <GoogleMap mapContainerStyle={{ width: '100%', height: '400px' }} center={center} zoom={4}>
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.position} onClick={() => handleMarkerClick(marker)} />
      ))}

      {selectedMarker && (
        <InfoWindow
          position={selectedMarker.position}
          options={{ closeBoxURL: ``, enableEventPropagation: true }}
          onCloseClick={() => setSelectedMarker(null)}
        >
          <div style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `12px` }}>
            <h3>{selectedMarker.title}</h3>
            <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>{selectedMarker.content}</div>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default StyledMapWithAnInfoBox;
