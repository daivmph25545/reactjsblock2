import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';
import { useState } from 'react';
import Login from './components/Login';
import Calculator from './components/btvn';
import BT1 from './components/formgido';
import ParentMount from './components/ParentMount';
import ComponentA from './components/componentA';
import ComponentB from './components/componentB';

import {BrowserRouter , Routes, Route } from 'react-router-dom';
import HomePage from './components/template/Homepage';
import AboutPage from './components/template/About';
import ShowStudent from './components/pages/student/ShowStudent';
import FormStudent from './components/pages/student/FormStudent';
import UpdateStudent from './components/pages/student/UpdateStudent';
import Cart from './components/pages/student/Cart';




function App() {


  return (
    <BrowserRouter>
    
    <div>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<ShowStudent />} />
        <Route path="/create" element={<FormStudent />} />
        <Route path="/edit/:id" element={<UpdateStudent />} />
        {/* <Route path="/cart" element={<Cart />} /> */}


      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App;
