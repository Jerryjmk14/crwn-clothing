import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

//initialise firestore
export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  aditionalInformation
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);
  // console.log(userSnapShot);
  // console.log(userSnapShot.exists());

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...aditionalInformation,
      });
    } catch (error) {
      console.log("erro creating user", error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangeListener = (callback) =>
  onAuthStateChanged(auth, callback);
