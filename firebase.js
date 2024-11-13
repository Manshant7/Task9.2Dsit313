
import { initializeApp } from "firebase/app";

import {getFirestore} from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage'; 

const firebaseConfig = {

    apiKey: "AIzaSyBgRGaAFYrLf9LlpMSTQkTI8vpNArsHW8M",
  
    authDomain: "task8d-9f6e9.firebaseapp.com",
  
    projectId: "task8d-9f6e9",
  
    storageBucket: "task8d-9f6e9.appspot.com",
  
    messagingSenderId: "929192025776",
  
    appId: "1:929192025776:web:750023ee918e3d5c3e6575"
  
  };
  

const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { auth,db, storage} ;
