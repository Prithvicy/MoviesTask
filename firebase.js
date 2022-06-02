// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/compat/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXicbvo0H1NGGkzi6oUBenW8neZTH07Gc",
  authDomain: "movieratingg.firebaseapp.com",
  projectId: "movieratingg",
  storageBucket: "movieratingg.appspot.com",
  messagingSenderId: "586134898125",
  appId: "1:586134898125:web:d783f7cfa204ac1020f084",
  measurementId: "G-D26BEYTTNR"
};
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
//if app exists initalize it else use it

// Initialize Firebase
const db = firebase.firestore();
export {firebase, db };
