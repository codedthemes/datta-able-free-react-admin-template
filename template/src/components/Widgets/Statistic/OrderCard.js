import React from 'react';
import { Card } from 'react-bootstrap';

const OrderCard = ({ params }) => {
  let cardClass = ['order-card'];
  if (params.class) {
    cardClass = [...cardClass, params.class];
  }

  let iconClass = ['float-left'];
  if (params.icon) {
    iconClass = [...iconClass, params.icon];
  }

  return (
    <Card className={cardClass.join(' ')}>
      <Card.Body>
        <h6 className="text-white">{params.title}</h6>
        <h2 className="text-right text-white">
          <i className={iconClass.join(' ')} />
          <span>{params.primaryText}</span>
        </h2>
        <p className="m-b-0">
          {params.secondaryText}
          <span className="float-right">{params.extraText}</span>
        </p>
      </Card.Body>
    </Card>
  );
};

export default OrderCard;
