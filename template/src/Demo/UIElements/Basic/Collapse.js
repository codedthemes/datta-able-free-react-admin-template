import React, {Component} from 'react';
import {
    Row,
    Col,
    Button,
    Card,
    Collapse
} from 'react-bootstrap';

import Aux from "../../../hoc/_Aux";
import DEMO from "../../../store/constant";

class BasicCollapse extends Component {
    state = {
        isBasic: false,
        isMultiTarget: [],
        accordionKey: 1
    };

    targetHandler = target => {
        if(this.state.isMultiTarget.some(item => item === target)) {
            this.setState(prevState => {
                return {
                    isMultiTarget: prevState.isMultiTarget.filter(item => item !== target)
                }
            });
        } else {
            this.setState(prevState => {
                return {
                    isMultiTarget: [...prevState.isMultiTarget, target]
                }
            });
        }
    };

    multiTargetHandler = () => {
        const allTarget = ['target1', 'target2'];
        allTarget.map(target => {
            this.targetHandler(target);
            return false;
        });
    };

    render() {
        const { isBasic, isMultiTarget, accordionKey } = this.state;

        return (
            <Aux>
                <Row>
                    <Col sm={12}>
                        <h5>Basic Collapse</h5>
                        <hr/>
                        <Card>
                            <Card.Header>
                                <Button href={DEMO.BLANK_LINK} onClick={() => this.setState({ isBasic: !isBasic })} aria-controls="basic-collapse" aria-expanded={isBasic}>Collapse Link</Button>
                                <Button onClick={() => this.setState({ isBasic: !isBasic })}>Collapse Button</Button>
                            </Card.Header>
                            <Collapse in={this.state.isBasic}>
                                <div id="basic-collapse">
                                    <Card.Body>
                                        <Card.Text>
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                            </Collapse>
                        </Card>
                    </Col>
                    <Col sm={12}>
                        <h5>Multiple Targets</h5>
                        <hr/>
                        <Button onClick={() => this.targetHandler('target1')} aria-controls="target1" aria-expanded={isMultiTarget.some(target => target === 'target1')}>Toggle first element</Button>
                        <Button onClick={() => this.targetHandler('target2')} aria-controls="target2" aria-expanded={isMultiTarget.some(target => target === 'target2')}>Toggle second element</Button>
                        <Button onClick={this.multiTargetHandler}>Toggle both elements</Button>
                        <Row>
                            <Col>
                                <Card className="mt-2">
                                    <Collapse in={isMultiTarget.some(target => target === 'target1')}>
                                        <div id="target1">
                                            <Card.Header as="h5">First Element</Card.Header>
                                            <Card.Body>
                                                <Card.Text>
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                                </Card.Text>
                                            </Card.Body>
                                        </div>
                                    </Collapse>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="mt-2">
                                    <Collapse in={isMultiTarget.some(target => target === 'target2')}>
                                        <div id="target2">
                                            <Card.Header as="h5">Second Element</Card.Header>
                                            <Card.Body>
                                                <Card.Text>
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                                </Card.Text>
                                            </Card.Body>
                                        </div>
                                    </Collapse>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={12} className="accordion">
                        <h5>Accordion Example</h5>
                        <hr/>
                        <Card className="mt-2">
                            <Card.Header>
                                <Card.Title as="h5">
                                    <a href={DEMO.BLANK_LINK}
                                       onClick={() => this.setState({ accordionKey: (accordionKey !== 1) ? 1 : 0 })}
                                       aria-controls="accordion1"
                                       aria-expanded={accordionKey=== 1}>
                                        Collapsible Group Item #1
                                    </a>
                                </Card.Title>
                            </Card.Header>
                            <Collapse in={this.state.accordionKey === 1}>
                                <div id="accordion1">
                                    <Card.Body>
                                        <Card.Text>
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
                                            aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                                            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,
                                            craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                                            occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                                            labore sustainable VHS.
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                            </Collapse>
                        </Card>
                        <Card className="mt-2">
                            <Card.Header>
                                <Card.Title as="h5">
                                    <a href={DEMO.BLANK_LINK}
                                       onClick={() => this.setState({ accordionKey: (accordionKey !== 2) ? 2 : 0 })}
                                       aria-controls="accordion2"
                                       aria-expanded={accordionKey === 2}>
                                        Collapsible Group Item #2
                                    </a>
                                </Card.Title>
                            </Card.Header>
                            <Collapse in={this.state.accordionKey === 2}>
                                <div id="accordion2">
                                    <Card.Body>
                                        <Card.Text>
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
                                            aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                                            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,
                                            craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                                            occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                                            labore sustainable VHS.
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                            </Collapse>
                        </Card>
                        <Card className="mt-2">
                            <Card.Header>
                                <Card.Title as="h5">
                                    <a href={DEMO.BLANK_LINK}
                                       onClick={() => this.setState({ accordionKey: (accordionKey !== 3) ? 3 : 0 })}
                                       aria-controls="accordion3"
                                       aria-expanded={accordionKey === 3}>
                                        Collapsible Group Item #3
                                    </a>
                                </Card.Title>
                            </Card.Header>
                            <Collapse in={this.state.accordionKey === 3}>
                                <div id="accordion3">
                                    <Card.Body>
                                        <Card.Text>
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
                                            aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                                            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,
                                            craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                                            occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                                            labore sustainable VHS.
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                            </Collapse>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default BasicCollapse;