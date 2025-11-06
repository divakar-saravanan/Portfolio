import React from 'react'
import { Link } from 'react-router-dom'
import namelogo from "./assets/namelogo.png"

const Navbar = () => {
 
  
const liStyle ={display:"inline-block", 
    padding:"5",
}

const LinStyle = {textDecoration:"none", color:"White",padding:"10px"}

  return (
    <nav className="navbar">
    <Link className="navbar-brand d-flex align-items-center">
          <img
            src={namelogo}
            alt="Logo"
            width="40"
            height="40"
            className="me-2 rounded-circle"
          /></Link>
    <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/Skills">Skills</Link></li>
      <li><Link to="/projects">Projects</Link></li>
   
    </ul>
  </nav>
  )
}

export default Navbar;
