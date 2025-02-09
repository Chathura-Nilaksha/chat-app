import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg5Tn4egkP-DYeP0eKYo08dMuftC4rJ7E",
  authDomain: "chat-app-1986.firebaseapp.com",
  projectId: "chat-app-1986",
  storageBucket: "chat-app-1986.firebasestorage.app",
  messagingSenderId: "1075127363084",
  appId: "1:1075127363084:web:e84867ad62a2e3a08db029"
};

// Initialize Firebase (firebaseconfiguration obj)
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (username, email, password) => {

}