import { useState } from 'react';

// react-bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// project-import
import MainCard from 'components/MainCard';

// =============================|| FORM ELEMENT - SUPPORTED ELEMENTS WITH FEEDBACK ||============================== //

export default function SupportedElements() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <MainCard title="Supported Elements">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        {/* Textarea */}
        <div className="mb-3">
          <Form.Label htmlFor="validationTextarea">Textarea</Form.Label>
          <Form.Control as="textarea" id="validationTextarea" placeholder="Required example textarea" required />
          <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">Please enter a message in the textarea.</Form.Control.Feedback>
        </div>

        {/* Checkbox */}
        <Form.Group className="mb-3">
          <Form.Check required label="Check this checkbox" feedback="You did it!" feedbackType="valid" />
          <Form.Control.Feedback type="invalid">Example invalid feedback text</Form.Control.Feedback>
        </Form.Group>

        {/* Radio buttons */}
        <div className="mb-3">
          <Form.Check label="Toggle this radio" type="radio" name="radioGroup" id="validationFormCheck2" required />
          <Form.Check label="Or toggle this other radio" type="radio" name="radioGroup" id="validationFormCheck3" required />
          <Form.Control.Feedback type="valid">Good choice!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">Please select an option.</Form.Control.Feedback>
        </div>

        {/* Select */}
        <div className="mb-3">
          <Form.Select required>
            <option value="">Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <Form.Control.Feedback type="valid">Nice selection!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">Example invalid select feedback</Form.Control.Feedback>
        </div>

        {/* File Upload */}
        <div className="mb-3">
          <Form.Control type="file" required />
          <Form.Control.Feedback type="valid">File selected successfully!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">Example invalid form file feedback</Form.Control.Feedback>
        </div>

        {/* Submit */}
        <Button type="submit">Submit form</Button>
      </Form>
    </MainCard>
  );
}
