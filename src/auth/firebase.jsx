import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBMqJ-Y6xIAMCnbknqyBqk6SRn133vHBcw",
    authDomain: "movie-app-asim.firebaseapp.com",
    projectId: "movie-app-asim",
    storageBucket: "movie-app-asim.appspot.com",
    messagingSenderId: "99194080789",
    appId: "1:99194080789:web:c7e7b58240f4873f6d081c",
    measurementId: "G-VRPLQ98FYP"
  };


  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
