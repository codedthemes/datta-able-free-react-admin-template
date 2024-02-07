import PropTypes from 'prop-types';
import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const IcoCard = (props) => {
  const { icon, title, caption, category, totalAmount, amount, percentage, time } = props;

  let iconClass = ['cc f-36 mr-3'];
  if (icon) {
    iconClass = [...iconClass, icon];
  }

  return (
    <React.Fragment>
      <Col lg={4} md={6} className="element-item">
        <Card>
          <Card.Body>
            <div className="media align-items-center p-0">
              {icon && (
                <div className="text-center">
                  <Link to="#">
                    <i className={iconClass.join(' ')} title={icon} />
                  </Link>
                </div>
              )}
              <div>
                <h4 className="m-0 text-bold">{title}</h4>
                <span>{caption}</span>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between mt-3">
              <div>
                <p className="m-0 font-weight-600">
                  <span className="text-primary">{amount}</span> / {totalAmount}
                </p>
                <p className="m-0">{category}</p>
              </div>
              <div className="text-right">
                <p className="m-0 font-weight-600">
                  <span className="text-primary">{percentage}</span>
                </p>
                <p className="m-0">{time}</p>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </React.Fragment>
  );
};

IcoCard.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  caption: PropTypes.string,
  category: PropTypes.string,
  totalAmount: PropTypes.number,
  amount: PropTypes.number,
  percentage: PropTypes.number,
  time: PropTypes.string
};

export default IcoCard;
