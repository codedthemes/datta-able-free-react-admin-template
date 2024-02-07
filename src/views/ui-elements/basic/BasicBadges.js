import React from 'react';
import { Row, Col, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ModuleNotification from '../../../components/Widgets/Statistic/Notification';

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

  const contextualBadges = buttonVariants.map((variant, idx) => (
    <Badge key={idx} bg={variant} className={variant === 'light' ? 'mx-2 text-dark' : 'mx-2'}>
      {variant}
    </Badge>
  ));

  const pillBadges = buttonVariants.map((variant, idx) => (
    <Badge key={idx} pill bg={variant} className={variant === 'light' ? 'mx-2 text-dark' : 'mx-2'}>
      {variant}
    </Badge>
  ));

  const linkBadges = buttonVariants.map((variant, idx) => (
    <Link to="#" key={idx}>
      <Badge bg={variant} className={variant === 'light' ? 'mx-2 text-dark' : 'mx-2'}>
        {variant}
      </Badge>
    </Link>
  ));

  return (
    <React.Fragment>
      <Row>
        <Col sm={12}>
          <ModuleNotification
            message="For more info please check the components's official documentation"
            link="https://react-bootstrap.github.io/components/badge/"
          />
        </Col>
      </Row>
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
          <Card title="Contextual Variations">{contextualBadges}</Card>
          <Card title="Pill Badges">{pillBadges}</Card>
          <Card title="Links">{linkBadges}</Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default BasicBadges;
