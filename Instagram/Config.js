/*const firebaseConfig = {
  apiKey: "AIzaSyAqilzc12HokET-zDH4rrYpb_sG0DNdVrQ",
  authDomain: "instagram-90069.firebaseapp.com",
  projectId: "instagram-90069",
  storageBucket: "instagram-90069.appspot.com",
  messagingSenderId: "485587830647",
  appId: "1:485587830647:web:d4d108909f4cfc05db8372"
};*/
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAqilzc12HokET-zDH4rrYpb_sG0DNdVrQ",
  authDomain: "instagram-90069.firebaseapp.com",
  projectId: "instagram-90069",
  storageBucket: "instagram-90069.appspot.com",
  messagingSenderId: "485587830647",
  appId: "1:485587830647:web:d4d108909f4cfc05db8372"

});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db , auth, storage};