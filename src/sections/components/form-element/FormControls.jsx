// react-bootstrap
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

// project-import
import MainCard from 'components/MainCard';

// =============================|| FORM ELEMENT - FORM CONTROLS ||============================== //

export default function FormControls() {
  return (
    <MainCard title="Form Controls">
      <Row>
        {/* Left column */}
        <Col md={6}>
          <Form onSubmit={(e) => e.preventDefault()}>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button type="submit" className="mb-4">
              Submit
            </Button>
          </Form>
        </Col>

        {/* Right column */}
        <Col md={6}>
          <Form>
            <Form.Group className="mb-3" controlId="formText">
              <Form.Label>Text</Form.Label>
              <Form.Control type="text" placeholder="Enter text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formSelect">
              <Form.Label>Example select</Form.Label>
              <Form.Select defaultValue="1">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                <option value="4">Option 4</option>
                <option value="5">Option 5</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formTextarea">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter your message..." />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </MainCard>
  );
}
