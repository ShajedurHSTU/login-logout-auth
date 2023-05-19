// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJ-94hjXuVEoYTFeIyYL0CyV-O0zptxxI",
  authDomain: "login-logout-auth.firebaseapp.com",
  projectId: "login-logout-auth",
  storageBucket: "login-logout-auth.appspot.com",
  messagingSenderId: "501620051922",
  appId: "1:501620051922:web:1830ccdc2dcfd12f52820b",
  measurementId: "G-FPGZLTCX8X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);
const provider = new GoogleAuthProvider();
 export {auth, provider};