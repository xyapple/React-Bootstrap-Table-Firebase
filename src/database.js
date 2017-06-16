import firebase from 'firebase';

const config = {
   apiKey: "AIzaSyBjY0irAZPCthbtdGNyntX8vwYXwRRO0oE",
   authDomain: "fir-react-test-afd75.firebaseapp.com",
   databaseURL: "https://fir-react-test-afd75.firebaseio.com",
   projectId: "fir-react-test-afd75",
   storageBucket: "fir-react-test-afd75.appspot.com",
   messagingSenderId: "883869264096"
 };
 firebase.initializeApp(config);

const database = firebase.database();
export default database;
