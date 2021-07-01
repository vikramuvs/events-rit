import * as firebase from 'firebase';


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCWxDdbdGlCTOYheOPLqZJqmf5NwOU0o5A",
    authDomain: "events-rit-563e9.firebaseapp.com",
    projectId: "events-rit-563e9",
    storageBucket: "events-rit-563e9.appspot.com",
    messagingSenderId: "263201616630",
    appId: "1:263201616630:web:adcf1335ef12376e9672d7",
    measurementId: "G-7HVX50W5VJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;
