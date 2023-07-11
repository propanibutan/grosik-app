// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyB8MqQ055p1iiiw_EUKkxED8PPICjZ41Ag",
   authDomain: "grosik-app.firebaseapp.com",
   projectId: "grosik-app",
   storageBucket: "grosik-app.appspot.com",
   messagingSenderId: "1052942998469",
   appId: "1:1052942998469:web:6fb6b6fff68610b078c9ac",
   measurementId: "G-XP63G8W5DH"
};

// const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore();