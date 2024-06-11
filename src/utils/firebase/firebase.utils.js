import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBXhyvumpz1qA7rr0Spi6cKxUIVY6fqw_0",
  authDomain: "crwn-clothing-db-69c48.firebaseapp.com",
  projectId: "crwn-clothing-db-69c48",
  storageBucket: "crwn-clothing-db-69c48.appspot.com",
  messagingSenderId: "4530076581",
  appId: "1:4530076581:web:c69d3626f0e1f388f6064c",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
