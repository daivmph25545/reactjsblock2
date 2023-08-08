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
import StudentDetail from './components/pages/student/productDetail';
import UpdateStudent from './components/pages/student/UpdateStudent';
import Register from './components/pages/student/signup';
import Login from './components/pages/student/signin';
import { toast } from 'react-toastify';



function App() {
 
    return (

      <BrowserRouter>
        <Routes>
          <Route path='SignUp' element={<Register />} />
          <Route path='SignIn' element={<Login />} />
          <Route path='/' element={<UserLayout />}>
            <Route index element={<HomePage />} />
            {/* <Route path='/student-detail/:id' element={<DetailLayout/>}/> */}
          </Route>
          <Route path='/student-detail/:id' element={<DetailLayout />} />


          <Route path='/admin' element={<AdminLayout />}>
            <Route index element={<Admin />} />
            <Route path='edit/:id' element={<UpdateStudent />} />
            <Route path='/admin/create' element={<AddStudent />} />
          </Route>
        </Routes>
      </BrowserRouter>


    )
  }

export default App;
