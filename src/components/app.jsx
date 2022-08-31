import React from 'react';
import Header from './header';
import Footer from './footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from './Auth';
import Home from './Home';
import Signup from './signup';
function App(){
    return(
    <div>
     <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
       <Route path='/auth' element={<Auth/>}/>
       <Route path='/signup' element={<Signup/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
      
         </div>
      )
}
export default App;