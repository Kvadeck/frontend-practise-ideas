import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAFn_LLsN8ueD08RibBjGTzirvomFBJziI",
    authDomain: "react-http-14ccb.firebaseapp.com",
    databaseURL: "https://react-http-14ccb-default-rtdb.firebaseio.com",
    projectId: "react-http-14ccb",
    storageBucket: "react-http-14ccb.appspot.com",
    appId: "1:160420155765:web:d55f6a13ee7e777f8e433c"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const usersCollection = db.collection('users');

export {db, auth, usersCollection}