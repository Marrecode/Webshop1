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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const collectionRef = firestore.collection("users");

  const snapShot = await userRef.get();
  const collectionSnaps = await collectionRef.get();
  console.log({ collectionSnaps });
  console.log({ collection: collectionSnaps.docs.map((doc) => doc.data()) });

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("not working creating a user", error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
