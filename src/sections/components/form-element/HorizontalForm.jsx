// react-bootstrap
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

// project-imports
import MainCard from 'components/MainCard';

// =============================|| HORIZONTAL FORM ||============================== //

export default function HorizontalForm() {
  return (
    <MainCard title="Horizontal form">
      <Form onSubmit={(e) => e.preventDefault()}>
        <Row className="g-3">
          <Col lg={6}>
            <h6>Horizontal Form Example</h6>
            <hr />

            <Row className="mb-3">
              <Form.Label column sm={3}>
                Email
              </Form.Label>
              <Col sm={9}>
                <Form.Control type="email" placeholder="Enter email" />
              </Col>
            </Row>

            <Row className="mb-3">
              <Form.Label column sm={3}>
                Password
              </Form.Label>
              <Col sm={9}>
                <Form.Control type="password" placeholder="Enter password" />
              </Col>
            </Row>

            <Row className="mb-3">
              <Form.Label column sm={3}>
                Radios
              </Form.Label>
              <Col sm={9}>
                <Form.Check type="radio" label="First radio" name="formHorizontalRadios" id="radio1" defaultChecked />
                <Form.Check type="radio" label="Second radio" name="formHorizontalRadios" id="radio2" />
                <Form.Check type="radio" label="Third disabled" name="formHorizontalRadios" id="radio3" disabled />
              </Col>
            </Row>

            <Row className="mb-3">
              <Form.Label column sm={3}>
                Checkbox
              </Form.Label>
              <Col sm={9}>
                <Form.Check type="checkbox" label="Example checkbox" id="checkbox1" />
              </Col>
            </Row>

            <Button type="submit">Sign in</Button>
          </Col>

          <Col lg={6}>
            <h6>Horizontal Form Label Sizing</h6>
            <hr />

            <Row className="mb-3">
              <Form.Label column sm={2} size="sm">
                Email
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="email" size="sm" placeholder="col-form-label-sm" />
              </Col>
            </Row>

            <Row className="mb-3">
              <Form.Label column sm={2}>
                Email
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="email" placeholder="col-form-label" />
              </Col>
            </Row>

            <Row className="mb-3">
              <Form.Label column sm={2} size="lg">
                Email
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="email" size="lg" placeholder="col-form-label-lg" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </MainCard>
  );
}
