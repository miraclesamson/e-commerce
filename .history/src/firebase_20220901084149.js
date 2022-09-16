// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPRbN0p39vfpSQbeUfPQqL-eSKSP4enuo",
  authDomain: "e-commerce-fe56b.firebaseapp.com",
  projectId: "e-commerce-fe56b",
  storageBucket: "e-commerce-fe56b.appspot.com",
  messagingSenderId: "989187869030",
  appId: "1:989187869030:web:b68d76a53f95698398e0a7",
  measurementId: "G-1KH0YDN1NY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
