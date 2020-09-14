import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCqObXvOWdJeRGnQJaSzqqhw0g7sgfVqno",
    authDomain: "twitter-7a8ee.firebaseapp.com",
    databaseURL: "https://twitter-7a8ee.firebaseio.com",
    projectId: "twitter-7a8ee",
    storageBucket: "twitter-7a8ee.appspot.com",
    messagingSenderId: "193725784253",
    appId: "1:193725784253:web:6c1b48d763adbb067e57d4",
    measurementId: "G-977VFHFSCL"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;