import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import InfoBox from './google-maps/InfoBox';
import MarkerClusterer from './google-maps/MarkerClusterer';
import Marker from './google-maps/Marker';
import StreetViewPanorma from './google-maps/StreetViewPanorma';

const GoogleMaps = () => {
  return (
    <React.Fragment>
      <Row>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Default Marker</Card.Title>
            </Card.Header>
            <Card.Body>
              <Marker />
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
              <MarkerClusterer />
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
