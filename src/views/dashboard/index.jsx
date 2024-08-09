import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import avatar1 from '../../assets/images/user/avatar-1.jpg'; // Update paths as needed
import avatar2 from '../../assets/images/user/avatar-2.jpg'; // Update paths as needed

// Placeholder for API endpoints
const ACCOUNT_API_ENDPOINT = 'https://api.example.com/account-details';
const TRANSACTIONS_API_ENDPOINT = 'https://api.example.com/recent-transactions';

// Function to get user token or userId from localStorage or context
const getUserIdentifier = () => {
  // Example: Retrieve user token or ID from localStorage
  return localStorage.getItem('userToken'); // Adjust as necessary
};

const DashDefault = () => {
  const [accountData, setAccountData] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const userToken = getUserIdentifier();

      if (!userToken) {
        // Redirect to login page if the user is not authenticated
        navigate('/login');
        return;
      }

      try {
        // Fetch account details
        const accountResponse = await fetch(`${ACCOUNT_API_ENDPOINT}?token=${userToken}`);
        const accountData = await accountResponse.json();
        setAccountData(accountData);

        // Fetch recent transactions
        const transactionsResponse = await fetch(`${TRANSACTIONS_API_ENDPOINT}?token=${userToken}`);
        const transactionsData = await transactionsResponse.json();
        setTransactions(transactionsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

  // Check if accountData contains at least one item with a title
  const hasAccountData = accountData.length > 0 && accountData[0].title;

  return (
    <React.Fragment>
      {loading ? (
        <div>Loading...</div> // Add a loading indicator if needed
      ) : (
        <Row>
          {hasAccountData ? (
            <>
              {accountData.map((data, index) => (
                <Col key={index} xl={6} xxl={6}>
                  <Card>
                    <Card.Body>
                      <h6 className="mb-4">{data.title}</h6>
                      <div className="row d-flex align-items-center">
                        <div className="col-9">
                          <h3 className="f-w-300 d-flex align-items-center m-b-0">
                            <i className={`feather ${data.icon} f-30 m-r-5`} /> {data.amount}
                          </h3>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
              <Col md={4} xl={8}>
                <Card className="Recent-Users widget-focus-lg">
                  <Card.Header>
                    <Card.Title as="h5">Recent Transactions</Card.Title>
                  </Card.Header>
                  <Card.Body className="px-0 py-2">
                    <Table responsive hover className="recent-users">
                      <tbody>
                        {transactions.map(transaction => (
                          <tr className="unread" key={transaction.id}>
                            <td>
                              <img
                                className="rounded-circle"
                                style={{ width: '40px' }}
                                src={transaction.avatar || (transaction.type === 'Credit' ? avatar1 : avatar2)}
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
            </>
          ) : (
            <Col xl={6} xxl={6}>
              <Card>
                <Card.Body>
                  <h6 className="mb-4">No Account Data Available</h6>
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
      )}
    </React.Fragment>
  );
};

export default DashDefault;
