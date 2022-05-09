// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBagc0c-keFZSTPwN8TqdZ_JTElnqhxbpE",
    authDomain: "warehouse-management-5f17c.firebaseapp.com",
    projectId: "warehouse-management-5f17c",
    storageBucket: "warehouse-management-5f17c.appspot.com",
    messagingSenderId: "122427763845",
    appId: "1:122427763845:web:c62a788c629882c2568dec"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default app;