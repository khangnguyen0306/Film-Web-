
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Content from './components/contents/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Detail from './components/contents/detail';
import ContactPage from './components/contents/contact';
import AboutPage from './components/contents/about';

import NewsPage from './components/contents/newpage';
import NewsDetail from './components/contents/newsdetail';
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContextProvider } from './components/services/AuthConext';
import Logintest from './components/services/login';
import Register from './components/services/register';
import Reset from './components/services/reset';
import React, { useState, useEffect } from 'react';
import ProtectedRoute from './components/services/ProtectedRoute';
import DashboardHome from './components/dashboard/dashboardhome';
import DashboardHomeNews from './components/dashboardNews/dashboardhome';
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is authenticated (e.g., based on your authentication logic)
    // Update the 'isAuthenticated' state accordingly
  }, []);
  return (
    <>
      <AuthContextProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Content />} />
            <Route path='/detail/:id' element={<Detail />}></Route>
            <Route path='/contact' element={<ContactPage />}></Route>
            <Route path='/about' element={<AboutPage />}></Route>
            <Route path='/newspage' element={<NewsPage />}></Route>
            <Route path='/login' element={<Logintest />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/reset' element={<Reset />}></Route>
            <Route path='newspage/newsdetail/:id' element={<NewsDetail />}></Route>
            
            <Route path="/dashboard" element={<ProtectedRoute><DashboardHome /></ProtectedRoute>} />
            <Route path="/dashboardnews" element={<ProtectedRoute><DashboardHomeNews/></ProtectedRoute>} />
          </Routes>


        </Router>
      </AuthContextProvider>
    </>
  );
}

export default App;
