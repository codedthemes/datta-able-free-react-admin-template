// react-bootstrap
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

// project-import
import MainCard from 'components/MainCard';

// =============================|| FORM ELEMENT - FORM GRID ||============================== //

export default function FormGrid() {
  return (
    <MainCard title="Form Grid">
      <Form onSubmit={(e) => e.preventDefault()}>
        {/* Info Alert */}
        <Row>
          <Col xs={12}>
            <Alert variant="primary" className="d-flex align-items-center gap-2">
              <i className="ti ti-info-circle-filled f-24" />
              When working with the Bootstrap grid system, place form elements within column classes.
            </Alert>
          </Col>
        </Row>

        {/* Email & Password */}
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3" controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Col>
        </Row>

        {/* Address 1 */}
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        {/* Address 2 */}
        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group>

        {/* City, State, Zip */}
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group className="mb-3" controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Select defaultValue="">
                <option value="">Choose...</option>
                <option value="1">Large select</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={2}>
            <Form.Group className="mb-3" controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Col>
        </Row>

        {/* Checkbox */}
        <Form.Group className="mb-3" controlId="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        {/* Submit */}
        <Button variant="primary" type="submit">
          Sign in
        </Button>
      </Form>
    </MainCard>
  );
}
