// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBlZUHRFWandewg9yGxOfX_Zg3kUNtH860",
  authDomain: "authenticationproject-7a7cd.firebaseapp.com",
  projectId: "authenticationproject-7a7cd",
  storageBucket: "authenticationproject-7a7cd.appspot.com",
  messagingSenderId: "1065035104648",
  appId: "1:1065035104648:web:b9c5d50ae9d9c1cd913a3d",
  measurementId: "G-1R00136D55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth