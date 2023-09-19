// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyASIS5QhqpfacQ5zJNG9hN8_HkOcNoLYl8",
    authDomain: "fir-authentication-1bc18.firebaseapp.com",
    projectId: "fir-authentication-1bc18",
    storageBucket: "fir-authentication-1bc18.appspot.com",
    messagingSenderId: "40125954206",
    appId: "1:40125954206:web:3ad7ff3b69a4476252238f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;