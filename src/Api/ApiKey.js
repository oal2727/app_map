import * as firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAGWta1H38zkGv55E33wKZERE8VCEQ_CJ8",
  authDomain: "notional-portal-221019.firebaseapp.com",
  databaseURL: "https://notional-portal-221019.firebaseio.com",
  projectId: "notional-portal-221019",
  storageBucket: "notional-portal-221019.appspot.com",
  messagingSenderId: "666786398624",
  appId: "1:666786398624:web:b27a112e9821b2f0fde4c5"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//añadir timestamp
var db = firebase.firestore()
var dayCollection = db.collection("dayLap")
export  {dayCollection}
export {db}