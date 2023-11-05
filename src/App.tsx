import React, { Fragment } from 'react';
import './App.css';
import './css/Navbar.css';

import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Layout from './components/Layout';
import MainPage from './pages/main';
import Navbar from './components/Navbar';
import Account from './pages/account';



function App() {
  return (
    
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<MainPage/>}/>
        <Route path='/account' element={<Account/>}/>
      </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
