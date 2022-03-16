import { initializeApp, getApp, getApps } from "firebase/app";
import { fire, getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGTqomUOffq-wtEIq9poHDeCN-wu389YE",
  authDomain: "whatsapp-clone-9e914.firebaseapp.com",
  projectId: "whatsapp-clone-9e914",
  storageBucket: "whatsapp-clone-9e914.appspot.com",
  messagingSenderId: "710068540043",
  appId: "1:710068540043:web:0699407dd3368dc707fa8e",
  measurementId: "G-ZHF03TGTZ5",
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();

export default db;

export { auth, provider, storage, app };
