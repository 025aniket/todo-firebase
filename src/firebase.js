import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3kHK2WqtXAF2QV-iz_fsPRRxvhN7Y_RI",
  authDomain: "todo-app-d1dbe.firebaseapp.com",
  databaseURL: "https://todo-app-d1dbe-default-rtdb.firebaseio.com",
  projectId: "todo-app-d1dbe",
  storageBucket: "todo-app-d1dbe.appspot.com",
  messagingSenderId: "991655495308",
  appId: "1:991655495308:web:e3349729c4691b6c9b5da9",
  measurementId: "G-FF9KJBEQ96"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();
