import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB3S0bOXsGRkggLCMrbGUCE5s6NovuHOOc",
  authDomain: "sign-up-and-sign-in-8b3a5.firebaseapp.com",
  projectId: "sign-up-and-sign-in-8b3a5",
  storageBucket: "sign-up-and-sign-in-8b3a5.appspot.com",
  messagingSenderId: "271466027154",
  appId: "1:271466027154:web:63f74eda0bf978b60f6e4b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };
