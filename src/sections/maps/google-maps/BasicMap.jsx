// project-imports
import MainCard from 'components/MainCard';

// third-party
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 20.5937,
  lng: 78.9629
};

// ==============================|| MAP - BASIC MAP ||============================== //

export default function BasicGMap() {
  return (
    <MainCard title="Gmap">
      <LoadScript googleMapsApiKey={import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY} libraries={['places']}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={5}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </MainCard>
  );
}
