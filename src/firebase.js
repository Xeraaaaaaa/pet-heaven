// Import the functions you need from the SDKs you need

import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getFirestore} from "@firebase/firestore";
import { getAuth } from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi5Tw8LTDV0QW1i2EJpb0Ttrq1GWSOx8E",
  authDomain: "isit207a3-64556.firebaseapp.com",
  projectId: "isit207a3-64556",
  storageBucket: "isit207a3-64556.appspot.com",
  messagingSenderId: "629520917393",
  appId: "1:629520917393:web:5a2d8260f02e18d634f030"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);