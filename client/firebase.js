import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDx5hV1HO7R87Sk0Ls1l3KKJzM4bthqfgo",
  authDomain: "drizzfit.firebaseapp.com",
  projectId: "drizzfit",
  storageBucket: "drizzfit.appspot.com",
  messagingSenderId: "1049851918506",
  appId: "1:1049851918506:web:bc9212b24fcc06485078d3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
