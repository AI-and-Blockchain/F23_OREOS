import React from 'react';
import { Link } from 'react-router-dom';
import FindHomeIcon from './findhome.png'; // Replace with the actual path to your Find Home icon
import InvestIcon from './invest.png'; // Replace with the actual path to your Invest icon

function Navbar() {
  return (
    <nav className="navbar" style={{ position: 'fixed', width: '97%', backgroundColor: 'black', color: 'white', padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ fontSize: '36px', fontWeight: 'bold' }}>OREOS</div>
      <div className="navbar-menu" style={{ display: 'flex' }}>
        <Link to="/find-home" className="navbar-menu-item" style={{ margin: '0px', textAlign: 'left', textDecoration: 'none', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src={FindHomeIcon} alt="Find Home" style={{ width: '86px', height: '60px', marginBottom: '5px' }} />
          <p style={{ margin: '0', fontSize: '14px' }}>Find a Home</p>
        </Link>
        <Link to="/invest" className="navbar-menu-item" style={{ margin: '0px', textAlign: 'center', textDecoration: 'none', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src={InvestIcon} alt="Invest" style={{ width: '86px', height: '60px', marginBottom: '5px' }} />
          <p style={{ margin: '0', fontSize: '14px' }}>Invest</p>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
