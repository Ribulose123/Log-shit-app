// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuhstnoU2cOXVs0BmgFHb5L4vtp3gr_YU",
  authDomain: "new-login-fb696.firebaseapp.com",
  projectId: "new-login-fb696",
  storageBucket: "new-login-fb696.appspot.com",
  messagingSenderId: "19599801588",
  appId: "1:19599801588:web:2a321a2c32f9d4c98bf2a1",
  measurementId: "G-Y9F46BCGGN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const authPoint = getAuth(app);
 export const db = getFirestore()


 