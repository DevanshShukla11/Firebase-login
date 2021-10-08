import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC6DPE5j67dnNblm-Xh5_8lp55IKfivu3o",
    authDomain: "login-using-firebase-14e7b.firebaseapp.com",
    projectId: "login-using-firebase-14e7b",
    storageBucket: "login-using-firebase-14e7b.appspot.com",
    messagingSenderId: "91274229490",
    appId: "1:91274229490:web:a0c6bdbfd3166b2063026b",
    measurementId: "G-MCRKH8SHL8"
  };
 firebase.initializeApp(firebaseConfig);

 export const auth = firebase.auth()
 export const googleAuth = new firebase.auth.GoogleAuthProvider();