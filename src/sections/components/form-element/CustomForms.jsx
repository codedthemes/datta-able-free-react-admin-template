// react-bootstrap
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

// project-import
import MainCard from 'components/MainCard';

// ==============================|| FORM ELEMENT - CUSTOM FORMS ||============================== //

export default function CustomForms() {
  return (
    <MainCard title="Custom Forms">
      <Row className="g-4">
        {/* ---------- Custom Select ---------- */}
        <Col md={6}>
          <h5>Custom Select</h5>
          <hr />

          {/* Select with label prefix */}
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroupSelect01">Option</InputGroup.Text>
            <Form.Select aria-label="Select with prefix" aria-describedby="inputGroupSelect01">
              <option>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </InputGroup>

          {/* Select with label suffix */}
          <InputGroup className="mb-3">
            <Form.Select aria-label="Select with suffix">
              <option>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <InputGroup.Text>Option</InputGroup.Text>
          </InputGroup>

          {/* Select with button prefix */}
          <InputGroup className="mb-3">
            <Button variant="outline-secondary">Button</Button>
            <Form.Select aria-label="Select with button prefix">
              <option>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </InputGroup>

          {/* Select with button suffix */}
          <InputGroup className="mb-3">
            <Form.Select aria-label="Select with button suffix">
              <option>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <Button variant="outline-secondary">Button</Button>
          </InputGroup>
        </Col>

        {/* ---------- Custom File Input ---------- */}
        <Col md={6}>
          <h5>Custom File Input</h5>
          <hr />

          {/* File input with label prefix */}
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroupFile01">Upload</InputGroup.Text>
            <Form.Control type="file" aria-describedby="inputGroupFile01" />
          </InputGroup>

          {/* File input with label suffix */}
          <InputGroup className="mb-3">
            <Form.Control type="file" aria-label="File input with suffix" />
            <InputGroup.Text>Upload</InputGroup.Text>
          </InputGroup>

          {/* File input with button prefix */}
          <InputGroup className="mb-3">
            <Button variant="outline-secondary">Button</Button>
            <Form.Control type="file" aria-label="File input with button prefix" />
          </InputGroup>

          {/* File input with button suffix */}
          <InputGroup className="mb-3">
            <Form.Control type="file" aria-label="File input with button suffix" />
            <Button variant="outline-secondary">Button</Button>
          </InputGroup>
        </Col>
      </Row>
    </MainCard>
  );
}
