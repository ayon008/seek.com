// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBTxtZ3mUtOli1j3Ww2qJDMMEk0X31T4Ag",
    authDomain: "seek-7fffb.firebaseapp.com",
    projectId: "seek-7fffb",
    storageBucket: "seek-7fffb.firebasestorage.app",
    messagingSenderId: "609740011461",
    appId: "1:609740011461:web:e74467e139a323c8e8bdac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app