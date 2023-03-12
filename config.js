import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCV__piN1IVCEz9678TkGUKwZ92-vOWGrM",
  authDomain: "todo-reactnative-a1e43.firebaseapp.com",
  projectId: "todo-reactnative-a1e43",
  storageBucket: "todo-reactnative-a1e43.appspot.com",
  messagingSenderId: "854035741627",
  appId: "1:854035741627:web:bf9d8f2395351a8939a29e",
  measurementId: "G-NCDW7W9MQE",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
