import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZ_f7VVCcQbMOPsyGAxDKZNZQtq0Heo2Y",
  authDomain: "cooking-ninja-site-1416b.firebaseapp.com",
  projectId: "cooking-ninja-site-1416b",
  storageBucket: "cooking-ninja-site-1416b.appspot.com",
  messagingSenderId: "484999312674",
  appId: "1:484999312674:web:2fc46e1100a6ee533c217b",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
