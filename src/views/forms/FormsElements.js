import React, { useState } from 'react';
import { Row, Col, Card, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown } from 'react-bootstrap';

const FormsElements = () => {
  const [validated, setValidated] = useState(false);
  const [validatedTooltip, setValidatedTooltip] = useState(false);
  const [supportedCheckbox, setSupportedCheckbox] = useState(false);
  const [supportedRadio, setSupportedRadio] = useState(false);
  const [supportedSelect, setSupportedSelect] = useState(0);
  const [supportedFile, setSupportedFile] = useState(0);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  const handleSubmitTooltip = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidatedTooltip(true);
  };

  const supportedSelectHandler = (event) => {
    setSupportedSelect(parseInt(event.target.value));
  };

  const supportedFileHandler = (event) => {
    setSupportedFile(!!event.target.value);
  };

  return (
    <React.Fragment>
      <Row>
        <Col sm={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Form controls</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted">We&apos;ll never share your email with anyone else.</Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicChecbox">
                      <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary">Submit</Button>
                  </Form>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Text</Form.Label>
                    <Form.Control type="email" placeholder="Text" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
                    <Form.Label>Example select</Form.Label>
                    <Form.Control as="select">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Sizing</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <Form.Control size="lg" type="text" placeholder="Large text" className="mb-3" />
                  <Form.Control type="text" placeholder="Normal text" className="mb-3" />
                  <Form.Control size="sm" type="text" placeholder="Small text" className="mb-3" />
                </Col>
                <Col md={6}>
                  <Form.Control size="lg" as="select" className="mb-3">
                    <option>Large select</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                  <Form.Control as="select" className="mb-3">
                    <option>Default select</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Range Inputs</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="exampleForm.RangeInput">
                    <Form.Label>Example Range input</Form.Label>
                    <Form.Range className="form-control-range" />
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} lg={6}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Readonly</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form.Group className="mb-3" controlId="formPlaintextEmail">
                <Form.Label>Read only input</Form.Label>
                <Form.Control readOnly defaultValue="email@example.com" />
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} lg={6}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Readonly Plaintext</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form.Group className="mb-3" as={Row} controlId="formPlaintextEmail1">
                <Form.Label column sm="3">
                  Email
                </Form.Label>
                <Col sm="9">
                  <Form.Control plaintext readOnly defaultValue="email@example.com" />
                </Col>
              </Form.Group>
              <Form.Group className="mb-3" as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="3">
                  Password
                </Form.Label>
                <Col sm="9">
                  <Form.Control type="password" placeholder="Password" />
                </Col>
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Inline</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col sm={12} style={{ overflowX: 'auto' }}>
                  <Form className="d-inline-flex">
                    <Form.Group className="d-inline-flex mx-3 align-items-center">
                      <Form.Label className="mb-0">Email:</Form.Label>
                      <Form.Control className="mx-2" plaintext readOnly defaultValue="email@example.com" />
                    </Form.Group>
                    <Form.Group className="d-inline-flex mr-5 mx-3 align-items-center">
                      <Form.Label className="mb-0">Password:</Form.Label>
                      <Form.Control className="mx-2" type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="d-inline-flex mx-3" style={{ overflow: 'unset' }}>
                      <Button className="mb-0">Confirm Identity</Button>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Form Grid</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form>
                <Row gy={3}>
                  <Form.Group className="mb-3" as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group className="mb-3" as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                  <Form.Label>Address 2</Form.Label>
                  <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>
                <Row>
                  <Form.Group className="mb-3" as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                  </Form.Group>

                  <Form.Group className="mb-3" as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control as="select">
                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group className="mb-3" as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary">Sign In</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} lg={6}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Horizontal Form</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3" as={Row} controlId="formHorizontalEmail">
                  <Form.Label column sm={3}>
                    Email
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Control type="email" placeholder="Email" />
                  </Col>
                </Form.Group>

                <Form.Group className="mb-3" as={Row} controlId="formHorizontalPassword">
                  <Form.Label column sm={3}>
                    Password
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Control type="password" placeholder="Password" />
                  </Col>
                </Form.Group>
                <fieldset>
                  <Form.Group className="mb-3" as={Row}>
                    <Form.Label as="legend" column sm={3}>
                      Radios
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Check type="radio" label="first radio" name="formHorizontalRadios" id="formHorizontalRadios1" />
                      <Form.Check type="radio" label="second radio" name="formHorizontalRadios" id="formHorizontalRadios2" />
                      <Form.Check type="radio" label="third radio" name="formHorizontalRadios" id="formHorizontalRadios3" />
                    </Col>
                  </Form.Group>
                </fieldset>
                <Form.Group className="mb-3" as={Row} controlId="formHorizontalCheck">
                  <Form.Label as="legend" column sm={3}>
                    Checkbox
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Check label="Remember me" />
                  </Col>
                </Form.Group>

                <Form.Group className="mb-3" as={Row}>
                  <Col sm={{ span: 10, offset: 2 }}>
                    <Button>Sign In</Button>
                  </Col>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} lg={6}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Horizontal Form Label Sizing</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form.Group className="mb-3" as={Row} controlId="formHorizontalEmail1">
                <Form.Label column sm={3}>
                  Default
                </Form.Label>
                <Col sm={9}>
                  <Form.Control type="email" placeholder="Email" />
                </Col>
              </Form.Group>
              <Form.Group className="mb-3" as={Row} controlId="formHorizontalEmail2">
                <Form.Label className="col-form-label-lg" column sm={3}>
                  Large
                </Form.Label>
                <Col sm={9}>
                  <Form.Control type="email" placeholder="Email" />
                </Col>
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Help Text</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form.Group className="mb-3" controlId="formBasicEmail1">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                <Form.Text className="text-muted">
                  Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters,
                  or emoji.
                </Form.Text>
              </Form.Group>
              <Form>
                <Form.Group className="mt-3 d-inline-flex align-items-center" as={Col} md={6}>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" className="mx-3" />{' '}
                  <Form.Text className="text-muted">
                    <small>Must be 8-20 characters long.</small>
                  </Form.Text>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Validation</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form noValidate validated={validated}>
                <Row>
                  <Form.Group className="mb-3" as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control required type="text" placeholder="First name" defaultValue="Mark" />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control required type="text" placeholder="Last name" defaultValue="Otto" />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" as={Col} md="4" controlId="validationCustomUsername">
                    <Form.Label>Username</Form.Label>
                    <InputGroup>
                      <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                      <Form.Control type="text" placeholder="Username" aria-describedby="inputGroupPrepend" required />
                      <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group className="mb-3" as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="City" required />
                    <Form.Control.Feedback type="invalid">Please provide a valid city.</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" as={Col} md="3" controlId="validationCustom04">
                    <Form.Label>State</Form.Label>
                    <Form.Control type="text" placeholder="State" required />
                    <Form.Control.Feedback type="invalid">Please provide a valid state.</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" as={Col} md="3" controlId="validationCustom05">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control type="text" placeholder="Zip" required />
                    <Form.Control.Feedback type="invalid">Please provide a valid zip.</Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Check required label="Agree to terms and conditions" feedback="You must agree before submitting." />
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)}>Submit form</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Supported Elements</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form.Group className="mb-3">
                <Form.Check
                  required
                  isInvalid={!supportedCheckbox}
                  isValid={supportedCheckbox}
                  type="checkbox"
                  id="supported-checkbox"
                  label="Check this custom checkbox"
                  feedback={supportedCheckbox ? false : 'Example invalid feedback text.'}
                  onChange={() => setSupportedCheckbox((prevState) => !prevState)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check
                  required
                  isInvalid={!supportedRadio}
                  isValid={supportedRadio}
                  type="radio"
                  label="Toggle this custom radio"
                  name="supportedRadio"
                  id="supportedRadio1"
                  onChange={() => setSupportedRadio(true)}
                />
                <Form.Check
                  required
                  isInvalid={!supportedRadio}
                  isValid={supportedRadio}
                  type="radio"
                  label="Or toggle this other custom radio"
                  name="supportedRadio"
                  id="supportedRadio2"
                  feedback={supportedRadio ? false : 'More example invalid feedback text.'}
                  onChange={() => setSupportedRadio(true)}
                />
              </Form.Group>
              <Form.Group className="mt-3">
                <Form.Control
                  as="select"
                  required
                  value={supportedSelect}
                  isInvalid={supportedSelect === 0}
                  isValid={supportedSelect !== 0}
                  onChange={(event) => supportedSelectHandler(event)}
                >
                  <option value={0}>Open this select menu</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                </Form.Control>
                {supportedSelect ? '' : <div className="invalid-feedback">Example invalid custom select feedback</div>}
              </Form.Group>
              <div className="custom-file mt-3">
                <Form.Control
                  type="file"
                  className="custom-file-input"
                  id="validatedCustomFile"
                  required
                  isInvalid={!supportedFile}
                  isValid={supportedFile}
                  onChange={(event) => supportedFileHandler(event)}
                />
                {supportedFile ? '' : <div className="invalid-feedback">Example invalid custom file feedback</div>}
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Tooltip</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form noValidate validated={validatedTooltip}>
                <Row>
                  <Form.Group className="mb-3" as={Col} md="4" controlId="validationCustom011">
                    <Form.Label>First name</Form.Label>
                    <Form.Control required type="text" placeholder="First name" defaultValue="Mark" />
                    <div className="valid-tooltip">Looks good!</div>
                  </Form.Group>
                  <Form.Group className="mb-3" as={Col} md="4" controlId="validationCustom021">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control required type="text" placeholder="Last name" defaultValue="Otto" />
                    <div className="valid-tooltip">Looks good!</div>
                  </Form.Group>
                  <Form.Group className="mb-3" as={Col} md="4" controlId="validationCustomUsername1">
                    <Form.Label>Username</Form.Label>
                    <InputGroup>
                      <InputGroup.Text id="inputGroupPrepend1">@</InputGroup.Text>
                      <Form.Control type="text" placeholder="Username" aria-describedby="inputGroupPrepend" required />
                      <div className="invalid-tooltip">Please choose a username.</div>
                    </InputGroup>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group className="mb-3 position-relative" as={Col} md="6" controlId="validationCustom031">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="City" required />
                    <div className="invalid-tooltip">Please provide a valid city.</div>
                  </Form.Group>
                  <Form.Group className="mb-3 position-relative" as={Col} md="3" controlId="validationCustom041">
                    <Form.Label>State</Form.Label>
                    <Form.Control type="text" placeholder="State" required />
                    <div className="invalid-tooltip">Please provide a valid state.</div>
                  </Form.Group>
                  <Form.Group className="mb-3 position-relative" as={Col} md="3" controlId="validationCustom051">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control type="text" placeholder="Zip" required />
                    <div className="invalid-tooltip">Please provide a valid zip.</div>
                  </Form.Group>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                    id="tooltip-agree"
                  />
                </Form.Group>
                <Button onClick={(e) => handleSubmitTooltip(e)}>Submit form</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Checkboxes and Radios</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={12}>
                  <h6 className="text-muted">Checkboxes</h6>
                  <hr />
                  <Form.Group className="mb-3">
                    <Form.Check type="checkbox" id="checkbox1" label="Check this custom checkbox" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <h6 className="mt-4 text-muted">Radios</h6>
                  <hr />
                  <Form.Group className="mb-3">
                    <Form.Check type="radio" label="Toggle this custom radio" name="supportedRadios" id="supportedRadio3" />
                    <Form.Check type="radio" label="Or toggle this other custom radio" name="supportedRadios" id="supportedRadio4" />
                  </Form.Group>
                  <h6 className="mt-3 text-muted">Inline</h6>
                  <hr />
                  <Form.Group className="mb-3">
                    <Form.Check inline type="radio" label="Toggle this custom radio" name="supportedRadio" id="supportedRadio21" />
                    <Form.Check inline type="radio" label="Or toggle this other custom radio" name="supportedRadio" id="supportedRadio22" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <h6 className="mt-4 text-muted">Range</h6>
                  <hr />
                  <Form.Label htmlFor="customRange1">Example range</Form.Label>
                  <Form.Range className="form-control-range" />
                  <Form.Label htmlFor="customRange2">Example range</Form.Label>
                  <Form.Range className="form-control-range" />
                  <Form.Label htmlFor="customRange3">Example range</Form.Label>
                  <Form.Range className="form-control-range" />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Input Group</Card.Title>
            </Card.Header>
            <Card.Body>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <FormControl placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
              </InputGroup>

              <InputGroup className="mb-3">
                <FormControl placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
              </InputGroup>

              <label htmlFor="basic-url">Your vanity URL</label>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon3">https://example.com/users/</InputGroup.Text>
                <FormControl id="basic-url" aria-describedby="basic-addon3" />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text>$</InputGroup.Text>
                <FormControl aria-label="Amount (to the nearest dollar)" />
                <InputGroup.Text>.00</InputGroup.Text>
              </InputGroup>

              <InputGroup>
                <InputGroup.Text>With textarea</InputGroup.Text>
                <FormControl as="textarea" aria-label="With textarea" />
              </InputGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Sizing</Card.Title>
            </Card.Header>
            <Card.Body>
              <InputGroup size="sm" className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
              </InputGroup>
              <br />
              <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">Default</InputGroup.Text>
                <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" />
              </InputGroup>
              <br />
              <InputGroup size="lg">
                <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text>
                <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
              </InputGroup>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Multiple inputs</Card.Title>
            </Card.Header>
            <Card.Body>
              <InputGroup className="mb-3">
                <InputGroup.Text>First and last name</InputGroup.Text>
                <FormControl />
                <FormControl />
              </InputGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Checkboxes and radios</Card.Title>
            </Card.Header>
            <Card.Body>
              <InputGroup className="mb-3">
                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                <FormControl aria-label="Text input with checkbox" />
              </InputGroup>
              <InputGroup>
                <InputGroup.Radio aria-label="Radio button for following text input" />
                <FormControl aria-label="Text input with radio button" />
              </InputGroup>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Multiple Addons</Card.Title>
            </Card.Header>
            <Card.Body>
              <InputGroup className="mb-3">
                <InputGroup.Text>$</InputGroup.Text>
                <InputGroup.Text>0.00</InputGroup.Text>
                <FormControl aria-label="Amount (to the nearest dollar)" />
              </InputGroup>
              <InputGroup className="mb-3">
                <FormControl aria-label="Amount (to the nearest dollar)" />
                <InputGroup.Text>$</InputGroup.Text>
                <InputGroup.Text>0.00</InputGroup.Text>
              </InputGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Button Addons</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <InputGroup className="mb-3">
                    <Button>Button</Button>
                    <FormControl aria-describedby="basic-addon1" />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <FormControl placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <Button>Button</Button>
                  </InputGroup>
                </Col>
                <Col md={6}>
                  <InputGroup className="mb-3">
                    <Button>Button</Button>
                    <Button variant="secondary">Button</Button>
                    <FormControl aria-describedby="basic-addon1" />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <FormControl placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <Button variant="secondary">Button</Button>
                    <Button>Button</Button>
                  </InputGroup>
                </Col>
                <Col md={6}>
                  <h6 className="mt-5 text-muted">Buttons With Dropdown</h6>
                  <hr />
                  <InputGroup className="mb-3">
                    <DropdownButton as={InputGroup.Prepend} title="Dropdown" id="input-group-dropdown-1">
                      <Dropdown.Item href="#">Action</Dropdown.Item>
                      <Dropdown.Item href="#">Another action</Dropdown.Item>
                      <Dropdown.Item href="#">Something else here</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#">Separated link</Dropdown.Item>
                    </DropdownButton>
                    <FormControl aria-describedby="basic-addon1" />
                  </InputGroup>

                  <InputGroup>
                    <FormControl placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />

                    <DropdownButton as={InputGroup.Append} title="Dropdown" id="input-group-dropdown-2">
                      <Dropdown.Item href="#">Action</Dropdown.Item>
                      <Dropdown.Item href="#">Another action</Dropdown.Item>
                      <Dropdown.Item href="#">Something else here</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#">Separated link</Dropdown.Item>
                    </DropdownButton>
                  </InputGroup>
                </Col>
                <Col md={6}>
                  <h6 className="mt-5 text-muted">Segmented Buttons</h6>
                  <hr />
                  <InputGroup className="mb-3">
                    <Dropdown as={InputGroup.Prepend}>
                      <Button variant="secondary">Action</Button>
                      <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic-1" />
                      <Dropdown.Menu>
                        <Dropdown.Item hred="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item hred="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item hred="#/action-3">Something else</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <FormControl aria-describedby="basic-addon1" />
                  </InputGroup>

                  <InputGroup>
                    <FormControl placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />

                    <Dropdown as={InputGroup.Append}>
                      <Button variant="secondary">Action</Button>
                      <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic-2" />
                      <Dropdown.Menu>
                        <Dropdown.Item hred="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item hred="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item hred="#/action-3">Something else</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </InputGroup>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Custom Forms</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col lg={6}>
                  <h6 className="mt-3 text-muted">Custom Select</h6>
                  <hr />
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="custom-addons1">Option</InputGroup.Text>
                    <FormControl as="select" aria-describedby="custom-addons1" className="custom-select">
                      <option>Choose...</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </FormControl>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <FormControl as="select" aria-describedby="custom-addons2" className="custom-select">
                      <option>Choose...</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </FormControl>
                    <InputGroup.Text id="custom-addons2">Option</InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Button id="custom-addons3">Button</Button>
                    <FormControl as="select" aria-describedby="custom-addons3" className="custom-select">
                      <option>Choose...</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </FormControl>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <FormControl as="select" aria-describedby="custom-addons4" className="custom-select">
                      <option>Choose...</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </FormControl>
                    <Button id="custom-addons4">Button</Button>
                  </InputGroup>
                </Col>
                <Col lg={6}>
                  <h6 className="mt-3 text-muted">Custom File Input</h6>
                  <hr />
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="custom-addons5">Upload</InputGroup.Text>
                    <Form.Control
                      aria-describedby="custom-addons5"
                      placeholder="Choose file"
                      type="file"
                      className="custom-file-input"
                      id="validatedCustomFile1"
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control aria-describedby="custom-addons6" type="file" className="custom-file-input" id="validatedCustomFile2" />
                    <InputGroup.Text id="custom-addons6">Upload</InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3 cust-file-button">
                    <Button id="custom-addons7">Button</Button>
                    <Form.Control aria-describedby="custom-addons7" type="file" className="custom-file-input" id="validatedCustomFile3" />
                  </InputGroup>
                  <InputGroup className="mb-3 cust-file-button">
                    <Form.Control aria-describedby="custom-addons8" type="file" className="custom-file-input" id="validatedCustomFile4" />
                    <Button id="custom-addons8">Button</Button>
                  </InputGroup>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default FormsElements;
