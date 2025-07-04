import PropTypes from 'prop-types';
// react-bootstrap
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// ==============================|| COMPONENTS - REFERENCE HEADER ||============================== //

export default function ReferenceHeader({ caption, link }) {
  return (
    <Row>
      <Col className="mb-4">
        <p className="text-muted">{caption}</p>
        <div>
          <Button href={link} variant="light-primary link" target="_blank" className=" btn-sm rounded-pill px-2">
            <i className="ti ti-external-link me-1" /> Reference
          </Button>
        </div>
      </Col>
    </Row>
  );
}

ReferenceHeader.propTypes = { caption: PropTypes.string, link: PropTypes.string };
