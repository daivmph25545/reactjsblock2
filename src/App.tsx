import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLayout from './components/layout/adminLayout';
import AddStudent from './components/pages/student/AddStudent';
import Admin from './components/pages/student/Admin';
import Signin from './components/pages/student/signin';
import Signup from './components/pages/student/signup';
import UserLayout from './components/layout/userLayout';
import ProductDetail from './components/pages/student/productDetail';
import DetailLayout from './components/layout/detailLayout';
import HomePage from './components/pages/student/Homepage';



function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/' element={<UserLayout />}>
        <Route index element={<HomePage />} />
        </Route>
        {/* <Route path='product/:id' element={<DetailLayout />} /> */}
        

        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<Admin />} />
          {/* <Route path='product/:id' element={<ProductUpdate/>}/> */}
          <Route path='/admin/create' element={<AddStudent />} />
        </Route>
      </Routes>
    </BrowserRouter>


  )
}

export default App;
