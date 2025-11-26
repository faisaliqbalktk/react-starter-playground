import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className='nav container'>
      <h1 className="logo">Faisu</h1>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar;
