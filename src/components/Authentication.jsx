// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0Mikvb6n5ruXotPGYhdJ3r3rxCal5jFE",
  authDomain: "react-projectauth-8ba7d.firebaseapp.com",
  projectId: "react-projectauth-8ba7d",
  storageBucket: "react-projectauth-8ba7d.appspot.com",
  messagingSenderId: "189443196550",
  appId: "1:189443196550:web:8a1527a54335a1ce8cb307"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);