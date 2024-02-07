/*global google*/

import InfoBox from 'react-google-maps/lib/components/addons/InfoBox';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { compose, withProps, withStateHandlers } from 'recompose';
import fancyMapStyles from './fancy-map-styles.json';

const StyledMapWithAnInfoBox = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyAChufWiMfwsmyX3Se1dRaN4t31z0xmIMo&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
    center: { lat: 28.5274851, lng: 77.1389452 }
  }),
  withStateHandlers(
    () => ({
      isOpen: false
    }),
    {
      onToggleOpen:
        ({ isOpen }) =>
        () => ({
          isOpen: !isOpen
        })
    }
  ),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap defaultZoom={5} defaultCenter={props.center} defaultOptions={{ styles: fancyMapStyles }}>
    <InfoBox
      defaultPosition={new google.maps.LatLng(props.center.lat, props.center.lng)}
      options={{ closeBoxURL: ``, enableEventPropagation: true }}
    >
      <div style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `12px` }}>
        <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>Hello, India!</div>
      </div>
    </InfoBox>
    <Marker position={{ lat: 23.0204978, lng: 72.4396583 }} onClick={props.onToggleOpen}>
      {props.isOpen && (
        <InfoBox onCloseClick={props.onToggleOpen} options={{ closeBoxURL: ``, enableEventPropagation: true }}>
          <div style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `12px` }}>
            <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>Hello, Gujarat!</div>
          </div>
        </InfoBox>
      )}
    </Marker>
  </GoogleMap>
));

export default StyledMapWithAnInfoBox;
