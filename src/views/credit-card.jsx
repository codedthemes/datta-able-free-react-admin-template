import React from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import avatar1 from '../assets/images/user/avatar-1.jpg';
import avatar2 from '../assets/images/user/avatar-2.jpg';

const creditCardData = [
  { title: 'Credit Card Number - 1234 5678 9012 3456', amount: '$249.95' },
];

const recentTransactions = [
  {
    id: 1,
    avatar: avatar1,
    name: 'Isabella Christensen',
    description: 'Lorem Ipsum is simply dummy text of…',
    type: 'Credit',
    date: '11 MAY 12:56',
  },
  {
    id: 2,
    avatar: avatar2,
    name: 'Mathilde Andersen',
    description: 'Lorem Ipsum is simply dummy text of…',
    type: 'Debit',
    date: '11 MAY 10:35',
  },
];

const CreditCard = () => {
  return (
    <React.Fragment>
      <Row>
        {creditCardData.map((data, index) => (
          <Col key={index} xl={6}>
            <Card>
              <Card.Body>
                <h6 className="mb-4">{data.title}</h6>
                <div className="row d-flex align-items-center">
                  <div className="col-9">
                    <h3 className="f-w-300 d-flex align-items-center m-b-0">
                      <i className="feather icon-credit-card f-30 m-r-5" /> {data.amount}
                    </h3>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
        <Col md={12} xl={12}>
          <Card className="Recent-Users widget-focus-lg">
            <Card.Header>
              <Card.Title as="h5">Recent Transactions</Card.Title>
            </Card.Header>
            <Card.Body className="px-0 py-2">
              <Table responsive hover className="recent-users">
                <tbody>
                  {recentTransactions.map(transaction => (
                    <tr className="unread" key={transaction.id}>
                      <td>
                        <img
                          className="rounded-circle"
                          style={{ width: '40px' }}
                          src={transaction.avatar}
                          alt="activity-user"
                        />
                      </td>
                      <td>
                        <h6 className="mb-1">{transaction.name}</h6>
                        <p className="m-0">{transaction.description}</p>
                      </td>
                      <td>
                        <h6 className="text-muted">
                          <i className={`text-c-${transaction.type === 'Credit' ? 'green' : 'red'} f-10 m-r-15`} />
                          {transaction.type}
                        </h6>
                      </td>
                      <td>
                        <h6 className="text-muted">
                          <i className={`fa fa-circle text-c-${transaction.type === 'Credit' ? 'green' : 'red'} f-10 m-r-15`} />
                          {transaction.date}
                        </h6>
                      </td>
                      <td>
                        <Link to="#" className="label theme-bg2 text-white f-12">
                          Reject
                        </Link>
                        <Link to="#" className="label theme-bg text-white f-12">
                          Approve
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default CreditCard;
