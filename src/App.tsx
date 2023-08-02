import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import {BrowserRouter , Routes, Route } from 'react-router-dom';
import ShowStudent from './components/pages/student/ShowStudent';
import FormStudent from './components/pages/student/FormStudent';
import UpdateStudent from './components/pages/student/UpdateStudent';
import Cart from './components/pages/student/Cart';
// import { CounterTk } from './components/pages/student/CounterTk';



function App() {


  return (
    
    <BrowserRouter>
    <div>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        
        <Route path="/" element={<ShowStudent />} />
        <Route path="/create" element={<FormStudent />} />
        <Route path="/edit/:id" element={<UpdateStudent />} />

        {/* <Route path="/cart" element={<Cart />} /> */}

        
      </Routes>
    // </div>
    </BrowserRouter>
  )
}

export default App;
