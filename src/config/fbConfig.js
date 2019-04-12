import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyA9Nt7o7qXlIjHq09qJFsE_JZ5o0UipytU",
    authDomain: "movienight-d37b5.firebaseapp.com",
    databaseURL: "https://movienight-d37b5.firebaseio.com",
    projectId: "movienight-d37b5",
    storageBucket: "movienight-d37b5.appspot.com",
    messagingSenderId: "1026029285619"
  };
  
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampInSnapshots: true});
  
  export default firebase;