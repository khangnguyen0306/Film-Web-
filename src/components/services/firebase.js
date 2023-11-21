import { initializeApp } from "firebase/app";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth";
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBuLvgZ0rM5sg_9V_5SlvuREufzbpbO2Xc",
    authDomain: "fer201m-99298.firebaseapp.com",
    projectId: "fer201m-99298",
    storageBucket: "fer201m-99298.appspot.com",
    messagingSenderId: "452155486258",
    appId: "1:452155486258:web:4a52814d342d9ba7dc0c2b",
    measurementId: "G-YPGEDPD1R4"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            });
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logInWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

const registerWithEmailAndPassword = async (name, email, password) => {

    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);

        const user = res.user;

        const userData = {
            uid: user.uid,
            name,
            authProvider: "local",
            email
        };

        const newUserRef = await addDoc(collection(db, "users"), userData);


        console.log("Added user document with ID", newUserRef.id);
        console.log("User data:", userData);

    } catch (err) {
        console.error(err);
        alert(err.message);
    }

};


const getUsers = async () => {

    const querySnapshot = await getDocs(collection(db, "users"));

    querySnapshot.forEach(doc => {

        console.log(doc.id, doc.data());

    });

}


const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link sent!");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logout = () => {
    signOut(auth);
};

export {
    auth,
    db,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
};
