import React from 'react';
import {
  Row,
  Col,
  Button,
  OverlayTrigger,
  Tooltip,
  ButtonToolbar,
  Dropdown,
  DropdownButton,
  SplitButton
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

  const basicButtons = buttonVariants.map((variant, idx) => (
    <OverlayTrigger key={idx} overlay={<Tooltip>{variant}</Tooltip>}>
      <Button variant={variant} className="text-capitalize">
        {variant}
      </Button>
    </OverlayTrigger>
  ));

  const outlineButtons = buttonVariants.map((variant, idx) => (
    <OverlayTrigger key={idx} overlay={<Tooltip>{'outline-' + variant}</Tooltip>}>
      <Button variant={'outline-' + variant} className="text-capitalize">
        {variant}
      </Button>
    </OverlayTrigger>
  ));

  const squareButtons = buttonVariants.map((variant, idx) => (
    <Button key={idx} className="btn-square text-capitalize" variant={variant}>
      {variant}
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
        className="mr-2 mb-2 text-capitalize"
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else hear</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </SplitButton>
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
            <OverlayTrigger overlay={<Tooltip>link</Tooltip>}>
              <Button variant="link">Link</Button>
            </OverlayTrigger>
          </Card>
          <Card title="Outline">{outlineButtons}</Card>
          <Card title="Square Button">{squareButtons}</Card>
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
        </Col>
      </Row>
      
    </React.Fragment>
  );
};

export default BasicButton;
