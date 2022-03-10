import firebase from "firebase";
// authentication

import "firebase/auth";
// firestore database
import "firebase/firestore";

import "firebase/database";
// real time data base
import "firebase/storage";
// storage
import "firebase/functions";
// function
// hosting

const firebaseConfig = {
  apiKey: "AIzaSyBolZgLq4jdwwBO5vfUksuTLIosf3cI6_c",
  authDomain: "spotify-clone-82048.firebaseapp.com",
  projectId: "spotify-clone-82048",
  storageBucket: "spotify-clone-82048.appspot.com",
  messagingSenderId: "614614968095",
  appId: "1:614614968095:web:11f0c0517b7f714548b22a",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default firebase;
