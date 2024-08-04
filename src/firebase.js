// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDDBjXRv7YX0RMX-HIFX7SMDPALSdWNDX8",
    authDomain: "auth-router-context-65c16.firebaseapp.com",
    projectId: "auth-router-context-65c16",
    storageBucket: "auth-router-context-65c16.appspot.com",
    messagingSenderId: "124184760895",
    appId: "1:124184760895:web:0806c30edf3bb4c75f5e8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export const registerWithEmailAndPassword = async (email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user
        console.log(user)
    } catch (err) {
        console.log(err)
    }
}