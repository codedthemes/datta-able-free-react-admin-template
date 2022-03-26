import React from 'react';
import { Alert } from 'react-bootstrap';

const Notification = (props) => {
  return (
    <React.Fragment>
      <Alert variant="warning">
        {props.message}
        <Alert.Link href={props.link} target="_blank" className="float-right">
          Demo & Documentation
        </Alert.Link>
      </Alert>
    </React.Fragment>
  );
};

export default Notification;
