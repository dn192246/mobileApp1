// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJhvNgzeJpiz3s5PrXm6EGRsxdXmrjY20",
  authDomain: "itrapp-2bceb.firebaseapp.com",
  projectId: "itrapp-2bceb",
  storageBucket: "itrapp-2bceb.firebasestorage.app",
  messagingSenderId: "693059007934",
  appId: "1:693059007934:web:43b5a5f2e7ed312ef2f5ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);