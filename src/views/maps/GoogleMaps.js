import React, { useEffect, useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import InfoBox from './google-maps/InfoBox';
import MarkerClusterer from './google-maps/MarkerClusterer';
import Marker from './google-maps/Marker';
import StreetViewPanorma from './google-maps/StreetViewPanorma';
import ModuleNotification from '../../components/Widgets/Statistic/Notification';

import fetch from 'isomorphic-fetch';

const GoogleMaps = () => {
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const url = [
      // Length issue
      `https://gist.githubusercontent.com`,
      `/farrrr/dfda7dd7fccfec5474d3`,
      `/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json`
    ].join('');

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMarkers(data.photos);
      });

    return () => {
      setMarkers([]);
    };
  }, []);

  return (
    <React.Fragment>
      <Row>
        <Col sm={12}>
          <ModuleNotification
            message="For more info please check the components's official documentation"
            link="https://www.npmjs.com/package/react-google-maps"
          />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Default Marker</Card.Title>
            </Card.Header>
            <Card.Body>
              <Marker
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAChufWiMfwsmyX3Se1dRaN4t31z0xmIMo&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Infobox</Card.Title>
            </Card.Header>
            <Card.Body>
              <InfoBox />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Marker Clusterer</Card.Title>
            </Card.Header>
            <Card.Body>
              <MarkerClusterer markers={markers} />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Street View Panorma</Card.Title>
            </Card.Header>
            <Card.Body>
              <StreetViewPanorma />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default GoogleMaps;
