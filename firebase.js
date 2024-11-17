import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword ,onAuthStateChanged, sendEmailVerification, signOut,signInWithPopup, GoogleAuthProvider }from"https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { getFirestore, collection, addDoc,getDocs ,doc, setDoc,updateDoc,serverTimestamp , arrayUnion, arrayRemove ,deleteDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
const firebaseConfig = {
    
    apiKey: "AIzaSyAt6eBgTkyzuAcd9dspO3-yIFXkH8QT2ck",
    authDomain: "my-first-project-8277f.firebaseapp.com",
    projectId: "my-first-project-8277f",
    storageBucket: "my-first-project-8277f.firebasestorage.app",
    messagingSenderId: "11761526464",
    appId: "1:11761526464:web:375ded8510518d9f8a2f25",
    measurementId: "G-RSXB75KSYL"
      
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth,getAuth ,createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signOut,signInWithPopup, GoogleAuthProvider,provider,getFirestore,db,collection, addDoc,getDocs, doc, setDoc ,updateDoc,serverTimestamp, arrayUnion, arrayRemove,deleteDoc}