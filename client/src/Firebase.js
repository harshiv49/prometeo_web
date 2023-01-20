// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIH9hjhk_fH_iGmrrMf2BhBhvrs9AVB8A",
  authDomain: "scholarpay-62c44.firebaseapp.com",
  projectId: "scholarpay-62c44",
  storageBucket: "scholarpay-62c44.appspot.com",
  messagingSenderId: "207157414506",
  appId: "1:207157414506:web:3a2c5bd432353ff7775813"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);