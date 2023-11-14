import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar" style={{ position: 'fixed', width: '97%', backgroundColor: 'black', color: 'white', padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ fontSize: '36px', fontWeight: 'bold' }}>OREOS</div>
      <div className="navbar-menu" style={{ display: 'flex' }}>
        <Link to="/find-home" className="navbar-menu-item" style={{ margin: '0 10px' }}>
          Find a Home
        </Link>
        <Link to="/invest" className="navbar-menu-item" style={{ margin: '0 10px' }}>
          Invest
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
