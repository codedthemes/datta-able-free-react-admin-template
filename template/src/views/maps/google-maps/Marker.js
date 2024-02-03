import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { compose } from 'recompose';

const MapWithAMarker = compose(
  withScriptjs,
  withGoogleMap
)(() => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: 28.5274851, lng: 77.1389452 }}>
    <Marker position={{ lat: 28.5274851, lng: 77.1389452 }} />
  </GoogleMap>
));

export default MapWithAMarker;
