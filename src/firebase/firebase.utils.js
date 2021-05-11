import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDXjTICYS60G65PWlSgAWPgIH2vHxgbrfI",
  authDomain: "webshop-f9a8c.firebaseapp.com",
  projectId: "webshop-f9a8c",
  storageBucket: "webshop-f9a8c.appspot.com",
  messagingSenderId: "290435849690",
  appId: "1:290435849690:web:30b9d36f5440e1c6ff74e3",
  measurementId: "G-9QXPE495S1",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signinWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
