import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">OREOS</div>
      <div className="navbar-menu">
        <Link to="/find-home" className="navbar-menu-item">
          Find a Home
        </Link>
        <Link to="/invest" className="navbar-menu-item">
          Invest
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
