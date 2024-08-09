import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import avatar1 from '../assets/images/user/avatar-1.jpg';  // Update paths as needed
import avatar2 from '../assets/images/user/avatar-2.jpg';  // Update paths as needed

// Placeholder for API endpoint
const API_ENDPOINT = 'https://api.example.com/debit-card-data';

const DebitCard = () => {
  const [debitCardData, setDebitCardData] = useState([]);
  const [recentTransactions, setRecentTransactions] = useState([]);

  // Fetch data from API on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_ENDPOINT);
        const data = await response.json();
        
        // Assuming API returns data in the following format
        setDebitCardData(data.debitCardData);
        setRecentTransactions(data.recentTransactions);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Check if debitCardData contains at least one item with a title
  const hasDebitCardData = debitCardData.length > 0 && debitCardData[0].title;

  return (
    <React.Fragment>
      <Row>
        {hasDebitCardData ? (
          // If debitCardData exists and has a title, render the card details and transactions
          <>
            {debitCardData.map((data, index) => (
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
                              <i className={`text-c-${transaction.type === 'Debit' ? 'red' : 'green'} f-10 m-r-15`} />
                              {transaction.type}
                            </h6>
                          </td>
                          <td>
                            <h6 className="text-muted">
                              <i className={`fa fa-circle text-c-${transaction.type === 'Debit' ? 'red' : 'green'} f-10 m-r-15`} />
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
          </>
        ) : (
          // Render alternative view if no debitCardData exists or has no title
          <Col xl={6}>
            <Card>
              <Card.Body>
                <h6 className="mb-4">No Debit Card Data Available</h6>
                <div className="row d-flex align-items-center">
                  <div className="col-9">
                    <h3 className="f-w-300 d-flex align-items-center m-b-0">
                      <i className="feather icon-credit-card f-30 m-r-5" /> N/A
                    </h3>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>
    </React.Fragment>
  );
};

export default DebitCard;
