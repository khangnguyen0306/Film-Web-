
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  CssBaseline,
  createTheme,
  ThemeProvider,
  Box,
} from '@mui/material';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import '../header/header.scss'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { UseAuth } from '../services/AuthConext';
import 'bootstrap-icons/font/bootstrap-icons.css';
function Header(props) {
  const { googleSignIn, logOut, user } = UseAuth(); // Use the UseAuth hook to access user and authentication functions

  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  const [darkMode, setDarkMode] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  const lightTheme = createTheme({
    palette: {
      primary: {
        main: '#3f51b5',
      },
      secondary: {
        main: '#f50057',
      },
      mode: 'light',
    },
  });

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#3f51b5',
      },
      secondary: {
        main: '#f50057',
      },
      mode: 'dark',
    },
  });

  const theme = darkMode ? darkTheme : lightTheme;
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={`fixed-header ${darkMode ? 'dark-mode' : ''}`}>
        <Navbar expand="lg" className="bg-body-tertiary" style={{ padding: '0 0 ' }}>
          <Container fluid style={{ backgroundColor: 'white' }}>
            <Navbar.Brand className='brand ' href="/"><img className='logo' style={{ width: '60px', height: '60px' }} src='https://i.pinimg.com/564x/23/c4/bb/23c4bbb53f1a9af06c99149d1fe01cb6.jpg'></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '200px' }}
                navbarScroll
              >
                <NavLink to="/" activeClassName="active" className="nav-link">HOME</NavLink>
                <NavLink to="/newspage" className="nav-link">NEWS</NavLink>


                <NavLink to="/about" style={{ textDecoration: 'none', color: '#535b62' }} className="nav-link">ABOUT</NavLink>


                <NavLink to="/contact" activeClassName="active" className="nav-link">CONTACT</NavLink>

              </Nav>

              <Nav>
                {user ? (
                  <div className="custom-dropdown" >
                    <NavLink  style={{ textDecoration: 'none', color: '#535b62', border: '1px solid black', borderRadius: '7px' }} className="nav-link"><span class="bi bi-person-video2" /></NavLink>
                    <div className="dropdown-menu">
                      <NavLink to="/dashboard" className="dropdown-item nav-link">
                        Dashboard
                      </NavLink>
                      <NavLink to="/dashboardnews" className="dropdown-item nav-link">
                        Dashboard News
                      </NavLink>
                      <NavLink className="dropdown-item nav-link">
                        <span onClick={logOut} style={{ cursor: 'pointer' }}>Đăng Xuất</span>
                      </NavLink>
                    </div>
                  </div>
                ) : (
                  <div className="custom-dropdown">
                    <span className="bi bi-person-circle" style={{ color: 'grey', fontSize: '35px', display: 'flex', alignItems: 'center', margin: '0 20px' }}><i class="bi bi-caret-down-fill" style={{ fontSize: 'small', marginLeft: '3px' }}></i></span>
                    <div className="dropdown-menu">
                      <NavLink to="/login" className="dropdown-item nav-link">
                        Đăng nhập
                      </NavLink>
                    </div>
                  </div>
                )
                }
              </Nav>
              <Box display="flex" alignItems="center" margin="20px 0">
                <Button color="inherit" onClick={toggleDarkMode}>
                  {darkMode ? 'Light Mode' : 'Dark Mode'}
                </Button>
              </Box>


            </Navbar.Collapse>
          </Container >
        </Navbar >
      </div >
    </ThemeProvider>
  );
}

export default Header;
