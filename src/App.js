import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Price from '../../app-uno/src/components/pages/Price';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/Services' element={<Services/>} />
           <Route path='/Products' element={<Products/>} />
           <Route path='/SignUp' element={<SignUp/>} />
           <Route path='/Price' element={<Price/>} />
           
          {/* <Route path='/' exact component={Home} /> */}
          {/* <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
