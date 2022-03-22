import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyArQvNJVF7clf5D3HFBiZgfZJZ7_o5XK5k",
    authDomain: "facebook-clone-b4ebe.firebaseapp.com",
    projectId: "facebook-clone-b4ebe",
    storageBucket: "facebook-clone-b4ebe.appspot.com",
    messagingSenderId: "167442191903",
    appId: "1:167442191903:web:d06e95880b024a762ee72a",
    measurementId: "G-Y0XM7QRB17"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const auth = getAuth();
const provider = new GoogleAuthProvider();

export {auth, provider, signInWithPopup }
export default db