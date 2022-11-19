import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBzQtzVsSpJRWIEC93d6ydjk0VBcjL1P5Q",
  authDomain: "dev-hacks-app.firebaseapp.com",
  projectId: "dev-hacks-app",
  storageBucket: "dev-hacks-app.appspot.com",
  messagingSenderId: "20876722222",
  appId: "1:20876722222:web:acda0d7f18a1a8a439dfbf",
  measurementId: "G-66H1HE050S"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
