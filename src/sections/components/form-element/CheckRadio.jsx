// react-bootstrap
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

// project-import
import MainCard from 'components/MainCard';

// =============================|| FORM ELEMENT - CHECKS AND RADIOS ||============================== //

export default function ChecksRadios() {
  return (
    <MainCard title="Checks and Radios">
      <Row className="g-4">
        {/* Checkboxes */}
        <Col md={6}>
          <h5>Checkboxes</h5>
          <hr />
          <Form.Check type="checkbox" label="Check this custom checkbox" />
          <Form.Check type="checkbox" label="Another checkbox" defaultChecked />
          <Form.Check type="checkbox" label="Disabled checkbox" disabled />
        </Col>

        {/* Switches */}
        <Col md={6}>
          <h5>Switches</h5>
          <hr />
          <Form.Check type="switch" label="Default switch" />
          <Form.Check type="switch" label="Checked switch" defaultChecked />
          <Form.Check type="switch" label="Disabled switch" disabled />
        </Col>

        {/* Radios */}
        <Col md={6}>
          <h5>Radios</h5>
          <hr />
          <Form.Check type="radio" name="radioGroup" label="Default radio" />
          <Form.Check type="radio" name="radioGroup" label="Checked radio" defaultChecked />

          <h5 className="mt-3">Inline</h5>
          <hr />
          <Form.Check inline type="radio" name="inlineRadioGroup" label="1" />
          <Form.Check inline type="radio" name="inlineRadioGroup" label="2" defaultChecked />
          <Form.Check inline type="radio" name="inlineRadioGroup" label="3 (disabled)" disabled />
        </Col>

        {/* Range Sliders */}
        <Col md={6}>
          <h5>Range</h5>
          <hr />
          <Form.Label>Default</Form.Label>
          <Form.Range />
          <Form.Label>Min and Max (0–5)</Form.Label>
          <Form.Range min={0} max={5} />
          <Form.Label>Steps (0.5)</Form.Label>
          <Form.Range step={0.5} />
        </Col>
      </Row>
    </MainCard>
  );
}
