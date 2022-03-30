import { useContext } from 'react';

import FirebaseContext from '../contexts/FirebaseContext';

const useAuth = () => useContext(FirebaseContext);

export default useAuth;
