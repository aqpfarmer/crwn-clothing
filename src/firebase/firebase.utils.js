import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAPUErE_UtfLoqxXcJATutuTiDxV6MdbLc",
    authDomain: "crwn-db-610fc.firebaseapp.com",
    databaseURL: "https://crwn-db-610fc.firebaseio.com",
    projectId: "crwn-db-610fc",
    storageBucket: "",
    messagingSenderId: "525868042687",
    appId: "1:525868042687:web:59c5e4846b3a93f4"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    console.log(firestore.doc('users/cavalrydude'))

  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;