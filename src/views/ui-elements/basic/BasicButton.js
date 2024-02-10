import React from 'react';
import {
  Row,
  Col,
  Button,
  OverlayTrigger,
  Tooltip,
  ButtonToolbar,
  ToggleButtonGroup,
  ToggleButton,
  Dropdown,
  DropdownButton,
  SplitButton,
  ButtonGroup
} from 'react-bootstrap';
import ModuleNotification from '../../../components/Widgets/Statistic/Notification';

import Card from '../../../components/Card/MainCard';

const BasicButton = () => {
  const buttonVariants = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

  const buttonOptions = [
    { variant: 'primary', icon: 'feather icon-thumbs-up mx-1' },
    { variant: 'secondary', icon: 'feather icon-camera mx-1' },
    { variant: 'success', icon: 'feather icon-check-circle mx-1' },
    { variant: 'danger', icon: 'feather icon-slash mx-1' },
    { variant: 'warning', icon: 'feather icon-alert-triangle mx-1' },
    { variant: 'info', icon: 'feather icon-info mx-1' }
  ];

  const buttonOnlyIconOptions = [
    { variant: 'primary', icon: 'feather icon-thumbs-up' },
    { variant: 'secondary', icon: 'feather icon-camera' },
    { variant: 'success', icon: 'feather icon-check-circle' },
    { variant: 'danger', icon: 'feather icon-slash' },
    { variant: 'warning', icon: 'feather icon-alert-triangle' },
    { variant: 'info', icon: 'feather icon-info' }
  ];

  const basicButtons = buttonVariants.map((variant, idx) => {
    const tooltip = (
      <Tooltip className="mb-2" id="tooltip">
        {variant}
      </Tooltip>
    );
    return (
      <OverlayTrigger key={idx} placement="top" overlay={tooltip}>
        <Button variant={variant} className="text-capitalize">
          {variant}
        </Button>
      </OverlayTrigger>
    );
  });

  const outlineButtons = buttonVariants.map((variant, idx) => (
    <OverlayTrigger key={idx} placement="top" overlay={<Tooltip className="mb-2">{'outline-' + variant}</Tooltip>}>
      <Button variant={'outline-' + variant} style={{ color: variant === 'light' ? 'black' : 'inherit' }} className="text-capitalize">
        {variant}
      </Button>
    </OverlayTrigger>
  ));

  const squareButtons = buttonVariants.map((variant, idx) => (
    <Button key={idx} className="btn-square text-capitalize" variant={variant}>
      {variant}
    </Button>
  ));
  const disabledButtons = buttonVariants.map((variant, idx) => (
    <Button key={idx} disabled variant={variant} className="text-capitalize">
      {variant}
    </Button>
  ));
  const roundedButtons = buttonVariants.map((variant, idx) => (
    <Button key={idx} className="btn-rounded text-capitalize" variant={variant}>
      {variant}
    </Button>
  ));

  const glowButtons = buttonVariants.map((variant, idx) => (
    <OverlayTrigger key={idx} placement="top" overlay={<Tooltip className="mb-2">{'btn-glow-' + variant}</Tooltip>}>
      <Button className={'text-capitalize my-2 btn-glow-' + variant} variant={variant}>
        {variant}
      </Button>
    </OverlayTrigger>
  ));

  const iconButtons = buttonOptions.map((button, idx) => (
    <Button key={idx} variant={button.variant} className="text-capitalize">
      <i className={button.icon} />
      {button.variant}
    </Button>
  ));

  const outlineIconButtons = buttonOptions.map((button, idx) => (
    <Button key={idx} variant={'outline-' + button.variant} className="text-capitalize">
      <i className={button.icon} />
      {button.variant}
    </Button>
  ));

  const onlyIconButtons = buttonOnlyIconOptions.map((button, idx) => (
    <Button className="btn-icon" key={idx} variant={button.variant}>
      <i className={button.icon} />
    </Button>
  ));

  const onlyOutlineIconButtons = buttonOnlyIconOptions.map((button, idx) => (
    <Button className="btn-icon" key={idx} variant={'outline-' + button.variant}>
      <i className={button.icon} />
    </Button>
  ));

  const onlyIconRoundedButtons = buttonOnlyIconOptions.map((button, idx) => (
    <Button className="btn-icon btn-rounded" key={idx} variant={button.variant}>
      <i className={button.icon} />
    </Button>
  ));

  const onlyOutlineIconRoundedButtons = buttonOnlyIconOptions.map((button, idx) => (
    <Button className="btn-icon btn-rounded" key={idx} variant={'outline-' + button.variant}>
      <i className={button.icon} />
    </Button>
  ));

  const basicDropdownButton = buttonOptions.map((button) => {
    const title = button.variant;
    return (
      <DropdownButton
        className="text-capitalize"
        title={title}
        variant={button.variant}
        id={`dropdown-variants-${button.variant}`}
        key={button.variant}
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else hear</Dropdown.Item>
      </DropdownButton>
    );
  });

  const splitDropdownButton = buttonOptions.map((button) => {
    const title = button.variant;
    return (
      <SplitButton
        title={title}
        variant={button.variant}
        id={`dropdown-split-variants-${button.variant}`}
        key={button.variant}
        className="mx-2 mb-2 text-capitalize"
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else hear</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </SplitButton>
    );
  });

  const basicOutlineDropdownButton = buttonOptions.map((button) => {
    const title = button.variant;
    return (
      <DropdownButton
        title={title}
        variant={'outline-' + button.variant}
        id={`dropdown-variants-${button.variant}`}
        key={button.variant}
        className="text-capitalize"
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else hear</Dropdown.Item>
      </DropdownButton>
    );
  });

  const splitOutlineDropdownButton = buttonOptions.map((button) => {
    const title = button.variant;
    return (
      <SplitButton
        title={title}
        variant={'outline-' + button.variant}
        id={`dropdown-split-variants-${button.variant}`}
        key={button.variant}
        className="mx-2 mb-2 text-capitalize"
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else hear</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </SplitButton>
    );
  });

  const basicIconDropdownButton = buttonOnlyIconOptions.map((button) => {
    const title = <i className={button.icon} />;
    return (
      <DropdownButton
        title={title}
        variant={button.variant}
        id={`dropdown-variants-${button.variant}`}
        key={button.variant}
        className="drp-icon"
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else hear</Dropdown.Item>
      </DropdownButton>
    );
  });

  const outlineIconDropdownButton = buttonOnlyIconOptions.map((button) => {
    const title = <i className={button.icon} />;
    return (
      <DropdownButton
        title={title}
        variant={'outline-' + button.variant}
        id={`dropdown-variants-${button.variant}`}
        key={button.variant}
        className="drp-icon"
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else hear</Dropdown.Item>
      </DropdownButton>
    );
  });

  const basicIconDropdownRoundedButton = buttonOnlyIconOptions.map((button) => {
    const title = <i className={button.icon} />;
    return (
      <DropdownButton
        title={title}
        variant={button.variant}
        id={`dropdown-variants-${button.variant}`}
        key={button.variant}
        className="drp-icon btn-rounded"
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else hear</Dropdown.Item>
      </DropdownButton>
    );
  });

  const outlineIconDropdownRoundedButton = buttonOnlyIconOptions.map((button) => {
    const title = <i className={button.icon} />;
    return (
      <DropdownButton
        title={title}
        variant={'outline-' + button.variant}
        id={`dropdown-variants-${button.variant}`}
        key={button.variant}
        className="drp-icon btn-rounded"
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else hear</Dropdown.Item>
      </DropdownButton>
    );
  });

  return (
    <React.Fragment>
      <Row>
        <Col sm={12}>
          <ModuleNotification
            message="For more info please check the components's official documentation"
            link="https://react-bootstrap.github.io/components/buttons/"
          />
        </Col>
      </Row>
      <Row className="btn-page">
        <Col>
          <Card title="Default">
            {basicButtons}
            <OverlayTrigger placement="top" overlay={<Tooltip className="mb-2">link</Tooltip>}>
              <Button variant="link">Link</Button>
            </OverlayTrigger>
          </Card>
          <Card title="Outline">{outlineButtons}</Card>
          <Card title="Square Button">{squareButtons}</Card>
          <Card title="Disabled Button">{disabledButtons}</Card>
          <Card title="Rounded Button">{roundedButtons}</Card>
          <Card title="Glow Button">{glowButtons}</Card>
          <Card title="Shadow Button">
            <OverlayTrigger placement="top" overlay={<Tooltip className="mb-2">shadow-1</Tooltip>}>
              <Button className="shadow-1" variant="primary">
                Shadow 1
              </Button>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip className="mb-2">shadow-2</Tooltip>}>
              <Button className="shadow-2" variant="success">
                Shadow 2
              </Button>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={<Tooltip className="mb-2">shadow-3</Tooltip>}>
              <Button className="shadow-3" variant="danger">
                Shadow 3
              </Button>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={<Tooltip className="mb-2">shadow-4</Tooltip>}>
              <Button className="shadow-4" variant="warning">
                Shadow 4
              </Button>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={<Tooltip className="mb-2">shadow-5</Tooltip>}>
              <Button className="shadow-5" variant="info">
                Shadow 5
              </Button>
            </OverlayTrigger>
          </Card>
        </Col>
      </Row>
      <Row className="btn-page">
        <Col md={6}>
          <Card title="Sizes [ Large ]">
            <Button variant="primary" size="lg">
              Large Button
            </Button>
            <Button variant="secondary" size="lg">
              Large Button
            </Button>
          </Card>
        </Col>
        <Col md={6}>
          <Card title="Sizes [ Small ]">
            <Button variant="primary" size="sm">
              Small Button
            </Button>
            <Button variant="secondary" size="sm">
              Small Button
            </Button>
          </Card>
        </Col>
        <Col md={6}>
          <Card title="Checkbox Button">
            <ButtonToolbar>
              <ToggleButtonGroup type="checkbox" defaultValue={1}>
                <ToggleButton variant="secondary" value={1}>
                  Checkbox
                </ToggleButton>
                <ToggleButton variant="secondary" value={2}>
                  Checkbox
                </ToggleButton>
              </ToggleButtonGroup>
            </ButtonToolbar>
          </Card>
        </Col>
        <Col md={6}>
          <Card title="Radio Button">
            <ButtonToolbar>
              <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                <ToggleButton variant="secondary" value={1}>
                  Active
                </ToggleButton>
                <ToggleButton variant="secondary" value={2}>
                  Radio
                </ToggleButton>
                <ToggleButton variant="secondary" value={3}>
                  Radio
                </ToggleButton>
              </ToggleButtonGroup>
            </ButtonToolbar>
          </Card>
        </Col>
        <Col md={6}>
          <Card title="Button With Icon">{iconButtons}</Card>
        </Col>
        <Col md={6}>
          <Card title="Outline Icon Buttons">{outlineIconButtons}</Card>
        </Col>
        <Col md={6}>
          <Card title="Only Icon">{onlyIconButtons}</Card>
        </Col>
        <Col md={6}>
          <Card title="Outline Icon">{onlyOutlineIconButtons}</Card>
        </Col>
        <Col md={6}>
          <Card title="Icon Button Rounded">{onlyIconRoundedButtons}</Card>
        </Col>
        <Col md={6}>
          <Card title="Icon Outline Button Rounded">{onlyOutlineIconRoundedButtons}</Card>
        </Col>
      </Row>
      <Row className="btn-page">
        <Col>
          <Card title="Basic Dropdown Button">
            <ButtonToolbar>{basicDropdownButton}</ButtonToolbar>
          </Card>
          <Card title="Split Dropdown Button">
            <ButtonToolbar>{splitDropdownButton}</ButtonToolbar>
          </Card>
          <Card title="Basic Outline Dropdown Button">
            <ButtonToolbar>{basicOutlineDropdownButton}</ButtonToolbar>
          </Card>
          <Card title="Split Outline Dropdown Button">
            <ButtonToolbar>{splitOutlineDropdownButton}</ButtonToolbar>
          </Card>
        </Col>
      </Row>
      <Row className="btn-page">
        <Col md={6}>
          <Card title="Basic Icon Dropdown">
            <ButtonToolbar>{basicIconDropdownButton}</ButtonToolbar>
          </Card>
        </Col>
        <Col md={6}>
          <Card title="Outline Icon Dropdown">
            <ButtonToolbar>{outlineIconDropdownButton}</ButtonToolbar>
          </Card>
        </Col>
        <Col md={6}>
          <Card title="Basic Rounded Icon Dropdown">
            <ButtonToolbar>{basicIconDropdownRoundedButton}</ButtonToolbar>
          </Card>
        </Col>
        <Col md={6}>
          <Card title="Outline Rounded Icon Dropdown">
            <ButtonToolbar>{outlineIconDropdownRoundedButton}</ButtonToolbar>
          </Card>
        </Col>
        <Col md={6}>
          <Card title="Basic Button Group">
            <ButtonGroup aria-label="Basic example">
              <Button variant="secondary">Left</Button>
              <Button variant="secondary">Middle</Button>
              <Button variant="secondary">Right</Button>
            </ButtonGroup>
          </Card>
        </Col>
        <Col md={6}>
          <Card title="Button Toolbar">
            <ButtonToolbar aria-label="Toolbar with button groups">
              <ButtonGroup className="me-2 mb-2" aria-label="First group">
                <Button variant="secondary">1</Button>
                <Button variant="secondary">2</Button>
                <Button variant="secondary">3</Button>
                <Button variant="secondary">4</Button>
              </ButtonGroup>

              <ButtonGroup className="me-2 mb-2" aria-label="Second group">
                <Button variant="secondary">5</Button>
                <Button variant="secondary">6</Button>
                <Button variant="secondary">7</Button>
              </ButtonGroup>

              <ButtonGroup className="me-2 mb-2" aria-label="Third group">
                <Button variant="secondary">8</Button>
              </ButtonGroup>
            </ButtonToolbar>
          </Card>
        </Col>
      </Row>
      <Row className="btn-page">
        <Col>
          <Card title="Button Toolbar Size">
            <Row>
              <Col xl={4} md={12}>
                <p>
                  use <code>size=&quot;lg&quot;</code> props in component <code>ButtonGroup</code> to get large button toolbar
                </p>
                <ButtonGroup size="lg">
                  <Button variant="secondary">Left</Button>
                  <Button variant="secondary">Middle</Button>
                  <Button variant="secondary">Right</Button>
                </ButtonGroup>
              </Col>
              <Col xl={4} md={6}>
                <p>default toolbar size</p>
                <ButtonGroup>
                  <Button variant="secondary">Left</Button>
                  <Button variant="secondary">Middle</Button>
                  <Button variant="secondary">Right</Button>
                </ButtonGroup>
              </Col>
              <Col xl={4} md={6}>
                <p>
                  use <code>size=&quot;sm&quot;</code> props in component <code>ButtonGroup</code> to get small button toolbar
                </p>
                <ButtonGroup size="sm">
                  <Button variant="secondary">Left</Button>
                  <Button variant="secondary">Middle</Button>
                  <Button variant="secondary">Right</Button>
                </ButtonGroup>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row className="btn-page">
        <Col md={6}>
          <Card title="Nesting">
            <ButtonGroup>
              <Button variant="secondary">1</Button>
              <Button variant="secondary">2</Button>
              <DropdownButton variant="secondary" as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
                <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
              </DropdownButton>
            </ButtonGroup>
          </Card>
        </Col>
        <Col md={6}>
          <Card title="Vertical Variation">
            <Row>
              <Col>
                <ButtonGroup vertical>
                  <Button variant="secondary" className="me-0 mb-0">
                    1
                  </Button>
                  <Button variant="secondary" className="me-0 mb-0">
                    2
                  </Button>
                  <Button variant="secondary" className="me-0 mb-0">
                    3
                  </Button>
                </ButtonGroup>
              </Col>
              <Col>
                <ButtonGroup vertical>
                  <Button variant="secondary" className="me-0 mb-0">
                    1
                  </Button>
                  <Button variant="secondary" className="me-0 mb-0">
                    2
                  </Button>
                  <DropdownButton variant="secondary" as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
                    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                  </DropdownButton>
                </ButtonGroup>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default BasicButton;
