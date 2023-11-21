import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, logInWithEmailAndPassword, signInWithGoogle } from './firebase';
import '../services/login.scss';
import Header from '../header/header';
import Register from './register';
import Reset from './reset';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Logintest() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notification, setNotification] = useState(''); // State for notification message
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // Loading
    }
    if (user) {
      navigate('/'); // Redirect to the dashboard upon successful login
    }
  }, [user, loading]);

  const handleToggleRegister = () => {
    const registerPopup = document.getElementById('register-popup');
    if (registerPopup.style.display === 'none' || !registerPopup.style.display) {
      registerPopup.style.display = 'block'; // Show the container
    } else {
      registerPopup.style.display = 'none'; // Hide the container
    }
  };
  const handleToggleReset = () => {
    const resetPopup = document.getElementById('reset-popup');
    if (resetPopup.style.display === 'none' || !resetPopup.style.display) {
      resetPopup.style.display = 'block'; // Show the container
    } else {
      resetPopup.style.display = 'none'; // Hide the container
    }
  };
  const handleLogin = () => {
    logInWithEmailAndPassword(email, password).catch((error) => {
      if (error.code === 'auth/user-not-found') {
        // User not found, set the notification message
        setNotification('User not found. Please check your email or password again.');
      } else {
        alert('Login failed. Check your email and password.');
      }
    });
  };

  return (
    <>
      <div className='fullscreen-login-container'>
        <Header />

        <div className="login">

          <div className="login__container">
            {notification && <div className="notification" style={{ color: 'red', marginBottom: '20px' }}>{notification}</div>} {/* Notification display */}
            <h2 style={{ marginBottom: '30px', color: 'rgb(250, 245, 236)' }}>Đăng Nhập</h2>
            <input
              type="text"
              className="login__textBox" a
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail Address"

            />

            <input
              type="password"
              className="login__textBox"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />

            <button
              className="login__btn"
              onClick={() => handleLogin()}

            >
              SIGN IN
            </button>
            <div className=" login__google" onClick={signInWithGoogle} style={{ cursor: 'pointer', marginBottom: '10px' }}>

              <span style={{ padding: '20px 20px 17px 20px', borderRadius: '50%', backgroundColor: '#da4f40', marginLeft: '10px' }}>
                <i class="bi bi-google" style={{ color: 'white', fontSize: '25px' }}></i></span>
            </div>

            <div>
              <Link onClick={handleToggleReset} style={{ textDecoration: 'none', color: 'whitesmoke', fontWeight: '300' }}>Forgot Password</Link>
            </div>
            <div style={{ display: "flex", alignItems: 'center', justifyContent: 'center', color: 'white' }}>
              If you dont have account
              <Link onClick={handleToggleRegister} style={{ color: 'rgb(252, 229, 182)', padding: '10px 10px' }}>SIGN UP</Link>
              here !
            </div>
          </div>
          <div id="register-popup" className="register-popup">
            <div className="close-button" onClick={handleToggleRegister}><i class="bi bi-x-square"></i>  
            </div>
            <Register />
          </div>
          <div id="reset-popup" className="register-popup">
            <div className="close-button" onClick={handleToggleReset}><i class="bi bi-x-square"></i>  
            </div>
            <Reset />
          </div>
        </div>
      </div>
      <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
    </>
  );
}
