import PropTypes from 'prop-types';
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const ProductCard = ({ params }) => {
  let cardClass = ['prod-p-card'];
  if (params.class) {
    cardClass = [...cardClass, params.class];
  }

  let iconClass = ['text-white'];
  if (params.icon) {
    iconClass = [...iconClass, params.icon];
  }

  let rowClass = ['align-items-center'];
  if (params.secondaryText) {
    rowClass = [...rowClass, 'm-b-25'];
  }

  return (
    <Card className={cardClass.join(' ')}>
      <Card.Body>
        <Row className={rowClass.join(' ')}>
          <Col>
            <h6 className="m-b-5 text-white">{params.title}</h6>
            <h3 className="m-b-0 text-white">{params.primaryText}</h3>
          </Col>
          <Col sm="auto">
            <i className={iconClass.join(' ')} />
          </Col>
        </Row>
        <p className="m-b-0 text-white">{params.secondaryText}</p>
      </Card.Body>
    </Card>
  );
};

ProductCard.propTypes = {
  params: PropTypes.object,
  class: PropTypes.string,
  icon: PropTypes.string,
  primaryText: PropTypes.string,
  secondaryText: PropTypes.string,
  title: PropTypes.string,
  extraText: PropTypes.string
};

export default ProductCard;
