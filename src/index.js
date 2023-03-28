import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import BuyBooks from './pages/BuyBooks';
import './css/index.css'
import SellBooks from './pages/SellBooks';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Signup from './pages/Signup';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
    
      <Routes path='/'>
        <Route index element={ <Home/>} ></Route>
        <Route path='buy' element={ <BuyBooks/>} ></Route>
        <Route path='sell' element={ <SellBooks/>} ></Route>
        <Route path='signup' element={ <Signup/>} ></Route>

      </Routes>
      
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);

