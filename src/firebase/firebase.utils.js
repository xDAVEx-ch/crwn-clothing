import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDLJMNbybsGgFnJ5NWG2sXTWmXwdM9ycGY",
    authDomain: "crw-database.firebaseapp.com",
    databaseURL: "https://crw-database.firebaseio.com",
    projectId: "crw-database",
    storageBucket: "crw-database.appspot.com",
    messagingSenderId: "644558988460",
    appId: "1:644558988460:web:e8bd66781ff3124587eb09"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInGoogle = () => auth.signInWithPopup(provider);
export default firebase;