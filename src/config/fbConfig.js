import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var firebaseConfig = {
  apiKey: "AIzaSyBaPDlscnRDjxOZuAYYV2l7aPCYMrzSmSg",
  authDomain: "marioplan-eb5ce.firebaseapp.com",
  databaseURL: "https://marioplan-eb5ce.firebaseio.com",
  projectId: "marioplan-eb5ce",
  storageBucket: "marioplan-eb5ce.appspot.com",
  messagingSenderId: "124404254406",
  appId: "1:124404254406:web:d4ac8b2f978436da"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 