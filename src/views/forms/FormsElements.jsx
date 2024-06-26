import React from 'react';
import { Row, Col, Card, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown } from 'react-bootstrap';

const FormsElements = () => {
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
      </Row>
    </React.Fragment>
  );
};

export default FormsElements;
