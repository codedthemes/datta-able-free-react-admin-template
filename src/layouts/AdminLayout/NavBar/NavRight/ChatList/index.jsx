import PropTypes from 'prop-types';
import React from 'react';
import { FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';

import Friends from './Friends';

const ChatList = ({ listOpen, closed }) => {
  let listClass = ['header-user-list'];
  if (listOpen) {
    listClass = [...listClass, 'open'];
  }

  return (
    <React.Fragment>
      <div className={listClass.join(' ')}>
        <div className="h-list-header">
          <div className="input-group">
            <FormControl type="text" id="search-friends" placeholder="Search Friend . . ." />
          </div>
        </div>
        <div className="h-list-body">
          <Link to="#" className="h-close-text" onClick={closed}>
            <i className="feather icon-chevrons-right" />
          </Link>
          <div className="main-friend-cont scroll-div">
            <div className="main-friend-list" style={{ height: 'calc(100vh - 85px)' }}>
              <PerfectScrollbar>
                <Friends listOpen={listOpen} />
              </PerfectScrollbar>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

ChatList.propTypes = {
  listOpen: PropTypes.bool,
  closed: PropTypes.func
};

export default ChatList;
