import jwt from 'jsonwebtoken';
import services from '../utils/services';
import { CONFIG } from '../config/constant';

const JWT_SECRET = CONFIG.jwt.secret;
const JWT_EXPIRES_TIME = CONFIG.jwt.timeout;

const delay = (timeout) => {
  return new Promise((res) => setTimeout(res, timeout));
};

const users = [
  {
    id: '5e86809283e28b96d2d38537',
    email: 'demo@gmail.com',
    password: '123456'
  }
];

services.onPost('/api/account/login').reply(async (config) => {
  try {
    await delay(500);

    const { email, password } = JSON.parse(config.data);
    const user = users.find((_user) => _user.email === email);

    if (!user) {
      return [400, { message: 'Verify Your Email & Password' }];
    }

    if (user.password !== password) {
      return [400, { message: 'Invalid Password' }];
    }

    const serviceToken = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_TIME });

    return [
      200,
      {
        serviceToken,
        user: {
          id: user.id,
          email: user.email
        }
      }
    ];
  } catch (err) {
    console.error(err);
    return [500, { message: 'Server Error' }];
  }
});

services.onGet('/api/account/me').reply((config) => {
  try {
    const { Authorization } = config.headers;

    if (!Authorization) {
      return [401, { message: 'Token Missing' }];
    }

    const serviceToken = Authorization.split(' ')[1];
    const { userId } = jwt.verify(serviceToken, JWT_SECRET);
    const user = users.find((_user) => _user.id === userId);

    if (!user) {
      return [401, { message: 'Invalid Token' }];
    }

    return [
      200,
      {
        user: {
          id: user.id,
          email: user.email
        }
      }
    ];
  } catch (err) {
    return [500, { message: 'Server Error' }];
  }
});
