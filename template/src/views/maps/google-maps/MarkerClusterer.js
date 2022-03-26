import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { compose, withProps, withHandlers } from 'recompose';

const { MarkerClusterer } = require('react-google-maps/lib/components/addons/MarkerClusterer');

const MapWithAMarkerClusterer = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyAChufWiMfwsmyX3Se1dRaN4t31z0xmIMo&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withHandlers({
    onMarkerClustererClick: () => (markerClusterer) => {
      const clickedMarkers = markerClusterer.getMarkers();
      console.log(`Current clicked markers length: ${clickedMarkers.length}`);
      console.log(clickedMarkers);
    }
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap defaultZoom={3} defaultCenter={{ lat: 25.0391667, lng: 121.525 }}>
    <MarkerClusterer onClick={props.onMarkerClustererClick} averageCenter enableRetinaIcons gridSize={60}>
      {props.markers.map((marker) => (
        <Marker key={marker.photo_id} position={{ lat: marker.latitude, lng: marker.longitude }} />
      ))}
    </MarkerClusterer>
  </GoogleMap>
));

export default MapWithAMarkerClusterer;
