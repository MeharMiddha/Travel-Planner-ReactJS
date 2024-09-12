// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPFo2_mXZBnOXXHa4yWeUu4YSWFdfzvzg",
  authDomain: "authentication-2e702.firebaseapp.com",
  projectId: "authentication-2e702",
  storageBucket: "authentication-2e702.appspot.com",
  messagingSenderId: "570320915017",
  appId: "1:570320915017:web:7cfc5fa63516fe5c858d98",
  measurementId: "G-XQY3LYP0BP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);