import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2DyDqVQL16DC1WxR8Z8TqphBtNfw2rLU",
  authDomain: "fir-auth-33e00.firebaseapp.com",
  projectId: "fir-auth-33e00",
  storageBucket: "fir-auth-33e00.appspot.com",
  messagingSenderId: "266486818630",
  appId: "1:266486818630:web:2fa032b0c8e7af01ec2747"
};
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const db = getDatabase()
  
  export {auth, db, provider}