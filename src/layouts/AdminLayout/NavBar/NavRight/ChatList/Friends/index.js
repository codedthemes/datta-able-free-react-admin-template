import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import friend from './friends';
import Friend from './Friend';
import Chat from './Chat';

const Friends = ({ listOpen }) => {
  const [chatOpen, setChatOpen] = useState(listOpen);
  const [user, setUser] = useState([]);

  useEffect(() => {
    setChatOpen(false);
  }, [listOpen]);

  const friendList = friend.map((f) => {
    return (
      <Friend
        key={f.id}
        data={f}
        activeId={user.id}
        clicked={() => {
          setChatOpen(true);
          setUser(f);
        }}
      />
    );
  });

  return (
    <React.Fragment>
      {friendList}
      <Chat
        user={user}
        chatOpen={chatOpen}
        listOpen={listOpen}
        closed={() => {
          setChatOpen(false);
          setUser([]);
        }}
      />
    </React.Fragment>
  );
};

Friends.propTypes = {
  listOpen: PropTypes.bool
};

export default Friends;
