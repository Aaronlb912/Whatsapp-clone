import { initializeApp, getApp, getApps } from "firebase/app";
import {fire, getFirestore} from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU79-03P5ltbvDCgW1l3OpkewmfH5YzPA",
  authDomain: "social-e9fb7.firebaseapp.com",
  projectId: "social-e9fb7",
  storageBucket: "social-e9fb7.appspot.com",
  messagingSenderId: "1048147210115",
  appId: "1:1048147210115:web:835c719c74b7db63a5d0b6",
  measurementId: "G-9M9B3GV8JL",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();

export default db;

export {auth, provider, storage, app};