// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

// project-import
import MainCard from 'components/MainCard';

// ============================|| FORM ELEMENT - FORM CONTROL STATE ||============================== //

export default function FormControlState() {
  return (
    <MainCard title="Form Control State">
      <Row className="g-4">
        {/* Readonly example */}
        <Col md={6}>
          <h5>Readonly</h5>
          <hr />

          <Form.Group as={Row} className="mb-0" controlId="readonlyEmail">
            <Form.Label column sm={3}>
              Email
            </Form.Label>
            <Col sm={9}>
              <Form.Control type="email" value="email@example.com" placeholder="Readonly input here…" readOnly />
            </Col>
          </Form.Group>
        </Col>

        {/* Readonly plaintext example */}
        <Col md={6}>
          <h5>Readonly plain text</h5>
          <hr />

          <Form.Group as={Row} className="mb-0" controlId="readonlyPlaintextEmail">
            <Form.Label column sm={3}>
              Email
            </Form.Label>
            <Col sm={9}>
              <Form.Control type="email" value="email@example.com" placeholder="Readonly input here…" readOnly plaintext />
            </Col>
          </Form.Group>
        </Col>
      </Row>
    </MainCard>
  );
}
