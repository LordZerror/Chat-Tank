// import firebase from "firebase";
// import { initializeApp } from 'firebase/app';
// import { GoogleAuthProvider, getAuth } from 'firebase/auth';
// // import { getFirestore } from "firebase/firestore";
// import {getDatabase} from 'firebase/database';
import firebase from "firebase";

// TODO: Replace the following with your app's Firebase project configuration

const firebaseConfig = {
    apiKey: "AIzaSyD_XA60mrYki_hKnGzd3ctaaoHl6B3kQlg",
    authDomain: "chat-tank-hackathon.firebaseapp.com",
    projectId: "chat-tank-hackathon",
    storageBucket: "chat-tank-hackathon.appspot.com",
    messagingSenderId: "693311257762", 
    appId: "1:693311257762:web:3bfb4422a6af201a556bfb",
    measurementId: "G-RXS8LYEV7K"
  };

// const app = initializeApp(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;