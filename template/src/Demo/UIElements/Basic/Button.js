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

import Aux from "../../../hoc/_Aux";
import Card from "../../../App/components/MainCard";
import UcFirst from "../../../App/components/UcFirst";

class BasicButton extends React.Component {
    render() {
        const buttonVariants = [
            'primary',
            'secondary',
            'success',
            'danger',
            'warning',
            'info',
            'light',
            'dark',
        ];

        const buttonOptions = [
            {variant: 'primary', icon:'feather icon-thumbs-up'},
            {variant: 'secondary', icon:'feather icon-camera'},
            {variant: 'success', icon:'feather icon-check-circle'},
            {variant: 'danger', icon:'feather icon-slash'},
            {variant: 'warning', icon:'feather icon-alert-triangle'},
            {variant: 'info', icon:'feather icon-info'}
        ];

        const basicButtons = buttonVariants.map((variant, idx) => (
            <OverlayTrigger key={idx} overlay={<Tooltip>{variant}</Tooltip>}>
                <Button variant={variant}><UcFirst text={variant} /></Button>
            </OverlayTrigger>
        ));

        const outlineButtons = buttonVariants.map((variant, idx) => (
            <OverlayTrigger key={idx} overlay={<Tooltip>{'outline-'+variant}</Tooltip>}>
                <Button variant={'outline-'+variant}><UcFirst text={variant} /></Button>
            </OverlayTrigger>
        ));

        const squareButtons = buttonVariants.map((variant, idx) => <Button key={idx} className='btn-square' variant={variant}><UcFirst text={variant} /></Button>);


        const basicDropdownButton = buttonOptions.map(
            button => {
                const title = <UcFirst text={button.variant} />;
                return (
                <DropdownButton
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

        const splitDropdownButton = buttonOptions.map(
            button => {
                const title = <UcFirst text={button.variant} />;
                return (
                <SplitButton
                    title={title}
                    variant={button.variant}
                    id={`dropdown-split-variants-${button.variant}`}
                    key={button.variant}
                    className="mr-2 mb-2"
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
            <Aux>
                <Row>
                    <Col>
                        <Card title="Default">
                            <p>use <code>variant="*"</code> props in component <code>Button</code> to get various button</p>
                            {basicButtons}
                            <OverlayTrigger overlay={<Tooltip>link</Tooltip>}>
                                <Button variant="link">Link</Button>
                            </OverlayTrigger>
                        </Card>
                        <Card title="Outline">
                            <p>use <code>variant="outline-*"</code> props in component <code>Button</code> to get various outline button</p>
                            {outlineButtons}
                        </Card>
                        <Card title="Square Button">
                            <p>use <code>className="btn-square"</code> props in component <code>Button</code> to get square button</p>
                            {squareButtons}
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card title="Basic Dropdown Button">
                            <ButtonToolbar>
                                {basicDropdownButton}
                            </ButtonToolbar>
                        </Card>
                        <Card title="Split Dropdown Button">
                            <ButtonToolbar>
                                {splitDropdownButton}
                            </ButtonToolbar>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default BasicButton;
