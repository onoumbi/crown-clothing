// This import loads the firebase namespace along with all its type information.
import firebase from "firebase/app";
// These imports load individual services into the firebase namespace.
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAQ9SUorOA9NHfz-USX7YzBCfzdI2t-n8w",
  authDomain: "crwn-db-12af5.firebaseapp.com",
  projectId: "crwn-db-12af5",
  storageBucket: "crwn-db-12af5.appspot.com",
  messagingSenderId: "4072611429",
  appId: "1:4072611429:web:8a3ffa9ec92371806b708c",
  measurementId: "G-R73MCFF1Y8",
};

export const createUserprofileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
