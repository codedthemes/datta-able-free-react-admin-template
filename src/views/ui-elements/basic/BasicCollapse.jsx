import React, { useState } from 'react';
import { Row, Col, Button, Card, Collapse } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BasicCollapse = () => {
  const [isBasic, setIsBasic] = useState(false);
  const [isMultiTarget, setIsMultiTarget] = useState([]);
  const [accordionKey, setAccordionKey] = useState(1);

  const targetHandler = (target) => {
    if (isMultiTarget.findIndex((item) => item === target) > -1) {
      setIsMultiTarget((prevState) => {
        return prevState.filter((item) => item !== target);
      });
    } else {
      setIsMultiTarget((prevState) => {
        return [...prevState, target];
      });
    }
  };

  const multiTargetHandler = () => {
    const allTarget = ['target1', 'target2'];
    allTarget.map((target) => targetHandler(target));
  };

  return (
    <React.Fragment>
      <Row className="btn-page">
        <Col sm={12}>
          <h5>Basic Collapse</h5>
          <hr />
          <Card>
            <Card.Header>
              <Button onClick={() => setIsBasic(!isBasic)} aria-controls="basic-collapse" aria-expanded={isBasic}>
                Collapse Link
              </Button>
              <Button onClick={() => setIsBasic(!isBasic)}>Collapse Button</Button>
            </Card.Header>
            <Collapse in={isBasic}>
              <div id="basic-collapse">
                <Card.Body>
                  <Card.Text>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                  </Card.Text>
                </Card.Body>
              </div>
            </Collapse>
          </Card>
        </Col>
        <Col sm={12}>
          <h5>Multiple Targets</h5>
          <hr />
          <Button
            onClick={() => targetHandler('target1')}
            aria-controls="target1"
            aria-expanded={isMultiTarget.findIndex((item) => item === 'target1') > -1}
          >
            Toggle first element
          </Button>
          <Button
            onClick={() => targetHandler('target2')}
            aria-controls="target2"
            aria-expanded={isMultiTarget.findIndex((item) => item === 'target2') > -1}
          >
            Toggle second element
          </Button>
          <Button onClick={multiTargetHandler}>Toggle both elements</Button>
          <Row>
            <Col>
              <Card className="mt-2">
                <Collapse in={isMultiTarget.some((target) => target === 'target1')}>
                  <div id="target1">
                    <Card.Header>
                      <Card.Title as="h5">First Element</Card.Title>
                    </Card.Header>
                    <Card.Body>
                      <Card.Text>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh
                        helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                      </Card.Text>
                    </Card.Body>
                  </div>
                </Collapse>
              </Card>
            </Col>
            <Col>
              <Card className="mt-2">
                <Collapse in={isMultiTarget.some((target) => target === 'target2')}>
                  <div id="target2">
                    <Card.Header>
                      <Card.Title as="h5">Second Element</Card.Title>
                    </Card.Header>
                    <Card.Body>
                      <Card.Text>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh
                        helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
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
          <hr />
          <Card className="mt-2">
            <Card.Header>
              <Card.Title as="h5">
                <Link
                  to="#"
                  onClick={() => setAccordionKey(accordionKey !== 1 ? 1 : 0)}
                  aria-controls="accordion1"
                  aria-expanded={accordionKey === 1}
                >
                  Collapsible Group Item #1
                </Link>
              </Card.Title>
            </Card.Header>
            <Collapse in={accordionKey === 1}>
              <div id="accordion1">
                <Card.Body>
                  <Card.Text>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                    aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                    beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
                    craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven&apos;t heard of them accusamus labore
                    sustainable VHS.
                  </Card.Text>
                </Card.Body>
              </div>
            </Collapse>
          </Card>
          <Card className="mt-2">
            <Card.Header>
              <Card.Title as="h5">
                <Link
                  to="#"
                  onClick={() => setAccordionKey(accordionKey !== 2 ? 2 : 0)}
                  aria-controls="accordion2"
                  aria-expanded={accordionKey === 2}
                >
                  Collapsible Group Item #2
                </Link>
              </Card.Title>
            </Card.Header>
            <Collapse in={accordionKey === 2}>
              <div id="accordion2">
                <Card.Body>
                  <Card.Text>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                    aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                    beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
                    craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven&apos;t heard of them accusamus labore
                    sustainable VHS.
                  </Card.Text>
                </Card.Body>
              </div>
            </Collapse>
          </Card>
          <Card className="mt-2">
            <Card.Header>
              <Card.Title as="h5">
                <Link
                  to="#"
                  onClick={() => setAccordionKey(accordionKey !== 3 ? 3 : 0)}
                  aria-controls="accordion3"
                  aria-expanded={accordionKey === 3}
                >
                  Collapsible Group Item #3
                </Link>
              </Card.Title>
            </Card.Header>
            <Collapse in={accordionKey === 3}>
              <div id="accordion3">
                <Card.Body>
                  <Card.Text>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                    aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                    beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
                    craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven&apos;t heard of them accusamus labore
                    sustainable VHS.
                  </Card.Text>
                </Card.Body>
              </div>
            </Collapse>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default BasicCollapse;
