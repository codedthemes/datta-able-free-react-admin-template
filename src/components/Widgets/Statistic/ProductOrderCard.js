import PropTypes from 'prop-types';
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductOrderCard = (props) => {
  const { image, orderId, name, rating, price, delivered, description, ordered, total } = props;

  return (
    <React.Fragment>
      <Card>
        <Card.Body>
          <Row className="align-items-center justify-contact-between">
            <Col>
              <div className="btn btn-primary">{orderId}</div>
            </Col>
            <Col className="text-right">
              <button className="btn btn-outline-primary">
                <i className="feather icon-map-pin" /> track
              </button>
            </Col>
          </Row>
          <div className="table-responsive">
            <table className="table m-0 mt-3">
              <tbody>
                <tr>
                  <td className="align-middle">
                    <img src={image} alt="contact-img" title="contact-img" className="rounded mr-3" height="80" />
                    <div className="m-0 d-inline-block align-middle font-16">
                      <Link to="#" className="text-body">
                        <h6 className="d-inline-block">{name}</h6>
                      </Link>
                      <br />
                      {rating && rating >= 1 ? (
                        <span className="text-warning feather icon-star-on" />
                      ) : (
                        <span className="text-warning feather icon-star" />
                      )}
                      {rating && rating >= 2 ? (
                        <span className="text-warning feather icon-star-on" />
                      ) : (
                        <span className="text-warning feather icon-star" />
                      )}
                      {rating && rating >= 3 ? (
                        <span className="text-warning feather icon-star-on" />
                      ) : (
                        <span className="text-warning feather icon-star" />
                      )}
                      {rating && rating >= 4 ? (
                        <span className="text-warning feather icon-star-on" />
                      ) : (
                        <span className="text-warning feather icon-star" />
                      )}
                      {rating && rating >= 5 ? (
                        <span className="text-warning feather icon-star-on" />
                      ) : (
                        <span className="text-warning feather icon-star" />
                      )}
                    </div>
                  </td>
                  <td>
                    <h5>${price}</h5>
                  </td>
                  <td className="text-right">
                    <div className="text-start d-inline-block">
                      <h6 className="my-0">Delivered on {delivered}</h6>
                      <small className="text-muted">{description}</small>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr className="mt-0" />
          <Row className="align-items-center justify-contact-between">
            <Col>
              <span className="text-muted mr-1">Ordered On</span>
              <strong>{ordered}</strong>
            </Col>
            <Col className="text-right">
              <span className="text-muted mr-1">Ordered Amount</span>
              <strong>${total}</strong>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

ProductOrderCard.propTypes = {
  image: PropTypes.string,
  orderId: PropTypes.number,
  name: PropTypes.string,
  rating: PropTypes.string,
  price: PropTypes.number,
  delivered: PropTypes.bool,
  ordered: PropTypes.bool,
  description: PropTypes.string,
  total: PropTypes.number
};

export default ProductOrderCard;
