// Navbar.js
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import logo1 from "../assets/images/Logo.png"
import side from "../assets/images/menu.png" 
import '../assets/css/navbar.css';

const Navbar = () => {

   const [flag,setFlag]=useState(false);
   const navigate =useNavigate();

 
  return (
    <>
    <nav className="navbar">
      <div className="logo">
      <img src={logo1} alt="Description of the image"/>
      </div>
      <div className='name'>
      <span>kids party</span>
      </div>
      <ul className="nav-links">
      <li className="nav-item"><Link to="/">Home</Link></li>
      <li className="nav-item"><Link to="/about">About</Link></li>
      <li className="nav-item"><Link to="/contact">Contact</Link></li>
      <li className="nav-item"><Link to="/service">Service</Link></li>
      <li className="nav-item"><Link to="/dashboard">Dashboard</Link></li>
      <li className="nav-item"><Link to="/login">Login</Link></li>
      </ul>
     
      </nav>
    </>
  );
};

export default Navbar;
