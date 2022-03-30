import firebase from 'firebase/app';
import 'firebase/auth';

import { CONFIG } from '../config/constant';

if (!firebase.apps.length) {
  firebase.initializeApp(CONFIG.firebase);
}

export default firebase;
