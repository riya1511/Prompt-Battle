import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCUK0WOpTaLw1IFBx-qaPW-xDuqrYuPqp8",
    authDomain: "prompt-battle.firebaseapp.com",
    projectId: "prompt-battle",
    storageBucket: "prompt-battle.appspot.com",
    messagingSenderId: "1060910970767",
    appId: "1:1060910970767:web:a2ac0b87bb1e2115c0fdfa",
    measurementId: "G-YSQ8YRPWE8",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };