import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const BasicTypography = () => {
  return (
    <React.Fragment>
      <Row>
        <Col sm={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Headings</Card.Title>
            </Card.Header>
            <Card.Body>
              <h1>This is a Heading 1</h1>
              <Card.Text className="text-muted mb-4">
                Suspendisse vel quam malesuada, aliquet sem sit amet, fringilla elit. Morbi tempor tincidunt tempor. Etiam id turpis
                viverra, vulputate sapien nec, varius sem. Curabitur ullamcorper fringilla eleifend. In ut eros hendrerit est consequat
                posuere et at velit.
              </Card.Text>
              <h2>This is a Heading 2</h2>
              <Card.Text className="text-muted mb-4">
                In nec rhoncus eros. Vestibulum eu mattis nisl. Quisque viverra viverra magna nec pulvinar. Maecenas pellentesque porta
                augue, consectetur facilisis diam porttitor sed. Suspendisse tempor est sodales augue rutrum tincidunt. Quisque a malesuada
                purus.
              </Card.Text>
              <h3>This is a Heading 3</h3>
              <Card.Text className="text-muted mb-4">
                Vestibulum auctor tincidunt semper. Phasellus ut vulputate lacus. Suspendisse ultricies mi eros, sit amet tempor nulla
                varius sed. Proin nisl nisi, feugiat quis bibendum vitae, dapibus in tellus.
              </Card.Text>
              <h4>This is a Heading 4</h4>
              <Card.Text className="text-muted mb-4">
                Nulla et mattis nunc. Curabitur scelerisque commodo condimentum. Mauris blandit, velit a consectetur egestas, diam arcu
                fermentum justo, eget ultrices arcu eros vel erat.
              </Card.Text>
              <h5>This is a Heading 5</h5>
              <Card.Text className="text-muted mb-4">
                Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam
                mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus
                elementum. Suspendisse molestie ullamcorper ornare.
              </Card.Text>
              <h6>This is a Heading 6</h6>
              <Card.Text className="text-muted mb-4">
                Donec ultricies, lacus id tempor condimentum, orci leo faucibus sem, a molestie libero lectus ac justo. ultricies mi eros,
                sit amet tempor nulla varius sed. Proin nisl nisi, feugiat quis bibendum vitae, dapibus in tellus.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Display Headings</Card.Title>
            </Card.Header>
            <Card.Body>
              <h1 className="display-1">Display 1</h1>
              <h1 className="display-2">Display 2</h1>
              <h1 className="display-3">Display 3</h1>
              <h1 className="display-4">Display 4</h1>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Inline Text Elements</Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Text className="lead m-t-0">Your title goes here</Card.Text>
              You can use the mark tag to
              <mark>highlight</mark> text.
              <br />
              <del>This line of text is meant to be treated as deleted text.</del>
              <br />
              <ins>This line of text is meant to be treated as an addition to the document.</ins>
              <br />
              <strong>rendered as bold text</strong>
              <br />
              <em>rendered as italicized text</em>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Contextual Text Colors</Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Text className="text-muted mb-1">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</Card.Text>
              <Card.Text className="text-primary mb-1">Nullam id dolor id nibh ultricies vehicula ut id elit.</Card.Text>
              <Card.Text className="text-success mb-1">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</Card.Text>
              <Card.Text className="text-info mb-1">Maecenas sed diam eget risus varius blandit sit amet non magna.</Card.Text>
              <Card.Text className="text-warning mb-1">Etiam porta sem malesuada magna mollis euismod.</Card.Text>
              <Card.Text className="text-danger mb-1">Donec ullamcorper nulla non metus auctor fringilla.</Card.Text>
              <Card.Text className="text-dark mb-1">Nullam id dolor id nibh ultricies vehicula ut id elit.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} xl={4}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Unordered</Card.Title>
            </Card.Header>
            <Card.Body>
              <ul>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
                <li>Facilisis in pretium nisl aliquet</li>
                <li>
                  Nulla volutpat aliquam velit
                  <ul>
                    <li>Phasellus iaculis neque</li>
                    <li>Purus sodales ultricies</li>
                    <li>Vestibulum laoreet porttitor sem</li>
                    <li>Ac tristique libero volutpat at</li>
                  </ul>
                </li>
                <li>Faucibus porta lacus fringilla vel</li>
                <li>Aenean sit amet erat nunc</li>
                <li>Eget porttitor lorem</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} xl={4}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Ordered</Card.Title>
            </Card.Header>
            <Card.Body>
              <ol>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
                <li>Facilisis in pretium nisl aliquet</li>
                <li>
                  Nulla volutpat aliquam velit
                  <ul>
                    <li>Phasellus iaculis neque</li>
                    <li>Purus sodales ultricies</li>
                    <li>Vestibulum laoreet porttitor sem</li>
                    <li>Ac tristique libero volutpat at</li>
                  </ul>
                </li>
                <li>Faucibus porta lacus fringilla vel</li>
                <li>Aenean sit amet erat nunc</li>
                <li>Eget porttitor lorem</li>
              </ol>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} xl={4}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Unstyled</Card.Title>
            </Card.Header>
            <Card.Body>
              <ul className="list-unstyled">
                <li>Lorem ipsum dolor sit amet</li>
                <li>
                  Integer molestie lorem at massa
                  <ul>
                    <li>Phasellus iaculis neque</li>
                  </ul>
                </li>
                <li>Faucibus porta lacus fringilla vel</li>
                <li>Eget porttitor lorem</li>
              </ul>
              <h5>Inline</h5>
              <hr />
              <ul className="list-inline m-b-0">
                <li className="list-inline-item">Lorem ipsum</li>
                <li className="list-inline-item">Phasellus iaculis</li>
                <li className="list-inline-item">Nulla volutpat</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Blockquotes</Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Text className="text-muted m-b-30">Your awesome text goes here.</Card.Text>
              <blockquote className="blockquote">
                <Card.Text className="mb-2 text-start">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                </Card.Text>
                <footer className="blockquote-footer text-start">
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
              <Card.Text className="text-muted m-b-15 m-t-20">
                Add <code>.text-right</code> for a blockquote with right-aligned content.
              </Card.Text>
              <blockquote className="blockquote text-right">
                <Card.Text className="mb-2 text-end">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                </Card.Text>
                <footer className="blockquote-footer text-end">
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Horizontal Description</Card.Title>
            </Card.Header>
            <Card.Body>
              <dl className="dl-horizontal row">
                <dt className="col-sm-3">Description lists</dt>
                <dd className="col-sm-9">A description list is perfect for defining terms.</dd>

                <dt className="col-sm-3">Euismod</dt>
                <dd className="col-sm-9">Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
                <dd className="col-sm-9">Donec id elit non mi porta gravida at eget metus.</dd>

                <dt className="col-sm-3">Malesuada porta</dt>
                <dd className="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>

                <dt className="col-sm-3 text-truncate">Truncated term is truncated</dt>
                <dd className="col-sm-9">
                  Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                </dd>
              </dl>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default BasicTypography;
