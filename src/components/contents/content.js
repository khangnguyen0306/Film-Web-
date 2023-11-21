import React from 'react';
import Filmss from './filmlist';
import Nav from '../header/header';
import ImageSlider from './slideshow';
import News from './news';
import { Container, Row, Col } from 'react-bootstrap';
import '../contents/content.scss'
import { Foote } from '../footer/footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Content() {
  return (
    <>
      <Nav />
      <div>
        <ImageSlider />
        <Filmss />
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
      </div>
      <Foote/>
    </>
  );
}
