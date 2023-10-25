// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXQbjyob2ArTKKzAxF8T5_O9L2T4cRFKc",
  authDomain: "dental-client.firebaseapp.com",
  projectId: "dental-client",
  storageBucket: "dental-client.appspot.com",
  messagingSenderId: "361026244071",
  appId: "1:361026244071:web:e0b410ad044ece88ae4142"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;