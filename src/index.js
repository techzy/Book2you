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
import {SessionProvider} from './Contexts/SessionContext'
import Error404 from './pages/Error404';
import Profile from './pages/Profile';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SessionProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes path='/'>
          <Route index element={ <Home/>} ></Route>
          <Route path='buy' element={ <BuyBooks/>} ></Route>
          <Route path='sell' element={ <Error404><SellBooks/></Error404>} ></Route>
          <Route path='profile' element={ <Error404><Profile/></Error404>} ></Route>

          <Route path='signup' element={ <Signup/>} ></Route>
        </Routes>
        <Footer />
    </BrowserRouter>
  </SessionProvider>
  </React.StrictMode>
);

