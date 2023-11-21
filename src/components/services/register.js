
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
    auth,
    registerWithEmailAndPassword,
    signInWithGoogle,
} from "./firebase";
import "./login.scss";
import Header from "../header/header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate(); // Use useNavigate to get the navigation function.

    const register = () => {
        if (!name) alert("Please enter name");
        registerWithEmailAndPassword(name, email, password)
            .then(() => {
                // Log the user out after successful registration
                navigate("/");
                toast.success('Đăng ký thành công !');
                
            })
            .catch((error) => {
                console.error(error);
                alert(error.message);
            });
    };


    useEffect(() => {
        if (loading) return;
        if (user) navigate("/login"); // Use navigate to redirect to a different route.
    }, [user, loading, navigate]);

    return (
        <>
            <Header />
            <div className="register">
                <div className="register__container">
                    <input
                        type="text"
                        className="register__textBox"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Full Name"
                    />
                    <input
                        type="text"
                        className="register__textBox"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-mail Address"
                    />
                    <input
                        type="password"
                        className="register__textBox"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                    <button className="register__btn" onClick={register}>
                        Register
                    </button>
                    <button
                        className="register__btn register__google"
                        onClick={signInWithGoogle}
                    >
                        Register with Google
                    </button>

                </div>
            </div>
      
        </>
    );
}

export default Register;
