import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Box from '@mui/material/Box';
import Login from './Components/Login.js';
import NavBar from './Components/NavBar.js';
import Registration from './Components/Registration.js';
import Home from './Components/Home.js';
import Contact from './Components/Contact.js';
import About from './Components/About.js';
import Search from './Components/Search.js';
import Footer from './Components/Footer.js';
import FootwearDesc from './Components/FootwearDesc';
import Cart from './Components/Cart';
import GoogleLogin from './Components/GoogleLogin';
import OrderDetail from './Components/Orderdetails.js';


export default function App() {
 
  return (
    <Box sx={{ flexGrow: 1 }}>
      <NavBar/>
      <Box sx={{mt:'70px'}}></Box>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Registration />} />
        <Route path='contact' element={<Contact />} />
        <Route path='search' element={<Search />} />
        <Route path='footwearDesc' element={<FootwearDesc />} />
        <Route path='Cart' element={<Cart />} />
        <Route path='googleLogin' element={<GoogleLogin />} />
        <Route path='orderdetail' element={<OrderDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
  }
  