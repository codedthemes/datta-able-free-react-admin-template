import services from '../utils/services';
import avatar1 from 'assets/images/user/avatar-1.jpg';
import avatar2 from 'assets/images/user/avatar-2.jpg';
import avatar3 from 'assets/images/user/avatar-3.jpg';
import avatar4 from 'assets/images/user/avatar-4.jpg';

let friends = [
  {
    id: 1,
    photo: avatar1,
    name: 'Josephin Doe',
    new: 3,
    status: 1,
    time: 'typing'
  },
  {
    id: 2,
    photo: avatar2,
    name: 'Lary Doe',
    new: 1,
    status: 1,
    time: 'online'
  },
  {
    id: 3,
    photo: avatar3,
    name: 'Alice',
    status: 1,
    time: 'online'
  },
  {
    id: 4,
    photo: avatar1,
    name: 'Alia',
    status: 0,
    new: 1,
    time: '10 min ago'
  },
  {
    id: 5,
    photo: avatar4,
    name: 'Rex Trail',
    status: 0,
    time: '15 min ago'
  },
  {
    id: 6,
    photo: avatar1,
    name: 'Lean Grah',
    new: 3,
    status: 1,
    time: 'typing'
  },
  {
    id: 7,
    photo: avatar2,
    name: 'Chelsey Die',
    new: 1,
    status: 1,
    time: 'online'
  },
  {
    id: 8,
    photo: avatar3,
    name: 'Gle Reichert',
    status: 1,
    time: 'online'
  },
  {
    id: 9,
    photo: avatar1,
    name: 'Saman Bauch',
    status: 0,
    new: 1,
    time: '10 min ago'
  },
  {
    id: 10,
    photo: avatar4,
    name: 'Suite 280',
    status: 0,
    time: '15 min ago'
  },
  {
    id: 11,
    photo: avatar1,
    name: 'Ervin Hell',
    new: 3,
    status: 1,
    time: 'typing'
  },
  {
    id: 12,
    photo: avatar2,
    name: 'Leo Corkery',
    new: 1,
    status: 1,
    time: 'online'
  },
  {
    id: 13,
    photo: avatar3,
    name: 'Moriah Ston',
    status: 1,
    time: 'online'
  },
  {
    id: 14,
    photo: avatar1,
    name: 'Victor D',
    status: 0,
    new: 1,
    time: '10 min ago'
  },
  {
    id: 15,
    photo: avatar4,
    name: 'Dayna Park',
    status: 0,
    time: '15 min ago'
  },
  {
    id: 16,
    photo: avatar1,
    name: 'Clem Bauch',
    new: 3,
    status: 1,
    time: 'typing'
  },
  {
    id: 17,
    photo: avatar2,
    name: 'Kurtis Wei',
    new: 1,
    status: 1,
    time: 'online'
  },
  {
    id: 18,
    photo: avatar3,
    name: 'Bret Graham',
    status: 1,
    time: 'online'
  },
  {
    id: 19,
    photo: avatar1,
    name: 'Robel Cery',
    status: 0,
    new: 1,
    time: '10 min ago'
  },
  {
    id: 20,
    photo: avatar4,
    name: 'Hoeger LLC',
    status: 0,
    time: '15 min ago'
  },
  {
    id: 21,
    photo: avatar1,
    name: 'P Lebsack',
    new: 3,
    status: 1,
    time: 'typing'
  },
  {
    id: 22,
    photo: avatar2,
    name: 'Nicholas V',
    new: 1,
    status: 1,
    time: 'online'
  },
  {
    id: 23,
    photo: avatar3,
    name: 'Antonette E',
    status: 1,
    time: 'online'
  },
  {
    id: 24,
    photo: avatar1,
    name: 'Skil Walks',
    status: 0,
    new: 1,
    time: '10 min ago'
  },
  {
    id: 25,
    photo: avatar4,
    name: 'Suzen',
    status: 0,
    time: '15 min ago'
  }
];

let chat = [
  {
    friend_id: 1,
    friend_photo: avatar1,
    messages: [
      {
        type: 1,
        msg: "I'm just looking around. Will you tell me something about yourself?",
        time: '8:20 a.m'
      },
      {
        type: 0,
        msg: 'Ohh! very nice',
        time: '8:22 a.m'
      },
      {
        type: 1,
        msg: 'can you come with me?',
        time: '8:22 a.m'
      }
    ]
  },
  {
    friend_id: 2,
    friend_photo: avatar2,
    messages: [
      {
        type: 1,
        msg: 'Hiii!!! Good Morning',
        time: '6:48 a.m'
      },
      {
        type: 0,
        msg: 'Hello, Very Good Morning',
        time: '6:50 a.m'
      },
      {
        type: 0,
        msg: 'How are You?',
        time: '8:50 a.m'
      },
      {
        type: 1,
        msg: 'Fine, What do you do?',
        time: '8:51 a.m'
      }
    ]
  },
  {
    friend_id: 4,
    friend_photo: avatar1,
    messages: [
      {
        type: 1,
        msg: 'Hiii!!! Good Morning',
        time: '6:48 a.m'
      },
      {
        type: 0,
        msg: 'Hello, Very Good Morning',
        time: '6:50 a.m'
      },
      {
        type: 0,
        msg: 'How are You?',
        time: '8:50 a.m'
      },
      {
        type: 1,
        msg: 'Fine, What do you do?',
        time: '8:51 a.m'
      }
    ]
  },
  {
    friend_id: 5,
    friend_photo: avatar4,
    messages: [
      {
        type: 1,
        msg: "I'm just looking around. Will you tell me something about yourself?",
        time: '8:20 a.m'
      },
      {
        type: 0,
        msg: 'Ohh! very nice',
        time: '8:22 a.m'
      },
      {
        type: 1,
        msg: 'can you come with me?',
        time: '8:22 a.m'
      }
    ]
  },
  {
    friend_id: 6,
    friend_photo: avatar1,
    messages: [
      {
        type: 1,
        msg: "I'm just looking around. Will you tell me something about yourself?",
        time: '8:20 a.m'
      },
      {
        type: 0,
        msg: 'Ohh! very nice',
        time: '8:22 a.m'
      },
      {
        type: 1,
        msg: 'can you come with me?',
        time: '8:22 a.m'
      },
      {
        type: 1,
        msg: "I'm just looking around. Will you tell me something about yourself?",
        time: '8:20 a.m'
      },
      {
        type: 0,
        msg: 'Ohh! very nice',
        time: '8:22 a.m'
      },
      {
        type: 1,
        msg: 'can you come with me?',
        time: '8:22 a.m'
      },
      {
        type: 1,
        msg: "I'm just looking around. Will you tell me something about yourself?",
        time: '8:20 a.m'
      },
      {
        type: 0,
        msg: 'Ohh! very nice',
        time: '8:22 a.m'
      },
      {
        type: 1,
        msg: 'can you come with me?',
        time: '8:22 a.m'
      },
      {
        type: 1,
        msg: "I'm just looking around. Will you tell me something about yourself?",
        time: '8:20 a.m'
      },
      {
        type: 0,
        msg: 'Ohh! very nice',
        time: '8:22 a.m'
      },
      {
        type: 1,
        msg: 'can you come with me?',
        time: '8:22 a.m'
      },
      {
        type: 1,
        msg: "I'm just looking around. Will you tell me something about yourself?",
        time: '8:20 a.m'
      },
      {
        type: 0,
        msg: 'Ohh! very nice',
        time: '8:22 a.m'
      },
      {
        type: 1,
        msg: 'can you come with me?',
        time: '8:22 a.m'
      }
    ]
  },
  {
    friend_id: 7,
    friend_photo: avatar2,
    messages: [
      {
        type: 1,
        msg: 'Hiii!!! Good Morning',
        time: '6:48 a.m'
      },
      {
        type: 0,
        msg: 'Hello, Very Good Morning',
        time: '6:50 a.m'
      },
      {
        type: 0,
        msg: 'How are You?',
        time: '8:50 a.m'
      },
      {
        type: 1,
        msg: 'Fine, What do you do?',
        time: '8:51 a.m'
      }
    ]
  },
  {
    friend_id: 8,
    friend_photo: avatar3,
    messages: [
      {
        type: 1,
        msg: "I'm just looking around. Will you tell me something about yourself?",
        time: '8:20 a.m'
      },
      {
        type: 0,
        msg: 'Ohh! very nice',
        time: '8:22 a.m'
      },
      {
        type: 1,
        msg: 'can you come with me?',
        time: '8:22 a.m'
      }
    ]
  },
  {
    friend_id: 9,
    friend_photo: avatar1,
    messages: [
      {
        type: 1,
        msg: 'Hiii!!! Good Morning',
        time: '6:48 a.m'
      },
      {
        type: 0,
        msg: 'Hello, Very Good Morning',
        time: '6:50 a.m'
      },
      {
        type: 0,
        msg: 'How are You?',
        time: '8:50 a.m'
      },
      {
        type: 1,
        msg: 'Fine, What do you do?',
        time: '8:51 a.m'
      }
    ]
  },
  {
    friend_id: 10,
    friend_photo: avatar4,
    messages: [
      {
        type: 1,
        msg: "I'm just looking around. Will you tell me something about yourself?",
        time: '8:20 a.m'
      },
      {
        type: 0,
        msg: 'Ohh! very nice',
        time: '8:22 a.m'
      },
      {
        type: 1,
        msg: 'can you come with me?',
        time: '8:22 a.m'
      }
    ]
  },
  {
    friend_id: 11,
    friend_photo: avatar1,
    messages: [
      {
        type: 1,
        msg: "I'm just looking around. Will you tell me something about yourself?",
        time: '8:20 a.m'
      },
      {
        type: 0,
        msg: 'Ohh! very nice',
        time: '8:22 a.m'
      },
      {
        type: 1,
        msg: 'can you come with me?',
        time: '8:22 a.m'
      }
    ]
  },
  {
    friend_id: 12,
    friend_photo: avatar2,
    messages: [
      {
        type: 1,
        msg: 'Hiii!!! Good Morning',
        time: '6:48 a.m'
      },
      {
        type: 0,
        msg: 'Hello, Very Good Morning',
        time: '6:50 a.m'
      },
      {
        type: 0,
        msg: 'How are You?',
        time: '8:50 a.m'
      },
      {
        type: 1,
        msg: 'Fine, What do you do?',
        time: '8:51 a.m'
      }
    ]
  },
  {
    friend_id: 13,
    friend_photo: avatar3,
    messages: [
      {
        type: 1,
        msg: "I'm just looking around. Will you tell me something about yourself?",
        time: '8:20 a.m'
      },
      {
        type: 0,
        msg: 'Ohh! very nice',
        time: '8:22 a.m'
      },
      {
        type: 1,
        msg: 'can you come with me?',
        time: '8:22 a.m'
      }
    ]
  },
  {
    friend_id: 14,
    friend_photo: avatar1,
    messages: [
      {
        type: 1,
        msg: 'Hiii!!! Good Morning',
        time: '6:48 a.m'
      },
      {
        type: 0,
        msg: 'Hello, Very Good Morning',
        time: '6:50 a.m'
      },
      {
        type: 0,
        msg: 'How are You?',
        time: '8:50 a.m'
      },
      {
        type: 1,
        msg: 'Fine, What do you do?',
        time: '8:51 a.m'
      }
    ]
  },
  {
    friend_id: 15,
    friend_photo: avatar4,
    messages: [
      {
        type: 1,
        msg: "I'm just looking around. Will you tell me something about yourself?",
        time: '8:20 a.m'
      },
      {
        type: 0,
        msg: 'Ohh! very nice',
        time: '8:22 a.m'
      },
      {
        type: 1,
        msg: 'can you come with me?',
        time: '8:22 a.m'
      }
    ]
  },
  {
    friend_id: 16,
    friend_photo: avatar1,
    messages: [
      {
        type: 1,
        msg: "I'm just looking around. Will you tell me something about yourself?",
        time: '8:20 a.m'
      },
      {
        type: 0,
        msg: 'Ohh! very nice',
        time: '8:22 a.m'
      },
      {
        type: 1,
        msg: 'can you come with me?',
        time: '8:22 a.m'
      }
    ]
  },
  {
    friend_id: 17,
    friend_photo: avatar2,
    messages: [
      {
        type: 1,
        msg: 'Hiii!!! Good Morning',
        time: '6:48 a.m'
      },
      {
        type: 0,
        msg: 'Hello, Very Good Morning',
        time: '6:50 a.m'
      },
      {
        type: 0,
        msg: 'How are You?',
        time: '8:50 a.m'
      },
      {
        type: 1,
        msg: 'Fine, What do you do?',
        time: '8:51 a.m'
      }
    ]
  },
  {
    friend_id: 18,
    friend_photo: avatar3,
    messages: [
      {
        type: 1,
        msg: "I'm just looking around. Will you tell me something about yourself?",
        time: '8:20 a.m'
      },
      {
        type: 0,
        msg: 'Ohh! very nice',
        time: '8:22 a.m'
      },
      {
        type: 1,
        msg: 'can you come with me?',
        time: '8:22 a.m'
      }
    ]
  },
  {
    friend_id: 19,
    friend_photo: avatar1,
    messages: [
      {
        type: 1,
        msg: 'Hiii!!! Good Morning',
        time: '6:48 a.m'
      },
      {
        type: 0,
        msg: 'Hello, Very Good Morning',
        time: '6:50 a.m'
      },
      {
        type: 0,
        msg: 'How are You?',
        time: '8:50 a.m'
      },
      {
        type: 1,
        msg: 'Fine, What do you do?',
        time: '8:51 a.m'
      }
    ]
  },
  {
    friend_id: 20,
    friend_photo: avatar2,
    messages: [
      {
        type: 1,
        msg: "I'm just looking around. Will you tell me something about yourself?",
        time: '8:20 a.m'
      },
      {
        type: 0,
        msg: 'Ohh! very nice',
        time: '8:22 a.m'
      },
      {
        type: 1,
        msg: 'can you come with me?',
        time: '8:22 a.m'
      }
    ]
  },
  {
    friend_id: 21,
    friend_photo: avatar3,
    messages: [
      {
        type: 1,
        msg: "I'm just looking around. Will you tell me something about yourself?",
        time: '8:20 a.m'
      },
      {
        type: 0,
        msg: 'Ohh! very nice',
        time: '8:22 a.m'
      },
      {
        type: 1,
        msg: 'can you come with me?',
        time: '8:22 a.m'
      }
    ]
  }
];

const dynamicSort = (property) => {
  var sortOrder = 1;

  if (property[0] === '-') {
    sortOrder = -1;
    property = property.substr(1);
  }

  return function (a, b) {
    if (sortOrder === -1) {
      return b[property].localeCompare(a[property]);
    } else {
      return a[property].localeCompare(b[property]);
    }
  };
};

friends.sort(dynamicSort('name'));

services.onGet('/api/friend/list').reply(200, { friends });
services.onGet('/api/friend/chat').reply(200, { chat });

services.onGet('/api/friend/chat').reply((config) => {
  try {
    const { id } = config.params;

    friends.filter((friend) => {
      if (friend.id === parseInt(id)) {
        friend.new = 0;
      }
      return friend;
    });

    const messages = chat.filter((chats) => {
      return chats.friend_id === parseInt(id);
    });

    return [200, { messages }];
  } catch (err) {
    console.error(err);
    return [500, { message: 'Internal server error' }];
  }
});

services.onGet('/api/friend/search').reply((config) => {
  try {
    const { query } = config.params;
    const cleanQuery = query.toLowerCase().trim();
    const results = [];

    friends.forEach((friend) => {
      if (!query) {
        return results.push(friend);
      }

      if (friend.name.toLowerCase().includes(cleanQuery)) {
        return results.push(friend);
      }
    });

    return [200, { results }];
  } catch (err) {
    console.error(err);
    return [500, { message: 'Internal server error' }];
  }
});

services.onPost('/api/friend/chat/add').reply((config) => {
  try {
    const { id, msg } = JSON.parse(config.data);

    const d = new Date();
    const n = d.toLocaleTimeString();
    let temp = false;

    chat.filter((chats) => {
      if (chats.friend_id === parseInt(id)) {
        temp = true;
        chats.messages = [
          ...chats.messages,
          {
            type: 0,
            msg: msg,
            time: n
          }
        ];
      }
      return chats;
    });

    if (!temp) {
      const messages = {
        friend_id: parseInt(id),
        messages: [
          {
            type: 0,
            msg: msg,
            time: n
          }
        ]
      };
      chat = [...chat, messages];
    }

    const messages = chat.filter((chats) => {
      return chats.friend_id === parseInt(id);
    });

    return [200, { messages }];
  } catch (err) {
    console.error(err);
    return [500, { message: 'Internal server error' }];
  }
});
