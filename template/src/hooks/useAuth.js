import { useContext } from 'react';

import FirebaseContext from '../contexts/FirebaseContext';
//import JWTContext from '../contexts/JWTContext';
//import Auth0Context from '../contexts/Auth0Context';

const useAuth = () => useContext(FirebaseContext);

export default useAuth;
