// Import Firebase functions
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// First Firebase project configuration
const firebaseConfig1 = {
  apiKey: "AIzaSyBmnv1C7RsSkTarmbMtjpVfes3V9x7KY_g",
  authDomain: "hr-login-9b6b6.firebaseapp.com",
  projectId: "hr-login-9b6b6",
  storageBucket: "hr-login-9b6b6.firebasestorage.app",
  messagingSenderId: "614176296879",
  appId: "1:614176296879:web:186fe486d79f691547a95a",
  measurementId: "G-CFQV73CP1D"
};

// Second Firebase project configuration
const firebaseConfig2 = {
  apiKey: "AIzaSyAuhstnoU2cOXVs0BmgFHb5L4vtp3gr_YU",
  authDomain: "new-login-fb696.firebaseapp.com",
  projectId: "new-login-fb696",
  storageBucket: "new-login-fb696.appspot.com",
  messagingSenderId: "19599801588",
  appId: "1:19599801588:web:2a321a2c32f9d4c98bf2a1",
  measurementId: "G-Y9F46BCGGN"
};

// Initialize each app separately
const app1 = initializeApp(firebaseConfig1, "app1");
const app2 = initializeApp(firebaseConfig2, "app2");

// Export authentication and Firestore instances
export const auth1 = getAuth(app1);
export const auth2 = getAuth(app2);
export const db1 = getFirestore(app1);
export const db2 = getFirestore(app2);
