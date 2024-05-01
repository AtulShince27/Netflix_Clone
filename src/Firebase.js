// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
import { addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOgyxgeAVMzqvm9rdc-fldP7DjWQ-GDnU",
  authDomain: "netflix-clone-v1-76644.firebaseapp.com",
  projectId: "netflix-clone-v1-76644",
  storageBucket: "netflix-clone-v1-76644.appspot.com",
  messagingSenderId: "470041282758",
  appId: "1:470041282758:web:ce9242de1691938ea5afc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name, 
            authProvider: "local",
            email,
        })
    } catch (error) {
        console.log(error);
        alert(error);
    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        alert(error);
    }
}

const logout = () =>{
    signOut(auth);
}

export {auth, db, login, signup, logout};