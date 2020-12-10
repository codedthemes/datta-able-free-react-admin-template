import React from 'react';
import {Row, Col, Card, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";

class FormsElements extends React.Component {

    render() {

        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Basic Component</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <h5>Form controls</h5>
                                <hr/>
                                <Row>
                                    <Col md={6}>
                                        <Form>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control type="email" placeholder="Enter email" />
                                                <Form.Text className="text-muted">
                                                    We'll never share your email with anyone else.
                                                </Form.Text>
                                            </Form.Group>

                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" placeholder="Password" />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicChecbox">
                                                <Form.Check type="checkbox" label="Check me out" />
                                            </Form.Group>
                                            <Button variant="primary">
                                                Submit
                                            </Button>
                                        </Form>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>Text</Form.Label>
                                            <Form.Control type="email" placeholder="Text" />
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Example select</Form.Label>
                                            <Form.Control as="select">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Example textarea</Form.Label>
                                            <Form.Control as="textarea" rows="3" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <h5 className="mt-5">Sizing</h5>
                                <hr/>
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
                                <h5 className="mt-5">Inline</h5>
                                <hr/>
                                <Row>
                                    <Col>
                                        <Form inline>
                                            <Form.Group className="mb-2">
                                                <Form.Label srOnly>Email</Form.Label>
                                                <Form.Control plaintext readOnly defaultValue="email@example.com" />
                                            </Form.Group>
                                            <Form.Group className="mb-2 mr-5">
                                                <Form.Label srOnly>Password</Form.Label>
                                                <Form.Control type="password" placeholder="Password" />
                                            </Form.Group>
                                            <Form.Group>
                                                <Button className="mb-0">Confirm Identity</Button>
                                            </Form.Group>
                                        </Form>
                                    </Col>
                                </Row>
                                <h3 className="mt-5">Checkboxes and Radios</h3>
                                <Row>
                                    <Col md={12}>
                                        <h5 className="mt-5">Checkboxes</h5>
                                        <hr/>
                                        <Form.Group>
                                            <Form.Check
                                                custom
                                                type="checkbox"
                                                id="checkbox1"
                                                label="Check this custom checkbox"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <h5 className="mt-5">Radios</h5>
                                        <hr/>
                                        <Form.Group>
                                            <Form.Check
                                                custom
                                                type="radio"
                                                label="Toggle this custom radio"
                                                name="supportedRadios"
                                                id="supportedRadio3"
                                            />
                                            <Form.Check
                                                custom
                                                type="radio"
                                                label="Or toggle this other custom radio"
                                                name="supportedRadios"
                                                id="supportedRadio4"
                                            />
                                        </Form.Group>
                                        <h5 className="mt-3">Inline</h5>
                                        <hr/>
                                        <Form.Group>
                                            <Form.Check
                                                inline
                                                custom
                                                type="radio"
                                                label="Toggle this custom radio"
                                                name="supportedRadio"
                                                id="supportedRadio21"
                                            />
                                            <Form.Check
                                                inline
                                                custom
                                                type="radio"
                                                label="Or toggle this other custom radio"
                                                name="supportedRadio"
                                                id="supportedRadio22"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <h5 className="mt-5">Range</h5>
                                        <hr/>
                                        <Form.Label htmlFor="customRange1">Example range</Form.Label>
                                        <input type="range" className="custom-range" defaultValue="22" id="customRange1" />
                                        <Form.Label htmlFor="customRange2">Example range</Form.Label>
                                        <input type="range" className="custom-range" min="0" defaultValue="3" max="5" id="customRange2" />
                                        <Form.Label htmlFor="customRange3">Example range</Form.Label>
                                        <input type="range" className="custom-range" min="0" defaultValue="1.5" max="5" step="0.5" id="customRange3" />
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Input Group</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={12}>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                placeholder="Username"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                            />
                                        </InputGroup>

                                        <InputGroup className="mb-3">
                                            <FormControl
                                                placeholder="Recipient's username"
                                                aria-label="Recipient's username"
                                                aria-describedby="basic-addon2"
                                            />
                                            <InputGroup.Append>
                                                <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
                                            </InputGroup.Append>
                                        </InputGroup>

                                        <label htmlFor="basic-url">Your vanity URL</label>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="basic-addon3">
                                                    https://example.com/users/
                                                </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl id="basic-url" aria-describedby="basic-addon3" />
                                        </InputGroup>

                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text>$</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl aria-label="Amount (to the nearest dollar)" />
                                            <InputGroup.Append>
                                                <InputGroup.Text>.00</InputGroup.Text>
                                            </InputGroup.Append>
                                        </InputGroup>

                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text>With textarea</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl as="textarea" aria-label="With textarea" />
                                        </InputGroup>
                                    </Col>
                                    <Col md={6}>
                                        <h5 className="mt-5">Sizing</h5>
                                        <hr/>
                                        <InputGroup size="sm" className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                        </InputGroup>
                                        <br />
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-default">Default</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                            />
                                        </InputGroup>
                                        <br />
                                        <InputGroup size="lg">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                                        </InputGroup>
                                    </Col>
                                    <Col md={6}>
                                        <h5 className="mt-5">Checkboxes and radios</h5>
                                        <hr/>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                            </InputGroup.Prepend>
                                            <FormControl aria-label="Text input with checkbox" />
                                        </InputGroup>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Radio aria-label="Radio button for following text input" />
                                            </InputGroup.Prepend>
                                            <FormControl aria-label="Text input with radio button" />
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <h5 className="mt-5">Button Addons</h5>
                                <hr/>
                                <Row>
                                    <Col md={6}>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <Button>Button</Button>
                                            </InputGroup.Prepend>
                                            <FormControl aria-describedby="basic-addon1" />
                                        </InputGroup>

                                        <InputGroup className="mb-3">
                                            <FormControl
                                                placeholder="Recipient's username"
                                                aria-label="Recipient's username"
                                                aria-describedby="basic-addon2"
                                            />
                                            <InputGroup.Append>
                                                <Button>Button</Button>
                                            </InputGroup.Append>
                                        </InputGroup>
                                    </Col>
                                    <Col md={6}>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <Button>Button</Button>
                                                <Button variant="secondary">Button</Button>
                                            </InputGroup.Prepend>
                                            <FormControl aria-describedby="basic-addon1" />
                                        </InputGroup>

                                        <InputGroup className="mb-3">
                                            <FormControl
                                                placeholder="Recipient's username"
                                                aria-label="Recipient's username"
                                                aria-describedby="basic-addon2"
                                            />
                                            <InputGroup.Append>
                                                <Button variant="secondary">Button</Button>
                                                <Button>Button</Button>
                                            </InputGroup.Append>
                                        </InputGroup>
                                    </Col>
                                    <Col md={6}>
                                        <h5 className="mt-5">Buttons With Dropdown</h5>
                                        <hr/>
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
                                            <FormControl
                                                placeholder="Recipient's username"
                                                aria-label="Recipient's username"
                                                aria-describedby="basic-addon2"
                                            />

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
                                        <h5 className="mt-5">Segmented  Buttons</h5>
                                        <hr/>
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
                                            <FormControl
                                                placeholder="Recipient's username"
                                                aria-label="Recipient's username"
                                                aria-describedby="basic-addon2"
                                            />

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
            </Aux>
        );
    }
}

export default FormsElements;
