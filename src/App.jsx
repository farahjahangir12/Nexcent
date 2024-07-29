// src/App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import ContactP from './components/ContactP.jsx';
import ServicesP from './components/ServicesP.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<ContactP/>} />
        <Route path="/service" element={<ServicesP/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
