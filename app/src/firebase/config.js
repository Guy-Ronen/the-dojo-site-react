import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCnr1EzFhQEKn6Tg1XKl3-XzgWJrJ5AGf0",
  authDomain: "the-dojo-site-react.firebaseapp.com",
  projectId: "the-dojo-site-react",
  storageBucket: "the-dojo-site-react.appspot.com",
  messagingSenderId: "815719799923",
  appId: "1:815719799923:web:e59018b37a21d838601e06",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
