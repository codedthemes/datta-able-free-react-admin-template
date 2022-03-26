import React, { createContext, useEffect, useReducer } from 'react';
import { Auth0Client } from '@auth0/auth0-spa-js';

import { ACCOUNT_INITIALISE, LOGIN, LOGOUT } from '../store/actions';
import { CONFIG } from '../config/constant';
import Loader from '../components/Loader/Loader';
import accountReducer from '../store/accountReducer';

let auth0Server = null;

const initialState = {
  isLoggedIn: false,
  isInitialised: false,
  user: null
};

const Auth0Context = createContext({
  ...initialState,
  popupLogin: () => Promise.resolve(),
  logout: () => {}
});

export const Auth0Provider = ({ children }) => {
  const [state, dispatch] = useReducer(accountReducer, initialState);

  const popupLogin = async (options) => {
    await auth0Server.loginWithPopup(options);
    const isLoggedIn = await auth0Server.isAuthenticated();

    if (isLoggedIn) {
      const user = await auth0Server.getUser();
      dispatch({
        type: LOGIN,
        payload: {
          user: {
            id: user.sub,
            avatar: user.picture,
            email: user.email,
            name: user.name,
            tier: 'Premium'
          }
        }
      });
    }
  };

  const logout = () => {
    auth0Server.logout();

    dispatch({
      type: LOGOUT
    });
  };

  useEffect(() => {
    const init = async () => {
      try {
        auth0Server = new Auth0Client({
          redirect_uri: window.location.origin,
          ...CONFIG.auth0
        });

        await auth0Server.checkSession();

        const isLoggedIn = await auth0Server.isAuthenticated();

        if (isLoggedIn) {
          const user = await auth0Server.getUser();

          dispatch({
            type: ACCOUNT_INITIALISE,
            payload: {
              isLoggedIn: true,
              user: {
                id: user.sub,
                email: user.email
              }
            }
          });
        } else {
          dispatch({
            type: ACCOUNT_INITIALISE,
            payload: {
              isLoggedIn: false,
              user: null
            }
          });
        }
      } catch (err) {
        dispatch({
          type: ACCOUNT_INITIALISE,
          payload: {
            isLoggedIn: false,
            user: null
          }
        });
      }
    };

    init();
  }, []);

  if (!state.isInitialised) {
    return <Loader />;
  }

  return <Auth0Context.Provider value={{ ...state, popupLogin, logout }}>{children}</Auth0Context.Provider>;
};

export default Auth0Context;
