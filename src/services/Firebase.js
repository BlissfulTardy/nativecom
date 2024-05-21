
/* TODO! COMMENTING OUT FOR NOW DUE UNRESOLVED DEPENDENCY ISSUE

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCptxvI6qrmMoGmx-kZeImtTb2jLSWFPMA",
  authDomain: "nativecom-bd890.firebaseapp.com",
  projectId: "nativecom-bd890",
  storageBucket: "nativecom-bd890.appspot.com",
  messagingSenderId: "908344328086",
  appId: "1:908344328086:web:c59f080be6177d79e1a7b7",
  measurementId: "G-3PWQT2HH2K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics
const analytics = getAnalytics(app);

// Initialize Authentication
export const auth = getAuth(app);

*/

/**
 * TODO REPLACE VANILLA PLACEHOLER IMPLEMENTATION WHEN ACTUAL
 * FIREBASE APP AND AUTH INTEGRATIONS HAVE THEIR ISSUE RESOLVED
 */
export const auth = {
  signInWithEmailAndPassword: async (email, password) => {
    if (email === "test@example.com" && password === "password") {
      return Promise.resolve("User signed in");
    } else {
      return Promise.reject(new Error("Invalid email or password"));
    }
  },
  createUserWithEmailAndPassword: async (email, password) => {
    if (email && password) {
      return Promise.resolve("User registered");
    } else {
      return Promise.reject(new Error("Invalid email or password"));
    }
  },
  sendPasswordResetEmail: async (email) => {
    if (email === "test@example.com") {
      return Promise.resolve("Password reset email sent");
    } else {
      return Promise.reject(new Error("Email not found"));
    }
  }
};