import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { Login } from './Login';
import { SzallasList } from './SzallasList';
import './App.css';
import { Logout } from './Logout';

export const App =() => {
  return (
    <Router>
      <nav className='navbar navbar-expand navbar-dark bg-dark'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <NavLink to="/">Bejelentkezes</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to={"/SzallasList"}>SzallasList</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to={"/Logout"}>Kijelentkezes</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/SzallasList" element={<SzallasList />} />
        <Route path="/Logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;
