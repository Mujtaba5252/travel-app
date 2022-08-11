import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDA9fb03B4sib8x5byndZLv85NatLQ9G_U",
  authDomain: "react-dcb1a.firebaseapp.com",
  projectId: "react-dcb1a",
  storageBucket: "react-dcb1a.appspot.com",
  messagingSenderId: "762259632154",
  appId: "1:762259632154:web:902923fcca20301567a1a3",
  measurementId: "G-F6J829LJKM"
};

const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);
