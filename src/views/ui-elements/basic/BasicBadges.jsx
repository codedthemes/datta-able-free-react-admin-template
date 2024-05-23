import React from 'react';
import { Row, Col, Badge, Button } from 'react-bootstrap';

import Card from '../../../components/Card/MainCard';

const BasicBadges = () => {
  const buttonVariants = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

  const buttonBadges = buttonVariants.map((variant, idx) => (
    <Button key={idx} variant={variant} className="text-capitalize">
      {variant}
      <Badge bg="light" className="ms-1 text-dark">
        4
      </Badge>
    </Button>
  ));

  return (
    <React.Fragment>
      <Row>
        <Col className="btn-page">
          <Card title="Basic Badges">
            <h1>
              Example heading <Badge bg="secondary">New</Badge>
            </h1>
            <h2>
              Example heading <Badge bg="secondary">New</Badge>
            </h2>
            <h3>
              Example heading <Badge bg="secondary">New</Badge>
            </h3>
            <h4>
              Example heading <Badge bg="secondary">New</Badge>
            </h4>
            <h5>
              Example heading <Badge bg="secondary">New</Badge>
            </h5>
            <h6>
              Example heading <Badge bg="secondary">New</Badge>
            </h6>
          </Card>
          <Card title="Button Badges">{buttonBadges}</Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default BasicBadges;
