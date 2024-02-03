import PropTypes from 'prop-types';
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const NotificationCard = ({ params }) => {
  let cardClass = ['notification-card'];
  if (params.class) {
    cardClass = [...cardClass, params.class];
  }

  return (
    <Card className={cardClass.join(' ')}>
      <Card.Body>
        <Row className="align-items-center">
          <Col sm={4} className="notify-icon">
            <i className={params.icon} />
          </Col>
          <Col sm={8} className="notify-cont">
            <h4>{params.primaryText}</h4>
            <p>{params.secondaryText}</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

NotificationCard.propTypes = {
  params: PropTypes.object,
  class: PropTypes.string,
  icon: PropTypes.string,
  primaryText: PropTypes.string,
  secondaryText: PropTypes.string
};

export default NotificationCard;
