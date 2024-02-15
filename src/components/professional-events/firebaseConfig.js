// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; //main app
import {getAuth} from "firebase/auth"; //authentication function
import {CACHE_SIZE_UNLIMITED, getFirestore, persistentLocalCache} from "firebase/firestore"; //database functions
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebase = {
  apiKey: "AIzaSyBEoLxjbSg3uJ6JGJ5r4NapscconRwWBic",
  authDomain: "acm-calstatela.firebaseapp.com",
  databaseURL: "https://acm-calstatela.firebaseio.com",
  projectId: "acm-calstatela",
  storageBucket: "acm-calstatela.appspot.com",
  messagingSenderId: "417128442198",
  appId: "1:417128442198:web:906c6557e5e73ac1a90ef7",
  measurementId: "G-PZRKWYXMDZ"
};

// Initialize Firebase
const app = initializeApp(firebase,{cacheSizeBytes: CACHE_SIZE_UNLIMITED}, {localCache: persistentLocalCache()});
const auth = getAuth(app); //initialize authentication service
const db = getFirestore(app); //initialize database access
export {auth, db};
export default firebase;