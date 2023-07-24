
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC1pe9WQWWLIFm58MxTWOzF_y7oW2Inmyg",
    authDomain: "campus-booked.firebaseapp.com",
    projectId: "campus-booked",
    storageBucket: "campus-booked.appspot.com",
    messagingSenderId: "432845266088",
    appId: "1:432845266088:web:05ddecc3864ccd4397769d"
};

const app = initializeApp(firebaseConfig);

export default app;