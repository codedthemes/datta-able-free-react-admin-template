import React from 'react';
import { Row, Col, Pagination } from 'react-bootstrap';
import ModuleNotification from '../../../components/Widgets/Statistic/Notification';

import Card from '../../../components/Card/MainCard';

const BasicBreadcrumbPagination = () => {
  let active = 3;
  let disabled = 4;
  let items = [];
  let activeItems = [];
  let disabledItems = [];

  for (let number = 1; number <= 5; number++) {
    items.push(<Pagination.Item key={number}>{number}</Pagination.Item>);
  }

  for (let number = 1; number <= 5; number++) {
    activeItems.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  for (let number = 1; number <= 5; number++) {
    disabledItems.push(
      <Pagination.Item key={number} disabled={number === disabled}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <React.Fragment>
      <Row>
        <Col sm={12}>
          <ModuleNotification
            message="For more info please check the components's official documentation"
            link="https://react-bootstrap.github.io/components/pagination/"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Card title="Pagination">
            <Pagination>{items}</Pagination>
            <h5 className="mt-5">Working With Icons</h5>
            <hr />
            <Pagination>
              <Pagination.First />
              <Pagination.Prev />
              {items}
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
            <h5 className="mt-5">More Options</h5>
            <hr />
            <Pagination>
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Ellipsis />
              <Pagination.Item>{11}</Pagination.Item>
              <Pagination.Item active>{12}</Pagination.Item>
              <Pagination.Item>{13}</Pagination.Item>
              <Pagination.Ellipsis />
              <Pagination.Item>{20}</Pagination.Item>
              <Pagination.Next />
            </Pagination>
            <h5 className="mt-5">Active</h5>
            <hr />
            <Pagination>{activeItems}</Pagination>
            <h5 className="mt-5">Disabled</h5>
            <hr />
            <Pagination>{disabledItems}</Pagination>
            <h5 className="mt-5">Sizing</h5>
            <hr />
            <Pagination>{items}</Pagination>
            <Pagination size="lg">{items}</Pagination>
            <Pagination size="sm">{items}</Pagination>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default BasicBreadcrumbPagination;
