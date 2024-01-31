// Navbar.js
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import logo1 from "../assets/images/Logo.png"
import side from "../assets/images/menu.png" 
import '../assets/css/navbar.css';

const AdminNav = () => {

   const [flag,setFlag]=useState(false);
   const navigate =useNavigate();

 
  return (
    <>
    <nav className="navbar" style={{backgroundColor:"rgb(10, 50, 10)"}}>
      <div className="logo">
      <img src={logo1} alt="Description of the image"/>
      </div>
      <div className='name'>
      <span style={{color:"white"}}>kids party</span>
      </div>
      <ul className="nav-links">
      <li className="nav-item"><Link to="/admin">Home</Link></li>
      <li className="nav-item"><Link to="/view">View Events</Link></li>
      <li className="nav-item"><Link to="/cancel">Cancel Event</Link></li>
      <li className="nav-item"><Link to="/login">Logout</Link></li>
      </ul>
     
      </nav>
    </>
  );
};

export default AdminNav;
