import React, { createContext, useEffect, useReducer } from 'react';

import { FIREBASE_STATE_CHANGED } from '../store/actions';
import firebase from '../firebase/lib';
import Loader from '../components/Loader/Loader';

const initialState = {
  isLoggedIn: false,
  isInitialised: false,
  user: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case FIREBASE_STATE_CHANGED: {
      const { isLoggedIn, user } = action.payload;

      return {
        ...state,
        isLoggedIn,
        isInitialised: true,
        user
      };
    }
    default: {
      return { ...state };
    }
  }
};

const FirebaseContext = createContext({
  ...initialState,
  firebaseEmailPasswordNewUser: () => Promise.resolve(),
  firebaseEmailPasswordSignIn: () => Promise.resolve(),
  firebaseGoogleSignIn: () => Promise.resolve(),
  logout: () => Promise.resolve()
});

export const FirebaseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const firebaseEmailPasswordSignIn = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  };

  const firebaseGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    return firebase.auth().signInWithPopup(provider);
  };

  const firebaseEmailPasswordNewUser = async (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  };

  const logout = () => {
    return firebase.auth().signOut();
  };

  useEffect(() => {
    return firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: FIREBASE_STATE_CHANGED,
          payload: {
            isLoggedIn: true,
            user: {
              id: user.uid,
              email: user.email
            }
          }
        });
      } else {
        dispatch({
          type: FIREBASE_STATE_CHANGED,
          payload: {
            isLoggedIn: false,
            user: null
          }
        });
      }
    });
  }, [dispatch]);

  if (!state.isInitialised) {
    return <Loader />;
  }

  return (
    <FirebaseContext.Provider value={{ ...state, firebaseEmailPasswordNewUser, firebaseEmailPasswordSignIn, firebaseGoogleSignIn, logout }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseContext;
